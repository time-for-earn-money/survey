const Survey = require('../models/survey');

const getSurvey = async(req, res) => {
    const survey = req.survey;
    try {
        await Survey.create({survey: survey},
            { fields: ["survey"] });
        console.log(survey);
    } catch(error) {
        console.log(survey);
        console.error(error);
        res.status(400).json({
            message: "Failed"
        });
        return error;
    }
    res.status(200).json({
        message: "success"
    });
};

module.exports = {
    getSurvey
}