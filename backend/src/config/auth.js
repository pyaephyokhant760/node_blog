const jwt = require('jsonwebtoken');
require('dotenv').config();


// Access Token ထုတ်ပေးခြင်း (သက်တမ်းတို - ၁၅ မိနစ်)
function generateAccessToken(user) {
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '15m' });
}

// Refresh Token ထုတ်ပေးခြင်း (သက်တမ်းရှည် - ၇ ရက်)
function generateRefreshToken(user) {
    return jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '7d' });
}

module.exports = { generateAccessToken, generateRefreshToken };