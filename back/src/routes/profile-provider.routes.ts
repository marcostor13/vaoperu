import { Router } from "express"
import { save, get, getByID, update, del, getByUserID, getByArray, search } from '../controllers/profile-provider.controller';
import * as passport from 'passport'

const model = 'profile-provider'

const router = Router()

router.post(`/save-${model}`, passport.authenticate('jwt', { session: false }), save)
router.post(`/search-${model}`, search)
router.get(`/get-${model}`, get)
router.get(`/get-${model}-by-id/:id`, getByID)
router.get(`/get-${model}-by-user-id/:userid`, passport.authenticate('jwt', { session: false }), getByUserID)
router.post(`/get-${model}-by-array`, getByArray)
router.patch(`/update-${model}/:id`, passport.authenticate('jwt', { session: false }), update)
router.delete(`/delete-${model}/:id`, passport.authenticate('jwt', { session: false }), del)


export default router