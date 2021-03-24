const express = require('express');
const router = express.Router();

const userRouter = require("./user");

//Routes
router.get('/', (req, res) => {
    res.json({
        message: "welc to my app"
    })
})

router.use("/user", userRouter);

module.exports = router;