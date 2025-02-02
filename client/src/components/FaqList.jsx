import { useState, useEffect } from 'react';
import { getFaqs } from '../services/api';

const FaqList = () => {
  const [faqs, setFaqs] = useState([]);
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    loadFaqs();
  }, [language]);

  const loadFaqs = async () => {
    const data = await getFaqs(language);
    setFaqs(data);
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow">
      <div className="mb-4">
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="p-2 border rounded-lg bg-gray-100"
        >
          <option value="en">English</option>
          <option value="hi">Hindi</option>
          <option value="bn">Bengali</option>
          <option value="es">Spanish</option>
        </select>
      </div>
      <div className="space-y-4">
        {faqs.map((faq) => (
          <div key={faq.id} className="border p-4 rounded-lg shadow">
            <h3 className="font-bold mb-2 text-lg">{faq.question}</h3>
            <div
              dangerouslySetInnerHTML={{ __html: faq.answer }}
              className="prose max-w-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqList;
