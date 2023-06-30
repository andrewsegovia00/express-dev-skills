const Skills = require(`../models/skill`);

function index(req, res) {
    res.render(`skills/index`, 
    { 
        skills: Skills.getAll()
    });
}

function show(req, res) {
    res.render(`skills/show`, {
        skill: Skills.getOne(req.params.id)
    });
}

function createForm(req, res){
    // res.locals = {
    //     Skills: Skills,
    // }
    res.render(`skills/createForm`)
}

function create(req, res) {
    console.log(req.body)
    const skillName = req.body["addSkill"];

    console.log("This is the value of checkbox", req.body['addLearned'])
    const skillLearned = req.body["addLearned"] === undefined ? false: true;
    console.log("This is the value of checkbox", skillLearned);
    Skills.addSkill(skillName, skillLearned);

    res.redirect('/skills')
}

function removeSkill(req, res){
    console.log(`hello we're in the controller removeSkill`)

    Skills.removeSkill(req.params.id);

    res.redirect('/skills')
}
module.exports = {
    index,
    show,
    create,
    createForm,
    removeSkill
}