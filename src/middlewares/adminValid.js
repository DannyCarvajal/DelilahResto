
export const adminrole = (req,res,next) => {

    const {Role_Id} = req.body

    console.log(Role_Id)

    if (!Role_Id || Role_id === 2)
        return res.status(401).send('You are not an administrator')

    next()
}