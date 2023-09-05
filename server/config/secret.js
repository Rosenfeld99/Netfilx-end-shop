const env = require('dotenv');
env.config();
exports.SECRET = {
    TOKEN_SECRET: process.env.TOKEN_SECRET,
    MONGO_CONNECTION: process.env.MONGO_CONNECTION,
    PORT: process.env.PORT,
    PASS : process.env.PASS,
    USER : process.env.USER,
    URL_BASED : process.env.URL_BASED,
}