const skills = require(`../models/skill`);

function index(req, res) {
    res.render(`skills/index`, skills.getAll);
}

function show() {
    res.render(`skills/show`, skills.getOne(id));
}

module.exports = {
    index,
    show
}