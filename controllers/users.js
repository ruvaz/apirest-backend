const {response} = require('express');
const bcrypt = require('bcryptjs');
//model
const User = require('../models/user');

// get Users
const getUsers = async (req, res = response) => {
    const start = Number(req.query.start) || 0;

    try {
        const [users, total] = await Promise.all([
            // User.find({}, 'name email role id img').skip(start).limit(5),
            User.find().skip(start).limit(5),
            User.count()
        ]);

        res.json({
            ok: true,
            users,
            total
        });
    } catch (err) {
        res.status(500).json({
            ok: false,
            msg: 'Fail users api'
        });
        console.log(err)
    }
}

// Post User
const createUser = async (req, res = response) => {
    const {email, password, name} = req.body;

    try {

        const existUser = await User.findOne({email});
        if (existUser) {
            return res.status(400)
                .json({
                    ok: false,
                    msg: 'The e-mail already in use'
                });
        }

        const user = new User(req.body);
        const salt = bcrypt.genSaltSync();
        user.password = bcrypt.hashSync(password, salt);

        await user.save();

        res.json({
            ok: true,
            user
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error in new user'
        });
    }


}
module.exports = {
    getUsers,
    createUser
}
