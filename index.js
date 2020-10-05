const Nodemailer = require('nodemailer')

const transporter = Nodemailer.createTransport({
    service:'hotmail',
    auth:{
        user:'<your email>',
        pass: '<your password>'
    }
});

const config = {
    from:'<your name> <your shipping email>',
    to:'<recipient>',
    subject:'Brincando com o nodeMailer',
    text:'Hello world',
    html:'<h1>Congratulation</h1>'
}

transporter.sendMail(config, (error, info)=>{
    if(error){
        console.log('Error ==>', error.stack)
    }else{
        console.log('Email sent', info)
    }
})
