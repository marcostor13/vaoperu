import { Router } from "express"
import { init } from '../controllers/migration.controller';
import * as passport from 'passport'
const model = 'migration'

const router = Router()

router.post(`/init-${model}`, init)


export default router