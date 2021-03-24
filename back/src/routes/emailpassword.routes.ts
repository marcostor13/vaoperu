import { Router } from "express"
import { sendEmail, codeComprobation } from './../controllers/emailPassword.controller';

const router = Router()

router.post('/send-email-code', sendEmail)
router.post('/code-comprobation', codeComprobation)


export default router