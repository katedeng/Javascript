var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth:{
        user: 'katedeng2020@gmail.com',
        pass: 'Ying-2020'
    }
});

var mailOptions = {
    from: 'katedeng2020@gmail.com',
    to: 'a02394960@usu.edu',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
    if(error) {
        console.log(error);
    }else{
        console.log('Email sent:' + info.response);
    }
});

