module.exports = (sequelize, DataTypes) => {
    var UserPoll = sequelize.define('UserPoll', {
        Done: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false }
    });

    return UserPoll;
};