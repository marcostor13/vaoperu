import { Router } from "express"
import { save, get, getByID, update, del, getByProfileProviderId } from './../controllers/product.controller';
import * as passport from 'passport'
const model = 'product'

const router = Router()

router.post(`/save-${model}`, passport.authenticate('jwt', { session: false }), save)
router.get(`/get-${model}`, get)
router.get(`/get-${model}-by-id/:id`, passport.authenticate('jwt', { session: false }), getByID)
router.get(`/get-${model}-by-profile-provider-id/:id`, getByProfileProviderId)
router.patch(`/update-${model}/:id`, passport.authenticate('jwt', { session: false }), update)
router.delete(`/delete-${model}/:id`, passport.authenticate('jwt', { session: false }), del)


export default router