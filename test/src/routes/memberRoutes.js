const express = require('express');
const router = express.Router();
const memberController = require('../controllers/memberController');
//Routes for memeber funtions
router.post('/members', memberController.createMember);
router.get('/members', memberController.getAllMembers);
router.get('/members/:id', memberController.getMemberById);
router.put('/members/:id', memberController.updateMember);
router.delete('/members/:id', memberController.deleteMember);

module.exports = router;
