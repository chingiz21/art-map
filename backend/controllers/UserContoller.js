const ApiError = require("../error/ApiError");
const { User } = require("../models/models");
const bcrypt = require('bcrypt');
const generateJwtToken = require('../utils/generateJwtToken');


class UserController {
    async registration(req, res, next) {
        const { email, password, username, role } = req.body;
        
        if (!email || !password) {
            return next(ApiError.badRequest("Didn't get email or password"));
        }

        const emailValidation = await User.findOne({ where: { email }});
        if (emailValidation) {
            return next(ApiError.badRequest("User with this email is already exist"));
        }

        const usernameValidation = await User.findOne({ where: { username }});
        if (usernameValidation) {
            return next(ApiError.badRequest("User with this username is already exist"));
        }

        const hashPasswd = await bcrypt.hash(password, 5);
        const user = await User.create({ email, password: hashPasswd, username, role });
        const jToken = generateJwtToken(user.id, user.username, user.email, user.role);

        return res.json({ jToken });

    }
    async login(req, res, next) {
        const { email, password } = req.body;
        const user = await User.findOne({ where: { email } });
        console.log(user);

        if (!user) {
            return next(ApiError.internal("No such user"))
        };

        let comparePassword = bcrypt.compareSync(password, user.password);
        if (!comparePassword) {
            return next(ApiError.forbidden('Wrong password'));
        }

        const jToken = generateJwtToken(user.id, user.email, user.username, user.role);

        return res.json({ jToken });

    }

    async check(req, res, next) {
        const token = generateJwtToken(req.user.id, req.user.username, req.user.email, req.user.role);
        return res.json({ token })
    }
}

module.exports = new UserController();