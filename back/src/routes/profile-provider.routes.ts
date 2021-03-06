import { Router } from "express"
import { save, get, getByID, update, del, getByUserID } from '../controllers/profile-provider.controller';
import * as passport from 'passport'

const model = 'profile-provider'

const router = Router()

router.post(`/save-${model}`, passport.authenticate('jwt', { session: false }), save)
router.get(`/get-${model}`, get)
router.get(`/get-${model}-by-id/:id`, passport.authenticate('jwt', { session: false }), getByID)
router.get(`/get-${model}-by-userid/:userid`, passport.authenticate('jwt', { session: false }), getByUserID)
router.patch(`/update-${model}/:id`, passport.authenticate('jwt', { session: false }), update)
router.delete(`/delete-${model}/:id`, passport.authenticate('jwt', { session: false }), del)


export default router