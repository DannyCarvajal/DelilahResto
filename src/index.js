
import express from 'express';
const app= express()


/* IMPORTED ROUTES */
import authRoute from './routes/auth.routes.js';
import platesRoute from './routes/plates.routes.js';
import userRoute from './routes/user.routes.js';

/* SETTINGS */
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/api/auth',authRoute)
app.use('/api/plates',platesRoute)
app.use('/api/user',userRoute)


app.listen(3000,()=> console.log('bien bien') )



