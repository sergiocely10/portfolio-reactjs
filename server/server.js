const dotenv = require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const sendEmail = require("./utils/sendEmail");

const app = express();

// Middleware
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

// Route
app.get("/", (req, res) => {
    res.send("Home Page");
})

app.post("/api/sendemail", async (req, res) => {
    const data = req.body;

    try {
        const send_to = process.env.AUTH_EMAIL;
        const sent_from = process.env.AUTH_EMAIL;
        const reply_to = data.email;
        const subject = data.subject;
        const message = `${data.name} <br/> ${data.email} <br/> ${data.message}`;

        await sendEmail (subject, message, send_to, sent_from, reply_to)

        console.log(req.body)
        res.status(200).json({success: true, message: "Email sent"})

    } catch (error) {
        res.status(500).json(error.message)
    }
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}...`);
})