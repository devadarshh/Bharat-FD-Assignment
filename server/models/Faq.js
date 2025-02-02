const mongoose = require('mongoose');

const faqSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true
  },
  answer: {
    type: String,
    required: true
  },
  translations: {
    type: Map,
    of: {
      question: String,
      answer: String
    }
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

faqSchema.methods.getTranslation = function(lang) {
  if (lang === 'en') {
    return {
      question: this.question,
      answer: this.answer
    };
  }
  return this.translations.get(lang) || {
    question: this.question,
    answer: this.answer
  };
};

module.exports = mongoose.model('FAQ', faqSchema);