import * as express from 'express'
import * as cors from 'cors'
import * as morgan from 'morgan'
import authRoutes from './routes/auth.routes'
import emailRoutes from './routes/email.routes'
import categoryRoutes from './routes/category.routes'
import emailPasswordRoutes from './routes/emailpassword.routes'
import profileProviderRoutes from './routes/profile-provider.routes'



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
app.use(emailRoutes)
app.use(categoryRoutes)
app.use(profileProviderRoutes)

app.use(passport.initialize())
passport.use(passportMiddleware)
//Routes






//LOCAL

async function main() {
    app.listen(app.get('port'))
    console.log('Server on port ', app.get('port'))
}

main()
export default app

