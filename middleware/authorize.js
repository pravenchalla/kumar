const jwt = require('jsonwebtoken')
const secretkey = 'PraveenK'

const protect = async (req,res,next) => {
    let token;
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        try{
            token = req.headers.authorization.split(' ')[1];
            const decoded = jwt.verify(token, secretkey)
            req.user = decoded;
            next();
        }catch(err){
            res.status(401).json({
                success: false
            })
        }
    }
    if(!token){
        res.status(401).json({
            success: false,
            message: "error Occured"
        })
    }
}
const authorize = (role) =>{
    return (req,res,next) => {
        if(req.user.role == role){
            next();
        }else{
            return res.status(401).json({
                success: false,
                message: "you have no permission"
            })
        }
    }
}

module.exports = {protect, authorize}