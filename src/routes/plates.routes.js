
import {Router} from 'express'
const router = Router()

/* VALIDATION */
import {verifyToken} from '../middlewares/verifyToken.js'

/* CONTROLLERS */
import * as plateController from '../controllers/Plates.controller.js'


router.use(verifyToken)
/* PLATES */

/* GET THE PLATES AVAILABLE */
router.get('/', plateController.getPlates )

/* GET PLATE BY ID */
router.get('/:id', plateController.getPlateById )

/* POST A NEW PLATE */
router.post('/',plateController.createPlate)

/* UPDATE A PLATE */
router.put('/',plateController.updatePlate)

/* DELETE A PLATE */
router.delete('/:id', plateController.deletePlateById)


export default router