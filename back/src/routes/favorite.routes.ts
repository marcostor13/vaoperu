import { Router } from "express"
import { save, get, getByID, update, del, getByClientId } from '../controllers/favorite.controller';
import * as passport from 'passport'
const model = 'favorite'

const router = Router()

router.post(`/save-${model}`, passport.authenticate('jwt', { session: false }), save)
router.get(`/get-${model}`, passport.authenticate('jwt', { session: false }), get)
router.get(`/get-${model}-by-id/:id`, passport.authenticate('jwt', { session: false }), getByID)
router.get(`/get-${model}-by-client-id/:id`, passport.authenticate('jwt', { session: false }),getByClientId)
router.patch(`/update-${model}/:id`, passport.authenticate('jwt', { session: false }), update)
router.delete(`/delete-${model}/:id`, passport.authenticate('jwt', { session: false }), del)

export default router