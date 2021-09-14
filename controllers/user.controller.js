const models = require ('../models');
const User = models.User;
const register = async (req, res) => {
    const data = req.body;await User.create(data);
    res.json("Registration successful");
}

module.exports = {register}