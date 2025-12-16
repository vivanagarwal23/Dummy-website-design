# Backend & Database Implementation Guide

Since the frontend is a React SPA, you need a backend server to handle appointment bookings and send emails. Below is the complete code for a Node.js/Express backend with MongoDB and Nodemailer.

## 1. Project Setup

Create a new folder `backend` and run:
```bash
npm init -y
npm install express mongoose nodemailer cors dotenv helmet
```

## 2. Server Structure

Create `server.js` in the backend folder.

```javascript
// backend/server.js
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');
const nodemailer = require('nodemailer');

const app = express();

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());

// Database Connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// --- Database Schema ---
const bookingSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  course: { type: String, required: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
  message: String,
  createdAt: { type: Date, default: Date.now }
});

const Booking = mongoose.model('Booking', bookingSchema);

// --- Email Transporter ---
const transporter = nodemailer.createTransport({
  service: 'gmail', // or SendGrid
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS // App Password if using Gmail
  }
});

// --- API Routes ---

// Health check
app.get('/', (req, res) => res.send('API Running'));

// Create Booking
app.post('/api/book', async (req, res) => {
  try {
    const { name, email, phone, course, date, time, message } = req.body;

    // 1. Save to Database
    const newBooking = new Booking({ name, email, phone, course, date, time, message });
    await newBooking.save();

    // 2. Send Email to Teacher
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.TEACHER_EMAIL,
      subject: `New Booking: ${name} - ${course}`,
      html: `
        <h3>New Appointment Request</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Course:</strong> ${course}</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Time:</strong> ${time}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message}</p>
      `
    };

    await transporter.sendMail(mailOptions);

    // 3. Send Confirmation to Student (Optional)
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Booking Received - CADMaster',
      text: `Hi ${name},\n\nWe have received your request for ${course} on ${date} at ${time}. We will confirm your slot shortly.\n\nBest,\nCADMaster Team`
    });

    res.status(201).json({ message: 'Booking successful' });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
```

## 3. Environment Variables

Create a `.env` file in the backend folder:

```env
PORT=5000
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.example.mongodb.net/cadmaster?retryWrites=true&w=majority
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
TEACHER_EMAIL=teacher-email@example.com
```

## 4. Deployment Steps

### Backend (Render / Heroku / DigitalOcean)
1. Push code to GitHub.
2. Connect repo to hosting provider.
3. Add Environment Variables in the hosting dashboard.
4. Deploy.

### Frontend
1. Update `services/api.ts` to point to your live backend URL instead of the mock timeout.
   ```typescript
   // services/api.ts
   export const submitBooking = async (data: BookingFormData) => {
     const response = await fetch('https://your-backend-url.com/api/book', {
       method: 'POST',
       headers: { 'Content-Type': 'application/json' },
       body: JSON.stringify(data)
     });
     if (!response.ok) throw new Error('Booking failed');
     return true;
   };
   ```
2. Deploy React app to Vercel or Netlify.
