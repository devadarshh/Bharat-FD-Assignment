
# BharatFD Back-End

## Project Structure

The project is structured as follows:

```
├── node_modules
├── public
│   └── vite.svg
├── src
│   ├── assets
│   │   └── react.svg
│   ├── components
│   │   ├── ui
│   │   ├── AdminPanel.jsx
│   │   ├── FaqList.jsx
│   │   └── RichTextEditor.jsx
│   ├── services
│   │   └── api.js
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .env
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js

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
├── node_modules
├── routes
│   └── faqRoutes.js
├── tests
│   └── faq.test.js
├── utils
│   └── logger.js
├── .env
├── .gitignore
├── index.js
├── package-lock.json
├── package.json
├── README.md
├── server.log
└── spring-git-449612-m0-561492b35bc3.json
```

## Installation Steps

To get started with the project, follow these steps:

1. Clone the repository to your local machine:
    ```bash
    git clone https://github.com/Rudragupta-1/BharatFD-Back-End.git
    ```

2. Navigate to the `server` directory and install the dependencies:
    ```bash
    cd server
    npm install
    ```

3. Navigate to the `client` directory and install the dependencies:
    ```bash
    cd client
    npm install
    ```

4. Create a `.env` file in the root directory of the project and add your environment variables:
    ```bash
    PORT=5000
    DB_URI=your_database_uri
    REDIS_URI=your_redis_uri
    GOOGLE_APPLICATION_CREDENTIALS=path to your api json file
    ```

5. Start the back-end server using the following command:
    ```bash
    npm run dev
    ```

6. To run the client in development mode, use the following command:
    ```bash
    cd client
    npm run dev
    ```

Your server will now be running at `http://localhost:5000` and the client at `http://localhost:3000`.

## API Usage

### POST `/api/faqs`

To create a new FAQ entry, send a POST request with the following body:

**Request Body:**

```json
{
  "question": "What is Node.js?",
  "answer": "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine."
}
```

**Response:**

```json
{
  "question": "What is Node.js?",
  "answer": "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine.",
  "_id": "679e2059768081a2150303c0",
  "createdAt": "2025-02-01T13:23:37.758Z",
  "translations": {
    "hi": {
      "question": "नोड.जेएस क्या है?",
      "answer": "Node.js एक जावास्क्रिप्ट रनटाइम है जो क्रोम के V8 जावास्क्रिप्ट इंजन पर बनाया गया है।",
      "_id": "679e205b768081a2150303c1"
    },
    "bn": {
      "question": "Node.js কি?",
      "answer": "Node.js হল একটি জাভাস্ক্রিপ্ট রানটাইম যা Chrome-এর V8 জাভাস্ক্রিপ্ট ইঞ্জিনে নির্মিত।",
      "_id": "679e205b768081a2150303c2"
    },
    "es": {
      "question": "¿Qué es Node.js?",
      "answer": "Node.js es un entorno de ejecución de JavaScript creado sobre el motor JavaScript V8 de Chrome.",
      "_id": "679e205b768081a2150303c3"
    }
  },
  "__v": 0
}
```

### GET `/api/faqs`

To retrieve the list of all FAQs, send a GET request to the `/api/faqs` endpoint.

**Response:**

```json
[
  {
    "_id": "679e2059768081a2150303c0",
    "question": "What is Node.js?",
    "answer": "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine.",
    "createdAt": "2025-02-01T13:23:37.758Z",
    "translations": {
      "hi": {
        "question": "नोड.जेएस क्या है?",
        "answer": "Node.js एक जावास्क्रिप्ट रनटाइम है जो क्रोम के V8 जावास्क्रिप्ट इंजन पर बनाया गया है।"
      },
      "bn": {
        "question": "Node.js কি?",
        "answer": "Node.js হল একটি জাভাস্ক্রিপ্ট রানটাইম যা Chrome-এর V8 জাভাস্ক্রিপ্ট ইঞ্জিনে নির্মিত।"
      },
      "es": {
        "question": "¿Qué es Node.js?",
        "answer": "Node.js es un entorno de ejecución de JavaScript creado sobre el motor JavaScript V8 de Chrome."
      }
    }
  }
]
```

## Middleware

Here are the descriptions of the key middlewares used in this project:

1. **Cache Middleware (`cache.js`)**  
   This middleware caches the responses for frequently requested data to improve performance and reduce the load on the database. It can be used for GET requests where the data doesn’t change frequently.

2. **Rate Limiting Middleware (`rateLimit.js`)**  
   This middleware limits the number of requests a client can make within a specified period. It helps protect the API from abuse and ensures fair usage.

3. **Translator Middleware (`translator.js`)**  
   This middleware handles the translation of FAQ questions and answers into different languages. It ensures that all the data is available in multiple languages by leveraging a translation service.

4. **Validation Middleware (`validate.js`)**  
   This middleware validates the incoming requests to ensure that the required fields are provided and are of the correct type. It prevents invalid data from being processed by the API.

