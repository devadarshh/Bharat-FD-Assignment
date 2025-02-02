const { Translate } = require('@google-cloud/translate').v2;
const translate = new Translate();

const translateText = async (text, targetLang) => {
  try {
    const [translation] = await translate.translate(text, targetLang);
    return translation;
  } catch (err) {
    console.error('Translation error:', err);
    return text;
  }
};

module.exports = translateText;  