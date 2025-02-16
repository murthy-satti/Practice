import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import 'dotenv/config';

const app = express();

app.use(cors()) // cors is used to run front & back in different ports without problem

const transporter = nodemailer.createTransport({
  service: "gmail", // Use the correct email provider
  auth: {
    user: "murthysatti321@gmail.com", // Your email
    pass: "zianylyeczyuvrgj", // App Password (DO NOT share publicly)
  },
});

app.use(express.json());

app.post("/sendmail", async (req,res) => {

const emailFromClient = req.body.email;

console.log(emailFromClient)

  try {
    // send mail with defined transport object
    const info = await transporter.sendMail({
      from: "murthysatti321@gmail.com",
      to: emailFromClient,
      subject: "Reset Password",
      text: "Your OTP is 434367",
    });

    console.log("Message sent: ", info.messageId);
    // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
    return res.status(200).json({ message: "Mail set successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Server error" });
  }
  
  res.status(200).send("<h2>Email Sent</h2>")

}


);

app.use((req, res) => {
  return res.status(404).send("<h2> 404 not found</h2>");
});


app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});
