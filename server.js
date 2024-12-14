const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (like your HTML)
app.use(express.static('public'));

app.get('/send-email', (req, res) => {
    res.sendFile(__dirname + '/public/send-email.html'); // Adjust the path if needed
});

// Route to handle form submission
app.post('/send-email', async (req, res) => {
    const { 'first-name': firstName, 'last-name': lastName, email, message } = req.body;

    // Create a transporter
    const transporter = nodemailer.createTransport({
        service: 'gmail', // You can use any email service
        auth: {
            user: 'ariannamihuphoto@gmail.com',
            pass: 'chge cszh dkrk ltux', // Use an app password if using Gmail
        },
    });

    // Email options
    const mailOptions = {
        from: email,
        to: 'ariannamihuphoto@gmail.com',
        subject: `Message from ${firstName} ${lastName}`,
        text: message,
    };

    try {
        await transporter.sendMail(mailOptions);
        // res.send('Message sent successfully!');
        res.redirect('/send-email');
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).send('Something went wrong. Please try again later.');
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
