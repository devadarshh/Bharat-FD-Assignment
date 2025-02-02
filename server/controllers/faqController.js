const FAQ = require('../models/Faq');
const redis = require('../config/redis');
const translateText = require('../middleware/translator');
const logger = require('../utils/logger');

exports.createFaq = async (req, res) => {
  try {
    const { question, answer } = req.body;
    const faq = new FAQ({ question, answer }); 

    const languages = ['hi', 'bn', 'es'];
    const translations = new Map();

    for (const lang of languages) {
      translations.set(lang, {
        question: await translateText(question, lang),
        answer: await translateText(answer, lang)
      });
    }

    faq.translations = translations;
    await faq.save();

    // Clear related cache
    const keys = await redis.keys('faq:*');
    if (keys.length) {
      await redis.del(keys);
    }

    res.status(201).json(faq);
  } catch (err) {
    logger.error(err.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.getFaqs = async (req, res) => {
  try {
    const { lang = 'en', page = 1, limit = 10 } = req.query;
    const skip = (parseInt(page) - 1) * parseInt(limit);

    const faqs = await FAQ.find().skip(skip).limit(parseInt(limit));
    const translatedFaqs = faqs.map(faq => ({
      id: faq._id,
      ...faq.getTranslation(lang)
    }));

    await redis.set(`faq:${lang}:${page}`, JSON.stringify(translatedFaqs), 'EX', 3600);

    res.json(translatedFaqs);
  } catch (err) {
    logger.error(err.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
