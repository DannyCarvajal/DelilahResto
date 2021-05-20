
import {Router} from 'express'
const router = Router()

/* VALIDATION */
import {verifyToken} from '../middlewares/verifyToken.js'
import {adminrole} from '../middlewares/adminValid.js'

/* CONTROLLERS */
import * as orderController from '../controllers/Order.controller.js'


router.use(verifyToken)

/* ORDERS */

/* GET THE ORDERS AVAILABLE */
router.get('/',adminrole , orderController.getOrders )

/* GET ORDER BY ID */
router.get('/:id', adminrole , orderController.getOrderById )

/* POST A NEW ORDER */
router.post('/',  orderController.createOrder)

/* UPDATE AN ORDER  */
router.put('/',adminrole,orderController.updateOrder)

/* DELETE AN ORDER  */
router.delete('/:id',adminrole, orderController.deleteOrderById)


export default router