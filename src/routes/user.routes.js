
import {Router} from 'express'
const router = Router()

import * as userController from '../controllers/Users.controller.js' 

/* GET ALL THE USERS */
router.get('/', userController.getUsers )

/* DELETE USER BY ID */
router.delete('/:id', userController.deleteUserById )

export default router