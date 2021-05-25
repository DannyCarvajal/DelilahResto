
import {Router} from 'express'
const router = Router()

/* CONTROLLERS */
import * as userController from '../controllers/Users.controller.js' 

/* VALIDATION */
import {verifyToken} from '../middlewares/verifyToken.js'
import {adminrole} from '../middlewares/adminValid.js'
import {userDataValidation} from '../middlewares/dataValid.js'
import {userExistenceValidation} from '../middlewares/alreadyExist.js'


router.use(verifyToken)

/* GET ALL THE USERS */
router.get('/',adminrole, userController.getUsers )

/* GET ALL THE USERS */
router.get('/:id',adminrole, userController.getUserById )

/* CREATE A NEW USER */
router.post('/',adminrole,userExistenceValidation, userDataValidation, userController.createUser )

/* DELETE USER BY ID */
router.delete('/:id',adminrole, userController.deleteUserById )

export default router