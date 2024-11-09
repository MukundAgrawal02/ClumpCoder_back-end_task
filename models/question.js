const { DataTypes } = require('sequelize');
const sequelize = require('../config/dbConfig');
const Category = require('./category');

const Question = sequelize.define('Question', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    question_text: { type: DataTypes.TEXT, allowNull: false },
    category_id: {
        type: DataTypes.INTEGER,
        references: { model: Category, key: 'id' }
    }
});

Category.hasMany(Question, { foreignKey: 'category_id' });
Question.belongsTo(Category, { foreignKey: 'category_id' });

module.exports = Question;
