
import {Router} from 'express'
const router = Router()

/* CONTROLLERS */
import * as userController from '../controllers/Users.controller.js' 

/* VALIDATION */
import {verifyToken} from '../middlewares/verifyToken.js'
import {adminrole} from '../middlewares/adminValid.js'

router.use(verifyToken,adminrole)

/* GET ALL THE USERS */
router.get('/', userController.getUsers )

/* DELETE USER BY ID */
router.delete('/:id', userController.deleteUserById )

export default router