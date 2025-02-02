require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const connectDB = require('./config/db');
const faqRoutes = require('./routes/faqRoutes');

const app = express();
connectDB();

app.use(cors());
app.use(express.json());
app.use(helmet());
app.use(mongoSanitize());

app.use('/api/faqs', faqRoutes);

app.get('/health', (req, res) => res.json({ status: 'OK' }));

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


// Done