import { Router } from "express"
import { singUp, singIn, issetEmail } from './../controllers/user.controller';

const router = Router()

router.post('/signup', singUp)
router.post('/signin', singIn)
router.post('/isset-email', issetEmail)

export default router