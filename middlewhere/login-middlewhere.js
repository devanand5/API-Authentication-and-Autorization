const jwt = require('jsonwebtoken')

const verifyToken = async (req,res,next) =>{
    let token;
    let getToken = req.headers.Authorization || req.headers.authorization;

    if(getToken && (await getToken.startsWith('Bearer'))) {
        token = getToken.split(' ')[1]
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err,decoded)=>{
            if(err) throw new Error("the code does not match");
            console.log(decoded.user)
            req.body = decoded.user
        })
    }
    else {
        return res.json({
            success:false,
            msg:"the token not valid"
        })
    }
    next()

}

module.exports = {
    verifyToken
}