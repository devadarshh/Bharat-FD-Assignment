const redis = require('../config/redis');

const cacheMiddleware = async (req, res, next) => {
  const { lang } = req.query;
  const key = `faq:${lang || 'en'}`;

  try {
    const cachedData = await redis.get(key);
    if (cachedData) {
      return res.json(JSON.parse(cachedData));
    }
  } catch (err) {
    console.error('Cache error:', err);
  }
  
  next();
};

module.exports = cacheMiddleware;
