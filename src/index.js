const express=require('express')
const bodyParser=require('body-parser')
const nodemailer =require('nodemailer')
const app=express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.post('/api/form',(req,res)=>{
    console.log(req.body,'hihihi')
    nodemailer.createTestAccount((err,account)=>{
        const htmlEmail=`
        <h3>Contact Details</h3>
        <ul>
        <li>Name: ${req.body.name}</li>
        <li>Email: ${req.body.email}</li>
        <li>Phone: ${req.body.phone}</li>
        <h3>Message</h3>
        <p>${req.body.message}</p>
        </ul>
        `
        const transporter = nodemailer.createTransport({
            host: 'smtp.ethereal.email',
            port: 587,
            auth: {
                user: 'alisha.crist@ethereal.email',
                pass: 'KJTDyc5vVEfPTW1n95'
            }
        });

        let mailOptions={
            from:'alisha.crist@ethereal.email',
            to:'nhm987@gmail.com',
            subject:'New Message',
            text:req.body.message,
            html:htmlEmail
        }
        transporter.sendMail(mailOptions,(err,info)=>{
            if(err){
                console.log(err)
            }
            console.log(info,'and', res.send)
           return res.sendStatus(200)
        })
    })   
})

const PORT=process.env.PORT||8080

app.listen(PORT,()=>{
    console.log(`listeing in ${PORT}`)
})