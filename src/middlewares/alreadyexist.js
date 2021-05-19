
import {userModel} from '../model/User.js'

export const userExistenceValidation = async (req,res,next) => {

    const {Nickname,Email} = req.body
    console.log(Nickname,Email)

    try {
        const validateEmailExistence = await userModel.findOne({
            where:{ Email: Email}
        })

        if(validateEmailExistence)
            return res.send(' Email already exists')

        const validateNickanmeExistence = await userModel.findOne({
            where:{Nickname: Nickname}
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