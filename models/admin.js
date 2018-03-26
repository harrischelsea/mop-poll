module.exports = (sequelize, DataTypes) => {
    var Admin = sequelize.define('Admin', {
        username: { type: DataTypes.STRING, unique: true, allowNull: false },
        password: { type: DataTypes.STRING, allowNull: false },
        role: { type: DataTypes.STRING, allowNull: false }
    });

    return Admin;
};