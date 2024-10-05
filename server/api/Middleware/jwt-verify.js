const jwt = require('jsonwebtoken');
const SECRET = "jwttoken";
const JwtVerify = (req,res)=>{
    const token = req.accessToken;

    if(!token){
        return res.status(400).json({message:"token not found"})
    }
    
    jwt.verify(token, SECRET, function(err, decoded){
        if(err){
            return res.status(400).json({message:"token is invalid"})  
        }
    })

    
    

}

module.exports = JwtVerify;


