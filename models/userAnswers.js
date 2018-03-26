module.exports = (sequelize, DataTypes) => {
    var UserAnswer = sequelize.define('UserAnswer', {
        answer: { type: DataTypes.STRING, allowNull: false },
    });

    return UserAnswer;
};