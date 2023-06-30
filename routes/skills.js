var express = require('express');
var router = express.Router();
const skillsCtrl = require(`../controllers/skills`)

/* GET users listing. */
router.get('/', skillsCtrl.index)
router.post('/create', skillsCtrl.create)
router.get('/createForm', skillsCtrl.createForm)
router.delete('/:id', skillsCtrl.removeSkill)
router.get('/:id', skillsCtrl.show)

module.exports = router;
