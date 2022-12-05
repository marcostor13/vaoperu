import { Router } from "express"
import { save, get, getByID, update, del, getByProfileProviderId, getByUserId } from '../controllers/order.controller';
import * as passport from 'passport'
const model = 'order'

const router = Router()

router.post(`/save-${model}`, save)
router.get(`/get-${model}`, passport.authenticate('jwt', { session: false }), get)
router.get(`/get-${model}-by-id/:id`, passport.authenticate('jwt', { session: false }), getByID)
router.get(`/get-${model}-by-profile-provider-id/:id`, passport.authenticate('jwt', { session: false }),getByProfileProviderId)
router.get(`/get-${model}-by-user-id/:id`, passport.authenticate('jwt', { session: false }),  getByUserId)
router.patch(`/update-${model}/:id`, passport.authenticate('jwt', { session: false }), update)
router.delete(`/delete-${model}/:id`, passport.authenticate('jwt', { session: false }), del)


export default router