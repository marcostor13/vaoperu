import { Router } from "express"
import { save, get, getByID, update, del, updateAll, getSectionsAndItems } from '../controllers/section.controller';
import * as passport from 'passport'
const model = 'section'

const router = Router()

router.post(`/save-${model}`, passport.authenticate('jwt', { session: false }), save)
router.get(`/get-${model}`, get)
router.get(`/get-sections-and-items-${model}`, getSectionsAndItems)
router.get(`/get-${model}-by-id/:id`, passport.authenticate('jwt', { session: false }), getByID)
router.patch(`/update-${model}/:id`, passport.authenticate('jwt', { session: false }), update)
router.patch(`/update-${model}-all`, passport.authenticate('jwt', { session: false }), updateAll)
router.delete(`/delete-${model}/:id`, passport.authenticate('jwt', { session: false }), del)


export default router