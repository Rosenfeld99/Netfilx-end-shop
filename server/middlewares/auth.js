const jwt = require("jsonwebtoken");
const { SECRET } = require("../config/secret");

exports.auth = (req, res, next) => {
    const token = req.header("x-api-key");
    if (!token) {
        return res.status(401).json({ err: "You need send token to this end point" })
    }
    try {
        const decodeToken = jwt.verify(token, SECRET.TOKEN_SECRET);
        req.tokenData = decodeToken
        next();
    } catch (err) {
        res.status(401).json({ err: "token invalid or expired" })
    }
}

exports.authAdmin = (req, res, next) => {
    const token = req.header("x-api-key");
    if (!token) {
        return res.status(401).json({ err: "You need send token " })
    }
    try {

        const decodeToken = jwt.verify(token, SECRET.TOKEN_SECRET);
        if (decodeToken.role != "admin" && decodeToken.role != "superadmin") {
            return res.status(401).json({ err: "You must be admin in this endpoint" })
        }
        req.tokenData = decodeToken
        next();
    } catch (err) {
        res.status(401).json({ err: "token invalid or expired" })
    }
}

exports.authManager = (req, res, next) => {
    const token = req.header("x-api-key");
    if (!token) {
        return res.status(401).json({ err: "You need send token " })
    }
    try {

        const decodeToken = jwt.verify(token, SECRET.TOKEN_SECRET);
        if (decodeToken.role != "admin" && decodeToken.role != "manager") {
            return res.status(401).json({ err: "You must be admin or manager in this endpoint" })
        }
        req.tokenData = decodeToken
        next();
    } catch (err) {
        res.status(401).json({ err: "token invalid or expired" })
    }
}