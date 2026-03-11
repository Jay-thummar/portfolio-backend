import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Main Route
app.get('/', (req, res) => {
    res.send('Portfolio Backend is running!');
});

// Contact Route
app.post('/api/contact', async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    // Verify credentials exist
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
        console.error('Missing EMAIL_USER or EMAIL_PASS environment variables');
        return res.status(500).json({ error: 'Server configuration error' });
    }

    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true, // Use SSL/TLS
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
        // Add a longer timeout for slow cloud environments
        connectionTimeout: 10000,
    });

    const mailOptions = {
        from: process.env.EMAIL_USER, // Gmail requires the 'from' to be the authenticated user
        replyTo: email, // The actual user's email goes here so you can reply to them
        to: process.env.RECEIVER_EMAIL,
        subject: `Portfolio Contact from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    try {
        console.log(`Attempting to send email for: ${name} (${email})`);

        // --- THIS IS THE CRITICAL LINE I AM ENABLING ---
        await transporter.sendMail(mailOptions);

        console.log('Email sent successfully');
        res.status(200).json({ message: 'Success! Your message was received.' });
    } catch (error) {
        console.error('Nodemailer Error:', error);
        res.status(500).json({
            error: 'Failed to send email.',
            details: error.message
        });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
