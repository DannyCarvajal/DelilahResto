
import {Router} from 'express'
const router = Router()

/* VALIDATIONS */
import {userDataValidation} from '../middlewares/dataValid.js'
import {userExistenceValidation} from '../middlewares/alreadyExist.js'

/* CONTROLLER */
import * as authController from '../controllers/Auth.controller.js'


/* REGISTER */
router.post('/register',userExistenceValidation, userDataValidation, authController.registerUser)

/* LOGIN */
router.post('/login', authController.userLogin)


export default router
