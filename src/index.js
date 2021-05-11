
const express= require('express');
const app= express()


/* IMPORTED ROUTES */
const authRoute= require('./routes/auth.routes')
const platesRoute= require('./routes/plates.routes.js')
const userRoute= require('./routes/user.routes')


/* SETTINGS */
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/api/auth',authRoute)
app.use('/api/plates',platesRoute)
app.use('/api/user',userRoute)

/*  */

app.listen(3000,()=> console.log('bien bien') )


