import express from "express";
import dotenv from 'dotenv';
import formData from 'form-data';
import Mailgun from 'mailgun.js';

dotenv.config();

// const mailgun = new Mailgun(formData);
// const mg = mailgun.client({
//   username: process.env.MAILGUN_API_KEY || '',
//   key: process.env.MAILF
// });

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.post('/api/email', (req, res) => {
  const {email, subject, message} = req.body;

});

app.listen(4000, () => {
  console.log('Backend Mailgun listening ar port 4000');
});