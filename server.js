import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: process.env.EMAIL,
		pass: process.env.PASS
	}
});

app.use(bodyParser.json());
app.use(cors());
app.get('/', (req, res) => {
	res.send('Hello There');
});

app.post('/api/contact', (req, res) => {
	try {
		const mailOptions = {
			from: req.body.email, // sender address
			to: process.env.email, // list of receivers
			subject: `Email from ${req.body.name}`, // Subject line
			html: `
        <p>You have a new contact request.</p>
        <h3>Contact Details</h3>
        <ul>
          <li>Name: ${req.body.name}</li>
          <li>Email: ${req.body.email}</li>
          <li>Message: ${req.body.message}</li>
        </ul>
        `
		};
		transporter.sendMail(mailOptions, (err, info) => {
			if (err) {
				res.status(500).send({
					success: false,
					message: 'Something went wrong. Try again later'
				});
			} else {
				res.send({
					success: true,
					message: 'Thanks for contacting us. We will get back to you shortly'
				});
			}
		});
		// console.log(req.body);
		res.send({
			success: true,
			message: `Cool! I will get in touch with you as soon as I can, ${req.body.name}`
		});
	} catch (err) {
		res.status(500).send({
			success: false,
			message: 'Something went wrong. Try again later'
		});
	}
});

app.listen(process.env.PORT || 5000, () => console.log('Server Running on port 5000'));
