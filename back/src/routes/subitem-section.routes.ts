import { Router } from "express"
import { save, get, getByID, update, del, updateAll, getItemsBySubitemName } from '../controllers/subitem-section.controller';
import * as passport from 'passport'
const model = 'subitem-section'

const router = Router()

router.post(`/save-${model}`, passport.authenticate('jwt', { session: false }), save)
router.get(`/get-${model}`, get)
router.get(`/get-${model}-by-id/:id`, getByID)
router.get(`/get-items-by-subitem-name/:id`, getItemsBySubitemName)
router.patch(`/update-${model}/:id`, passport.authenticate('jwt', { session: false }), update)
router.patch(`/update-${model}-all`, passport.authenticate('jwt', { session: false }), updateAll)
router.delete(`/delete-${model}/:id`, passport.authenticate('jwt', { session: false }), del)


export default router