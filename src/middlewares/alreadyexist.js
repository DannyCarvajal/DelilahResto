
import {user} from '../model/index.js'


export const userExistenceValidation = async (req,res,next) => {

    const {nickname,email} = req.body
    console.log(nickname,email)

    try {
        const validateEmailExistence = await user.findOne({
            where:{ email: email}
        })

        if(validateEmailExistence)
            return res.send(' Email already exists')

        const validateNickanmeExistence = await user.findOne({
            where:{nickname: nickname}
        })

        if( validateNickanmeExistence)
            return res.send(' Email already exists')


        console.log(validateEmailExistence)
        next()


    } catch (error) {
        console.log('error', error)
        return res.send('error in existence ', error)
    }

}