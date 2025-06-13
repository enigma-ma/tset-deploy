const express = require('express')
const { exec } = require('child_process')
const dotenv = require('dotenv')

dotenv.config()

const PORT = process.env.PORT || 4000

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

app.post('/shell' , async (req , res) => {

    const { cmd } = req.body

      exec( cmd , (error , stdout ) => {
          if(error){
             return res.status(500).json(error)
          }
             return  res.json(stdout)
          
     })

    

})

app.get('/test' ,async (req , res) => {
     res.json({
        "message" : 'server is runing !'
     })
})


app.listen(PORT , () => {
    console.log('server is runing ')
})