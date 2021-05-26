
import express from 'express';
const app= express()

/* ENVIROMENT VARIABLES */
import dotenv from 'dotenv'
dotenv.config()

/* PORT */
const port= process.env.PORT

/* INIT DATABASE*/
import connection from './model/dbInitialize.js'

/* IMPORTED ROUTES */
import authRoute from './routes/auth.routes.js'
import platesRoute from './routes/plates.routes.js'
import userRoute from './routes/user.routes.js'
import orderRoute from './routes/orders.routes.js'

/* SETTINGS */
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/api/auth',authRoute)
app.use('/api/plates',platesRoute)
app.use('/api/user',userRoute)
app.use('/api/order',orderRoute)

app.listen(port,()=> console.log(`Listening in the port ${port}`))



