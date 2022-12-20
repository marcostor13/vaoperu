import { Router } from "express"
import { singUp, get, getByID, update, del, getByIds, changePassword } from '../controllers/user.controller';
import * as passport from 'passport'
const model = 'user'

const router = Router()

router.post(`/save-${model}`, passport.authenticate('jwt', { session: false }), singUp)
router.get(`/get-${model}`, passport.authenticate('jwt', { session: false }), get)
router.get(`/get-${model}-by-id/:id`, passport.authenticate('jwt', { session: false }), getByID)
router.post(`/get-${model}-by-ids`, passport.authenticate('jwt', { session: false }), getByIds)
router.patch(`/update-${model}/:id`, passport.authenticate('jwt', { session: false }), update)
router.patch(`/change-password-${model}`, passport.authenticate('jwt', { session: false }), changePassword)
router.delete(`/delete-${model}/:id`, passport.authenticate('jwt', { session: false }), del)


export default router