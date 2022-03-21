import { Router } from "express"
import { save, getByIdAndType, del, get, getByProfileProviderId, getByCategorySubcategoryId, getByCategorySubcategoryIds  } from '../controllers/category-subcategory-profile.controller';
import * as passport from 'passport'
const model = 'category-subcategory-profile'

const router = Router()

router.post(`/save-${model}`, passport.authenticate('jwt', { session: false }), save)
router.post(`/post-${model}-by-id-and-type`, passport.authenticate('jwt', { session: false }), getByIdAndType)
router.get(`/get-${model}-by-profile-provider-id/:profileProviderId`, passport.authenticate('jwt', { session: false }), getByProfileProviderId)
router.get(`/get-${model}-by-category-subcategory-id/:categorySubcategoryId`, getByCategorySubcategoryId)
router.post(`/get-${model}-by-category-subcategory-ids`, getByCategorySubcategoryIds)
router.get(`/get-${model}`, passport.authenticate('jwt', { session: false }), get)
router.delete(`/delete-${model}/:id`, passport.authenticate('jwt', { session: false }), del)

export default router