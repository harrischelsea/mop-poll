'use strict';

var fs        = require('fs');
var path      = require('path');
var Sequelize = require('sequelize');
var dbConfig  = require('../config/db');
var basename  = path.basename(__filename);
var env       = process.env.NODE_ENV || 'development';
var db        = {};
/*
var sequelize = new Sequelize(dbConfig.dbName, dbConfig.dbUser, dbConfig.dbPassword, {
        host: dbConfig.dbHost,
        dialect: 'postgres'
    }
);
*/
var sequelize = new Sequelize('postgres://jjwbtqcw:E2o6_WFFetNi78a2IkLzNucIf1td9as2@horton.elephantsql.com:5432/jjwbtqcw');

fs
    .readdirSync(__dirname)
    .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
})
.forEach(file => {
    var model = sequelize['import'](path.join(__dirname, file));
db[model.name] = model;
});

Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
    db[modelName].associate(db);
}
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;