module.exports = (sequelize, DataTypes) => {
    var Question = sequelize.define('Question', {
        text: { type: DataTypes.STRING, allowNull: false },
    });

    Question.associate = function(models) {
        models.Question.hasMany(models.Options, { foreignKey: 'question_id'});
    };

    return Question;
};