const express = require('express')
const { exec } = require('child_process')


const app = express()

app.use(express.json())

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


app.listen(4000 , () => {
    console.log('server is runing ')
})