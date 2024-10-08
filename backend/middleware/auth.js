const jwt = require('jsonwebtoken');

const isLogin = (req, res, next) => {
    try {
        const token = extractToken(req);
        if (!token) return res.status(401).json({
            success: 0,
            message: "Unauthorized"
        })
        const decoded = verifyToken(token);
        req.user = decoded;
        next();

    } catch (err) {
        res.status(400).send({
            success: 0,
            message: err.message,
        })
    }
}

function extractToken(req) {
    try {
        const [type, token] = req.headers.authorization.split(' ') ?? [];
        if (token) return token;
        return undefined;

    } catch (err) {
        return undefined
    }
}

function verifyToken(token) {
    const payload = jwt.verify(token, "c6d2ba79656f63318cabfc5f41b050705fdccea2d81f8bca185da5d735dba247");
    return payload;
}

module.exports = {
    isLogin,
}