export const mongodb = {
    jwtSecret: process.env.JWT_SECRET || 'somesecrettoken',
    DB:{
        URI: process.env.MONGODB_URI || "mongodb://localhost:27017/ecommerce",
        USER: process.env.MONGODB_USER,
        PASSWORD: process.env.MONGODB_PASSWORD
    }
}
