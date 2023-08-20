import jwt from 'jsonwebtoken'
import UserModel from '../models/User.js'

var checkUserAuth = async (req, res, next) => {
  // let token
  const token = req.headers.authorization
  console.log("authorization-0--", token)

  if (!token) {
    return res.status(401).send({ "status": "failed", "message": "Unauthorized User, No Token" });
  }
  const verifyToken = token.split(' ')[1]

  jwt.verify(verifyToken, process.env.JWT_SECRET_KEY, (err, decoded) => {
    console.log("err---->", decoded)
    if (err) {
      return res.status(403).json({ "status": "failed", "message": "Token Verification failed" });
    }
    req.headers._id = decoded._id;
    console.log("user id---", req.headers._id)
    next();
  })
}
// var checkUserAuth = async (req, res, next) => {
//   let token
//   const { authorization } = req.headers
//   console.log("authorization-0--", authorization)
//   if (authorization && authorization.startsWith('Bearer')) {
//     try {
//       // Get Token from header
//       token = authorization.split(' ')[1]

//       // Verify Token
//       const { userID } = jwt.verify(token, process.env.JWT_SECRET_KEY)

//       // Get User from Token
//       req.user = await UserModel.findById(userID).select('-password')

//       next()
//     } catch (error) {
//       console.log(error)
//       res.status(401).send({ "status": "failed", "message": "Unauthorized User" })
//     }
//   }
//   if (!token) {
//     res.status(401).send({ "status": "failed", "message": "Unauthorized User, No Token" })
//   }
// }

export default checkUserAuth