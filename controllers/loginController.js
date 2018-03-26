const auth = require('../util/auth');
const models = require('../models');

const post = () => (req,res,next) => {
    let { username, password} = req.body;
    if (!username || !password) {
        res.status(400);
        res.send({
            err: 'Bad login'
        });
        return;
    }
    password = auth.hashPassword(password);

    models.User.findOne({
        where: { username, password },
        attributes: [ 'id', 'username']
    }).then(user => {
    if (!user) throw new Error('bad login');
    return {
        token: auth.refreshToken(username),
        username: username,
        id: user.id
    };
}).then(userObj => {

    if (!userObj || !userObj.token || !userObj.username || !userObj.id){
        res.status(400).send({ err: 'Bad login'});
    } else {
        res.header("Authorization", userObj.token.toString());
        res.send({username: userObj.username, id: userObj.id, token: userObj.token.toString()});
    }
}).catch(err => {
        res.status(400).send({ err: 'Bad login'})
});
};

const postAdmin = () => (req,res,next) => {
    let { username, password} = req.body;

    if (!username || !password) {
        res.status(400);
        res.send({
            err: 'Bad login'
        });
        return;
    }

    models.Admin.findOne({
        where: { username, password },
        attributes: [ 'id', 'username', 'role']
    }).then(admin => {
        if (!admin) throw new Error('bad login');
        return {
            token: auth.refreshToken(username),
            username: username,
            id: admin.id,
            role: admin.role
        };
    }).then(adminObj => {
        if (!adminObj || !adminObj.token || !adminObj.username || !adminObj.id || !adminObj.role){
            res.status(400).send({ err: 'Bad login'});
        } else {
            res.header("Authorization", adminObj.token.toString());
            res.send({username: adminObj.username, id: adminObj.id, role: adminObj.role, token: adminObj.token.toString()});
        }
    }).catch(err => {
        res.status(400).send({ err: 'Bad login'})
    });
};

module.exports = {
    post: post,
    postAdmin: postAdmin
};