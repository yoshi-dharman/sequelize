const express = require('express');
const router = express.Router();

const { getAllUser, getAllUserByID } = require("../controllers/user.controller");

router.get('/', getAllUser);
router.get('/:id', getAllUserByID);

module.exports = router;