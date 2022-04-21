const sequlize = require('../db');
const { DataTypes } = require('sequelize');

const User = sequlize.define('user', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    email: { type: DataTypes.STRING, unique: true },
    password: { type: DataTypes.STRING },
    username: { type: DataTypes.STRING, unique: true },
    role: { type: DataTypes.STRING, defaultValue: 'USER' }
});

const Data = sequlize.define('data', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: { type: DataTypes.STRING },
    description: { type: DataTypes.TEXT },
    imgs: { type: DataTypes.ARRAY(DataTypes.STRING(1024)) },
    wikiLink: { type: DataTypes.STRING(1024) },
    mapsLink: { type: DataTypes.ARRAY(DataTypes.STRING(1024)) },
    authorInfo: { type: DataTypes.ARRAY(DataTypes.STRING(1024)) }
});

const Markers = sequlize.define('markers', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    latitude : { type: DataTypes.FLOAT },
    longitude : { type: DataTypes.FLOAT },
});

Data.hasOne(Markers);
Markers.belongsTo(Data);

module.exports = { User, Data, Markers};