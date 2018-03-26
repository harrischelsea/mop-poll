var db = require('../models');
var sequelize = db.sequelize;

async function getAllPolls() {
    let res =  await sequelize.query(
        `SELECT "Polls".id, "Polls".name FROM "Polls" 
        `,
        { type: sequelize.QueryTypes.SELECT});
    return res;
}

async function getAllAnsweredPolls(user_id) {
    let res =  await sequelize.query(
        `SELECT "Polls".id, "Polls".name FROM "Polls"
            INNER JOIN "UserPolls" on "UserPolls"."poll_id" = "Polls".id
            WHERE "UserPolls"."user_id" = ?
        `,
        { replacements: [user_id], type: sequelize.QueryTypes.SELECT});
    return res;
}

async function getAllQuestions(pollId) {
    let res =  await sequelize.query(
        `SELECT "Questions".id, "Questions".text, "Questions".type_id FROM "Questions"
        WHERE  "Questions".poll_id = ?
        `,
        { replacements: [pollId], type: sequelize.QueryTypes.SELECT});
    console.log(res);
    return res;
}

async function getAllOptions(pollId) {
    let res =  await sequelize.query(
        `SELECT "Options".id, "Options".text, "Options"."poll_id", "Options"."question_id" as pitanje  FROM "Options"
        INNER JOIN "Questions" ON "Questions".id = "Options"."question_id"
        WHERE  "Options"."poll_id" = ?
        `,
        { replacements: [pollId], type: sequelize.QueryTypes.SELECT});
    console.log(res);
    return res;
}

async function insertAnswers(answer, options_id, user_id) {
    let res =  await sequelize.query(
        `INSERT INTO "UserAnswers" ("answer", "createdAt", "updatedAt", "options_id", "user_id")
             VALUES (?, current_date, current_date, ?, ?) 
        `,
        { replacements: [answer, options_id, user_id], type: sequelize.QueryTypes.SELECT});
    console.log(res);
    return res;
}

async function insertPoll(pollName) {
    console.log(1);
    let query1 = await sequelize.query(
        `       INSERT INTO "Polls" (name, "createdAt", "updatedAt")
                VALUES (?, current_date, current_date) RETURNING id;`
        , { replacements: [pollName], type: sequelize.QueryTypes.SELECT});
    const poll_id = query1[0].id;
    console.log("pid", poll_id);
    return poll_id;
}

async function insertQuestion(questions, poll_id) {
    console.log(1);
    let query1 = await sequelize.query(
        `       INSERT INTO "Questions" (text, "createdAt", "updatedAt", "poll_id", "type_id")
                VALUES (?, current_date, current_date, ?, ?) RETURNING id;`
        , { replacements: [questions.name, poll_id, questions.selectedType], type: sequelize.QueryTypes.SELECT});
    const question_id = query1[0].id;
    console.log("pid", question_id);
    return question_id;
}

async function insertOptions(options, poll_id, question_id) {
    console.log(1);
    let query1 = await sequelize.query(
        `       INSERT INTO "Options" (text, "createdAt", "updatedAt", "poll_id", "question_id")
                VALUES (?, current_date, current_date, ?, ?) RETURNING id;`
        , { replacements: [options, poll_id, question_id], type: sequelize.QueryTypes.SELECT});

    return query1;
}

async function deleteQuestion(question_id) {
    let res =  await sequelize.query(
        `DELETE FROM "Questions"
             WHERE "Questions".id = ? 
        `,
        { replacements: [question_id], type: sequelize.QueryTypes.SELECT});
    console.log(res);
    return res;
}

async function deleteOption(option_id) {
    let res =  await sequelize.query(
        `DELETE FROM "Options"
             WHERE "Options".id = ? 
        `,
        { replacements: [option_id], type: sequelize.QueryTypes.SELECT});
    console.log(res);
    return res;
}

async function updateQuestion(question) {
    let res =  await sequelize.query(
        `UPDATE "Questions" SET text = ?
         WHERE id = ? 
        `,
        { replacements: [question.text, question.id], type: sequelize.QueryTypes.SELECT});
    console.log(res);
    return res;
}

async function answeredPoll(poll_id, user_id) {
    console.log(1);
    let query1 = await sequelize.query(
        `       INSERT INTO "UserPolls" ("Done", "createdAt", "updatedAt", "poll_id", "user_id")
                VALUES (?, current_date, current_date, ?, ?) RETURNING id;`
        , { replacements: [true, poll_id, user_id], type: sequelize.QueryTypes.SELECT});

    return query1;
}

async function deletePoll(poll_id) {
    let res =  await sequelize.query(
        `DELETE FROM "Polls"
             WHERE "Polls".id = ? 
        `,
        { replacements: [poll_id], type: sequelize.QueryTypes.SELECT});
    console.log(res);
    return res;
}


module.exports = {
    getAllPolls: getAllPolls,
    getAllAnsweredPolls: getAllAnsweredPolls,
    getAllQuestions: getAllQuestions,
    getAllOptions: getAllOptions,
    insertAnswers: insertAnswers,
    insertPoll: insertPoll,
    insertQuestion: insertQuestion,
    insertOptions: insertOptions,
    deleteQuestion: deleteQuestion,
    deleteOption: deleteOption,
    updateQuestion: updateQuestion,
    answeredPoll: answeredPoll,
    deletePoll: deletePoll
};