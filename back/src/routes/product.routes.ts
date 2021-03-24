import { Router } from "express"
import { save, get, getByID, update, del } from './../controllers/product.controller';

const model = 'product'
const model2 = 'products'

const router = Router()

router.post(`/save-${model}`, save)
router.get(`/get-${model2}`, get)
router.get(`/get-${model}-by-id/:id`, getByID)
router.patch(`/update-${model}/:id`, update)
router.delete(`/delete-${model}/:id`, del)


export default router