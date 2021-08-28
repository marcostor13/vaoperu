import * as express from 'express'
import * as cors from 'cors'
import * as morgan from 'morgan'
import authRoutes from './routes/auth.routes'
import emailRoutes from './routes/email.routes'
import categoryRoutes from './routes/category.routes'
import subcategoryRoutes from './routes/subcategory.routes'
import emailPasswordRoutes from './routes/emailpassword.routes'
import profileProviderRoutes from './routes/profile-provider.routes'
import districtRoutes from './routes/district.routes'
import productRouter from './routes/product.routes'
import offerRouter from './routes/offer.routes'
import userRouter from './routes/user.routes'
import urlRouter from './routes/url.routes'

import './database'
import passportMiddleware from './middlewares/auth/passport'
import * as passport from 'passport'

const app: express.Application = express()

//Setting

app.set('port', 3004)
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors({
    origin : true
}))

//middlewares

app.use(morgan('dev'))

//Routes
app.use(authRoutes)
app.use(emailPasswordRoutes)
app.use(emailRoutes)
app.use(categoryRoutes)
app.use(subcategoryRoutes)
app.use(districtRoutes)
app.use(profileProviderRoutes)
app.use(productRouter)
app.use(offerRouter)
app.use(userRouter)
app.use(urlRouter)

app.use(passport.initialize())
passport.use(passportMiddleware)

//LOCAL
async function main() {
    app.listen(app.get('port'))
    console.log('Server on port ', app.get('port'))
}

main()
export default app

