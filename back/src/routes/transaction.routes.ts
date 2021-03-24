import { Router } from "express"
import { save, get, getByID, update, del } from './../controllers/transaction.controller';

const model = 'transaction'
const model2 = 'transactions'

const router = Router()

router.post(`/save-${model}`, save)
router.get(`/get-${model2}`, get)
router.get(`/get-${model}-by-id/:id`, getByID)
router.patch(`/update-${model}/:id`, update)
router.delete(`/delete-${model}/:id`, del)


export default router