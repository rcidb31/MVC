import express from 'express' // importation express. framework para node js.
import {
 index_customer,
 show_customer,
    new_customer,
 delete_customer,
 edit_customer,
 create_customer,
 update_customer,



} from '../controllers/customer_controllers.js' // importation de function javascript ubicada en controllers.


const router = express.Router()

// a 1 ruta maximo 4 methods iguales

router.get('/', index_customer )
router.post('/', create_customer)

router.get('/new', new_customer )
router.get('/:id/show', show_customer  )
router.get('/:id/edit', edit_customer )  // en este method hay que referenciar el id.


router.put('/:id',update_customer )
router.delete('/:id/delete', delete_customer )

export default router;

