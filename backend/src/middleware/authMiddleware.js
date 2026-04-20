function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (token == null) return res.sendStatus(401); // Token မပါရင် ငြင်းပယ်မယ်

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) return res.sendStatus(403); // Token မမှန်ရင် သို့မဟုတ် သက်တမ်းကုန်ရင်
        req.user = user;
        next();
    });
}

module.exports = authenticateToken;