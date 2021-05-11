
module.exports= function verify(req,res,next){

    const token = req.header('auth-token')

    if(!token)
        return res.status(401).send('Not authorized')

    next()

}