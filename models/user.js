module.exports = (sequelize, DataTypes) => {
    var User = sequelize.define('User', {
        username: { type: DataTypes.STRING, allowNull: false },
        email: { type: DataTypes.STRING, unique: true, allowNull: false },
        password: { type: DataTypes.STRING, allowNull: false }
    });

    User.associate = function(models) {
        models.User.hasMany(models.UserPoll, { foreignKey: 'user_id'});
        models.User.hasMany(models.UserAnswer, { foreignKey: 'user_id'});
    };

    return User;
};