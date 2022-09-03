import { Router } from "express"
import { save, get, getByID, update, del, updateAll, getByCategoryId} from './../controllers/subcategory.controller';
import * as passport from 'passport'
const model = 'subcategory'

const router = Router()

router.post(`/save-${model}`, passport.authenticate('jwt', { session: false }), save)
router.get(`/get-${model}`, get)
router.get(`/get-${model}-by-id/:id`, getByID)
router.get(`/get-by-category-id${model}-by-id/:id`, getByCategoryId)
router.patch(`/update-${model}/:id`, passport.authenticate('jwt', { session: false }), update)
router.patch(`/update-${model}-all`, passport.authenticate('jwt', { session: false }), updateAll)
router.delete(`/delete-${model}/:id`, passport.authenticate('jwt', { session: false }), del)


export default router