const express = require("express");
const user= require('../Controllers/user.controller.js');
const router = express.Router();

router.get('/:id', user.getUser);
router.put('/:id', user.editUser);
router.delete('/:id', user.deleteUser);

module.exports = router;
