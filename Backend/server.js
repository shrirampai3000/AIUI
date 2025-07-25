import fetch from 'node-fetch';
import 'dotenv/config';

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const url = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent';

const body = {
  contents: [
    {
      parts: [
        {
          text: 'Explain how AI works in a few words'
        }
      ]
    }
  ]
};

const response = await fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'X-goog-api-key': GEMINI_API_KEY
  },
  body: JSON.stringify(body)
});

const data = await response.json();
console.log(data);