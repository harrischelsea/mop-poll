var express = require('express');
var router = express.Router();
var models  = require('../models');
var auth = require('../util/auth');

var loginController = require('../controllers/loginController');
var queries = require('../queries/queries');


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/', function(req,res,next){
    console.log('aaaaaaaaaaaa');
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        res.status(400).send({ err: 'Bad register'});
        return;
    }
    const encryptedPassword = auth.hashPassword(password);
    models.User.create({ username, email, password: encryptedPassword })
        .then((user) => {
            console.log('porab');
            res.send({ status: 'OK'});
        })
        .catch(err => res.status(400).send({ err: 'Bad register.'}));
});


router.post('/login', loginController.post());
router.post('/login-admin', loginController.postAdmin());

router.get('/get-current-user', function (req, res, next) {
    res.send({id: req.user.id, username: req.user.username, token: req.user.token });
});

router.get('/get-current-admin', function (req, res, next) {
    res.send({id: req.user.id, username: req.user.username, role: req.user.role, token: req.user.token });
});

router.get('/get-all-polls', function (req,res,next) {
    let user;
    if (req.user.role) {
        user = 0;
    } else {
        user = req.user.id;
    }
    console.log('proba', user);
    queries.getAllPolls()
        .then(polls => {
            queries.getAllAnsweredPolls(user)
                .then(answeredPolls => {
                    if (answeredPolls.length == 0) {
                        res.send(polls);
                    } else {
                        let allPolls = polls.filter(el => !answeredPolls.find(a => a.id === el.id));
                        res.send(allPolls);
                    }
                }).catch(err => {
                res.status(400).send(err);
            });
        }).catch(err => {
        res.status(400).send(err);
    });
});

router.get('/get-all-questions/:pollId', function (req,res,next) {
    let { pollId } = req.params;
    queries.getAllQuestions(pollId)
        .then(questions => {
            //res.send(questions);
            queries.getAllOptions(pollId)
                .then(options => {
                    var pitanja = [];
                    for (var i = 0; i < questions.length; i++) {
                        pitanja[i] = {
                            id: questions[i].id,
                            text: questions[i].text,
                            tip: questions[i].type_id,
                            opcije: []
                        }
                    }

                    for (var i = 0; i < pitanja.length; i++) {
                        for (var j = 0; j < options.length; j++) {
                            if (pitanja[i].id == options[j].pitanje) {
                                options[j] = {...options[j], selected: false};
                                pitanja[i].opcije.push(options[j]);
                            }
                        }
                    }

                    res.send(pitanja);
                });
        })
        .catch(err => {
            res.status(400).send('err');
        });
});

router.get('/get-all-options/:pollId', function (req,res,next) {
    let { pollId } = req.params;
    queries.getAllOptions(pollId)
        .then(options => {
            res.send(options);
        }).catch(err => {
        res.status(400).send('err');
    });
});

router.post('/send-poll-results', function (req,res,next) {
    let  user_id  = req.user.id;
    const { options, poll_id } = req.body;

    queries.answeredPoll(poll_id, user_id)
        .then(e => {
            options.map( el => {
                queries.insertAnswers(el.text, el.id, user_id)
                    .then(e => {
                        //TODO Optimize
                    }).catch(err => {
                    res.status(400).send('err');
                });
            });
        }).catch(err => {
        res.status(400).send('err');
    });

    res.send('ok');
});

router.post('/send-poll', function (req,res,next) {
    let admin_id  = req.user.id;
    const { pollName, questions } = req.body;

    queries.insertPoll(pollName)
        .then( poll => {
            console.log('poll', poll);
            questions.map( q => {
                queries.insertQuestion(q, poll)
                    .then(question => {

                        q.options.map( o => {
                            queries.insertOptions(o, poll, question)
                                .then(option => {
                                    //TODO Optizmize
                                }).catch(err => {
                                console.log(err);
                                res.status(400).send('err');
                            });
                        });

                    }).catch(err => {
                    res.status(400).send('err');
                });
            });
            res.send({ status: 'OK'});
        })
        .catch(err => res.status(400).send({ err: 'Bad request' }));

});

router.post('/update-question', function (req,res,next) {
    const { currentQuestion } = req.body;
    queries.updateQuestion(currentQuestion)
        .then(e => {
            res.send('ok');
        }).catch(err => {
        console.log(err);
        res.status(400).send('err');
    });
});

router.post('/add-question', function (req,res,next) {
    const { addQuestion, poll_id } = req.body;
    console.log('TEST',addQuestion);
    console.log('pid',poll_id);
    console.log(5555);
    queries.insertQuestion(addQuestion, poll_id)
        .then(question_id => {
            console.log(question_id);
            addQuestion.opcije.map( el => {
                queries.insertOptions(el.text, poll_id, question_id)
                    .then(e => {
                        //TODO Optimize
                    }).catch(err => {
                    res.status(400).send('err');
                });
            });
        }).catch(err => {
        res.status(400).send('err');
    });
    res.send('ok');
});

router.post('/delete-question', function (req,res,next) {
    const { deleteCurrentQuestion } = req.body;
    queries.deleteQuestion(deleteCurrentQuestion.id)
        .then(e => {
            deleteCurrentQuestion.opcije.map( o => {
                queries.deleteOption(o.id)
                    .then(e => {
                        //TODO Optimize
                    }).catch(err => {
                    res.status(400).send('err');
                });
            });
            res.send('ok');
        }).catch(err => {
        res.status(400).send('err');
    });
});

router.post('/delete-option', function (req,res,next) {
    const { currentOption } = req.body;
    queries.deleteOption(currentOption.id)
        .then(e => {
            //TODO Optimize
        }).catch(err => {
        res.status(400).send('err');
    });
    res.send('ok');
});

router.post('/add-option', function (req,res,next) {
    const { currentOption, poll_id, currentQuestion } = req.body;
    queries.insertOptions(currentOption.text, poll_id, currentQuestion.id)
        .then(id => {
            //TODO Optimize
            res.send(id);
        }).catch(err => {
        res.status(400).send('err');
    });
});

router.post('/delete-poll', function (req,res,next) {
    const { pollId } = req.body;
    queries.deletePoll( pollId )
        .then(id => {
            res.send(id);
        }).catch(err => {
        res.status(400).send('err');
    });
});



module.exports = router;
