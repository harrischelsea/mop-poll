module.exports = (sequelize, DataTypes) => {
    var Options = sequelize.define('Options', {
        text: { type: DataTypes.STRING, allowNull: false },
    });

    Options.associate = function(models) {
        models.Options.hasMany(models.UserAnswer, { foreignKey: 'options_id'});
    };

    return Options;
};