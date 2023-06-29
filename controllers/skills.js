const skills = require(`../models/skill`);

function index(req, res) {
    res.render(`skills/index`, 
    { 
        skills: skills.getAll()
    });
}

function show(res, res) {
    res.render(`skills/show`, 
    {
        skill: skills.getOne(id)
    });
}

module.exports = {
    index,
    show
}