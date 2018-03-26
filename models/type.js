module.exports = (sequelize, DataTypes) => {
    var Type = sequelize.define('Type', {
        name: { type: DataTypes.STRING, unique: true, allowNull: false },
    });

    Type.associate = function(models) {
        models.Type.hasMany(models.Question, { foreignKey: 'type_id'});
    };

    return Type;
};