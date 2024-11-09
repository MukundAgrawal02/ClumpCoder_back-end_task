const Question = require('../models/question');

exports.createQuestion = async (req, res) => {
    const question = await Question.create({
        question_text: req.body.question_text,
        category_id: req.body.category_id
    });
    res.status(201).json(question);
};

exports.getQuestions = async (req, res) => {
    const questions = await Question.findAll();
    res.json(questions);
};

exports.updateQuestion = async (req, res) => {
    await Question.update({ question_text: req.body.question_text }, { where: { id: req.params.id } });
    res.status(200).send('Question updated');
};

exports.deleteQuestion = async (req, res) => {
    await Question.destroy({ where: { id: req.params.id } });
    res.status(200).send('Question deleted');
};
