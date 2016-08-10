var nodemailer = require('nodemailer');
var sesTransport = require('nodemailer-ses-transport');

var transporter = nodemailer.createTransport(sesTransport({
    region: 'us-east-1',
    accessKeyId: '',
    secretAccessKey: '',
    rateLimit: 5 // do not send more than 5 messages in a second
}));

var mailData = {
    from: 'kuan.yao@gmail.com',
    to: 'kuanyao@yahoo.com',
    subject: 'Message title',
    text: 'Plaintext version of the message',
    html: 'HTML version of the message'
};

transporter.sendMail(mailData, function(err){
    if (err) {
	console.error('unable to send email', err);
    }
    else {
	console.log('successfully sent out email.');
    }
});


