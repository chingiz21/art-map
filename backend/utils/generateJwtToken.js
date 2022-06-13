const jwt = require('jsonwebtoken');

const generateJwtToken = (id, email, username, role) => {
    return jwt.sign(
        { id, email, username, role }, 
        process.env.SECRET_KEY, 
        { expiresIn: '24h'});
}

module.exports = generateJwtToken;