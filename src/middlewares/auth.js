// const jwt = require('jsonwebtoken');

// function authMiddleware(req, res, next) {
//     const token = req.headers.authorization;
//     try {
//         const decoded = jwt.verify(token, process.env.JWT_SECRET);
//         req.user = decoded;
//         next();
//     } catch (err) {
//         return res.status(401).json({ message: 'Invalid token' });
//     }
// }


function authMiddleware(req,res,next) {
    
}
module.exports = authMiddleware;