Here’s a well-structured README section for your dependencies:

---

## Dependencies

### Frontend Dependencies:
The following dependencies are required for the frontend to function properly:

- **@radix-ui/react-icons**: `^1.3.2` – Provides a set of Radix UI icons for use in React projects.
- **@shadcn/ui**: `^0.0.4` – A UI library for building customizable, accessible components.
- **axios**: `^1.7.9` – A promise-based HTTP client for making requests.
- **chart.js**: `^4.4.7` – A library for creating interactive charts.
- **framer-motion**: `^12.0.6` – Animation library for React, allowing for interactive animations.
- **lucide-react**: `^0.474.0` – A set of open-source, customizable, and modern icons for React.
- **react**: `^18.3.1` – A JavaScript library for building user interfaces.
- **react-chartjs-2**: `^5.3.0` – React wrapper for Chart.js, enabling charting with React components.
- **react-dom**: `^18.3.1` – The entry point for React to interact with the DOM.
- **react-icons**: `^5.4.0` – A collection of popular icons for React.
- **react-quill**: `^2.0.0` – A Quill.js wrapper for React to create rich text editors.
- **react-router-dom**: `^7.1.5` – Library for routing in React applications.
- **react-table**: `^7.8.0` – A lightweight, fast, and extendable data table library for React.

### DevDependencies (Frontend):
These are the development dependencies required for building and linting the frontend:

- **@eslint/js**: `^9.17.0` – ESLint configuration for JavaScript.
- **@types/react**: `^18.3.18` – TypeScript definitions for React.
- **@types/react-dom**: `^18.3.5` – TypeScript definitions for React DOM.
- **@vitejs/plugin-react**: `^4.3.4` – Vite plugin for React.
- **autoprefixer**: `^10.4.20` – PostCSS plugin to add vendor prefixes to CSS rules.
- **eslint**: `^9.17.0` – Linting utility for identifying and reporting problems in JavaScript code.
- **eslint-plugin-react**: `^7.37.2` – ESLint plugin for React-specific linting rules.
- **eslint-plugin-react-hooks**: `^5.0.0` – ESLint plugin for React hooks linting.
- **eslint-plugin-react-refresh**: `^0.4.16` – ESLint plugin for React Fast Refresh.
- **globals**: `^15.14.0` – Global variables used in various environments.
- **postcss**: `^8.5.1` – Tool for transforming CSS with JavaScript plugins.
- **tailwindcss**: `^4.0.2` – Utility-first CSS framework for building custom designs.
- **vite**: `^6.0.5` – A fast build tool for modern web projects.

### Backend Dependencies:
The following dependencies are required for the backend:

- **@google-cloud/translate**: `^8.5.0` – Google's cloud translation API.
- **cors**: `^2.8.5` – Middleware for enabling Cross-Origin Resource Sharing.
- **dotenv**: `^16.4.7` – Loads environment variables from a `.env` file.
- **express**: `^4.21.2` – Fast, unopinionated web framework for Node.js.
- **express-mongo-sanitize**: `^2.2.0` – Middleware to prevent MongoDB operator injection.
- **express-rate-limit**: `^7.5.0` – Rate limiting middleware for Express.
- **express-validator**: `^7.2.1` – Validation and sanitization middleware for Express.
- **helmet**: `^8.0.0` – Helps secure Express apps by setting various HTTP headers.
- **ioredis**: `^5.4.2` – Redis client for Node.js with support for clusters.
- **mongoose**: `^8.9.6` – MongoDB object modeling tool for Node.js.
- **winston**: `^3.17.0` – A versatile logging library.

### DevDependencies (Backend):
These are the development dependencies required for testing and development on the backend:

- **chai**: `^5.1.2` – Assertion library for Node.js and browsers.
- **chai-http**: `^5.1.1` – HTTP integration testing for Chai.
- **mocha**: `^11.1.0` – JavaScript test framework running on Node.js.
- **nodemon**: `^3.1.9` – Monitors for changes in your Node.js application and restarts the server automatically.
- **supertest**: `^7.0.0` – HTTP assertion library for testing REST APIs.

---
## Contribution Guidelines

1. **Fork the Repository**  
   Fork the repository to your own GitHub account and clone it to your local machine.

2. **Create a New Branch**  
   Create a new branch for each significant change. For example:
   ```bash
   git checkout -b feature/your-feature
   ```

3. **Make Changes**  
   Make your changes in the new branch. Ensure your code adheres to the project's style guide and conventions.

4. **Commit Your Changes**  
   After making your changes, commit them with a meaningful commit message:
   ```bash
   git commit -m "Add a new feature or fix a bug"
   ```

5. **Push to Your Fork**  
   Push your changes to your forked repository:
   ```bash
   git push origin feature/your-feature
   ```

6. **Create a Pull Request**  
   Open a pull request on the main repository to propose your changes.

7. **Code Review**  
   All contributions will undergo a code review. Ensure your code is clean and tested before submitting.
