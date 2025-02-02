BharatFD Back-End
A robust backend application for managing multilingual FAQs using Node.js, Express.js, MongoDB, and Redis, with a WYSIWYG editor for rich content formatting.

Project Structure
pgsql
Copy
Edit
├── config  
│   ├── db.js  
│   └── redis.js  
├── controllers  
│   └── faqController.js  
├── middleware  
│   ├── cache.js  
│   ├── rateLimit.js  
│   ├── translator.js  
│   └── validate.js  
├── models  
│   └── faq.js  
├── routes  
│   └── faqRoutes.js  
├── tests  
│   └── faq.test.js  
├── utils  
│   └── logger.js  
├── .env  
├── index.js  
└── README.md  
Features
WYSIWYG Editor using react-quill
Multilingual FAQs with automated translation using Google Translate API
Caching with Redis for faster API responses
RESTful API for FAQ management
Secure API with input validation and rate limiting
Admin-friendly interface for FAQ content management
Environment variable configuration
Unit tests and code quality enforcement
Installation Steps
1. Clone the Repository
bash
Copy
Edit
git clone https://github.com/Rudragupta-1/BharatFD-Back-End.git
cd BharatFD-Back-End
2. Install Dependencies
bash
Copy
Edit
npm install
3. Set Environment Variables
Create a .env file in the root directory and add the following:

ini
Copy
Edit
PORT=5000
DB_URI=your_database_uri
REDIS_URI=your_redis_uri
GOOGLE_APPLICATION_CREDENTIALS=path_to_your_api_json_file
4. Start the Server
bash
Copy
Edit
npm run dev
API Usage
1. POST /api/faqs
Request:

json
Copy
Edit
{
  "question": "What is Node.js?",
  "answer": "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine."
}
Response:

json
Copy
Edit
{
  "question": "What is Node.js?",
  "answer": "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine.",
  "_id": "679e2059768081a2150303c0",
  "createdAt": "2025-02-01T13:23:37.758Z",
  "translations": {
    "hi": {
      "question": "नोड.जेएस क्या है?",
      "answer": "Node.js एक जावास्क्रिप्ट रनटाइम है जो क्रोम के V8 जावास्क्रिप्ट इंजन पर बनाया गया है।"
    },
    "bn": {
      "question": "Node.js কি?",
      "answer": "Node.js হল একটি জাভাস্ক্রিপ্ট রানটাইম যা Chrome-এর V8 জাভাস্ক্রিপ্ট ইঞ্জিনে নির্মিত।"
    }
  }
}
2. GET /api/faqs?lang=hi
Response:

json
Copy
Edit
[
  {
    "_id": "679e2059768081a2150303c0",
    "question": "नोड.जेएस क्या है?",
    "answer": "Node.js एक जावास्क्रिप्ट रनटाइम है जो क्रोम के V8 जावास्क्रिप्ट इंजन पर बनाया गया है।"
  }
]
Middleware Descriptions
Cache Middleware (cache.js): Caches responses for frequently requested data using Redis.
Rate Limiting Middleware (rateLimit.js): Limits the number of requests to the API.
Translator Middleware (translator.js): Automates translation of FAQ questions and answers.
Validation Middleware (validate.js): Ensures required fields are present and correctly formatted.
Dependencies
Backend Dependencies
express: Fast, unopinionated web framework for Node.js
mongoose: MongoDB object modeling tool
cors: Enable Cross-Origin Resource Sharing
dotenv: Environment variable management
express-rate-limit: Request rate-limiting middleware
helmet: Security headers
ioredis: Redis client for caching
@google-cloud/translate: Google Cloud Translation API
DevDependencies
eslint: Linting tool for code quality
jest: Unit testing framework
supertest: HTTP assertions for API testing
Testing
Unit Tests: Run using Jest
bash
Copy
Edit
npm test
Coverage: Achieved for models and API responses.
Contributions
Fork the repository.
Create a new branch for your feature/bug fix.
Commit your changes with descriptive messages.
Push the changes and create a pull request.
Deployment
To run the application in Docker:

bash
Copy
Edit
docker-compose up --build
Git Commit Guidelines
feat: Add new features
fix: Fix bugs
docs: Update documentation
test: Add or improve tests
Future Improvements
Add role-based authentication
Improve caching logic
Integrate CI/CD for deployment
Contact
Author: Adarsh Singh
Email: imadarshsingh2002@gmail.com
Phone: +91-8468024985
