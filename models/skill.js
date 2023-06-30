const skills = [
    {id: 12334, name: 'javscript', learned: true},
    {id: 23445, name: 'express', learned: true},
    {id: 34452, name: 'mongoDB', learned: false},
    {id: 45212, name: 'node.js', learned: true},
    {id: 92845, name: 'python', learned: false},
    {id: 11924, name: 'postresSQL', learned: false},
    {id: 19345, name: 'html', learned: true},
    {id: 64821, name: 'css', learned: true},
];

function getAll() {
    return skills;
}

function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
}

function addSkill(tech, progress) {
    const id = Date.now() % 1000000
    console.log(tech, progress)
    skills.push(
        {
            id: id,
            name: tech,
            learned: progress,
        }
    )
}

function removeSkill(id) {
    id = parseInt(id);
    console.log(`Find the index based on the id of the todo object`)
    const idx = skills.findIndex(skill => skill.id === id);
    skills.splice(idx, 1);
}

module.exports = {
    getAll,
    getOne,
    addSkill,
    removeSkill,

}