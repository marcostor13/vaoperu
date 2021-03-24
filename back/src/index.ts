import * as express from 'express'
import * as cors from 'cors'
import * as morgan from 'morgan'
import authRoutes from './routes/auth.routes'
import emailRoutes from './routes/email.routes'
import categoryRoutes from './routes/category.routes'
import brandRoutes from './routes/brand.routes'
import attributeRoutes from './routes/attribute.routes'
import productRoutes from './routes/product.routes'
import transactionRoutes from './routes/transaction.routes'
import taxRoutes from './routes/tax.routes'
import emailPasswordRoutes from './routes/emailpassword.routes'



import './database'
import passportMiddleware from './middlewares/auth/passport'
import * as passport from 'passport'



const app: express.Application = express()

//Setting

app.set('port', 3002)
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors({
    origin : true
}))


//middlewares

app.use(morgan('dev'))
app.use(authRoutes)
app.use(emailPasswordRoutes)
app.use(passport.initialize())
passport.use(passportMiddleware)
//Routes



app.use(passport.authenticate('jwt', { session: false }),emailRoutes)
app.use(passport.authenticate('jwt', { session: false }), categoryRoutes)
app.use(passport.authenticate('jwt', { session: false }), brandRoutes)
app.use(passport.authenticate('jwt', { session: false }), attributeRoutes)
app.use(passport.authenticate('jwt', { session: false }), productRoutes)
app.use(passport.authenticate('jwt', { session: false }), transactionRoutes)
app.use(passport.authenticate('jwt', { session: false }), taxRoutes)



//LOCAL

async function main() {
    app.listen(app.get('port'))
    console.log('Server on port ', app.get('port'))
}

main()
export default app

