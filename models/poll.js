module.exports = (sequelize, DataTypes) => {
    var Poll = sequelize.define('Poll', {
        name: { type: DataTypes.STRING, allowNull: false },
    });

    Poll.associate = function(models) {
        models.Poll.hasMany(models.Question, { foreignKey: 'poll_id'});
        models.Poll.hasMany(models.UserPoll, { foreignKey: 'poll_id'});
        models.Poll.hasMany(models.Options, { foreignKey: 'poll_id'});
    };

    return Poll;
};