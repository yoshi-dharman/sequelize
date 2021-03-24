const User = require('../models/User');

module.exports = {
    getAllUser: async (req, res) => {
        const users = await User.findAll();
        res.json({
            message: "success",
            data: users
        });
    },

    // getAllUserByID: async (req, res) => {
    //     const users = await User.findByPk(req.params.id);
    //     if (users === null) {
    //         res.json({
    //             message: "not found",
    //         });
    //     } else {
    //         res.json({
    //             message: "success",
    //             data: users
    //         });
    //     }
    // },

    getAllUserByID: async (req, res) => {
        const users = await User.findOne({
            where: { id: req.params.id}
        });
        if (users === null) {
            res.json({
                message: "not found",
            });
        } else {
            res.json({
                message: "success",
                data: users
            });
        }
    }
}