const express = require('express');
const router = express.Router();
const { createFaq, getFaqs } = require('../controllers/faqController');
const cacheMiddleware = require('../middleware/cache');
const validateFaq = require('../middleware/validate');
const limiter = require('../middleware/rateLimit');

router.post('/', limiter, validateFaq, createFaq);
router.get('/', limiter, cacheMiddleware, getFaqs);

module.exports = router;
