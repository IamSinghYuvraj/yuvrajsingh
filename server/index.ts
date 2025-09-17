import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Green API configuration
const GREEN_API_BASE_URL = process.env.GREEN_API_BASE_URL;
const GREEN_API_ID_INSTANCE = process.env.GREEN_API_ID_INSTANCE;
const GREEN_API_TOKEN_INSTANCE = process.env.GREEN_API_TOKEN_INSTANCE;

if (!GREEN_API_ID_INSTANCE || !GREEN_API_TOKEN_INSTANCE) {
  console.error('Error: Missing Green API credentials. Please set GREEN_API_ID_INSTANCE and GREEN_API_TOKEN_INSTANCE environment variables.');
  process.exit(1);
}

app.use(cors());
app.use(express.json());

// WhatsApp API endpoint
app.post('/api/send-whatsapp', async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, message, phone } = req.body;

  try {
    const response = await fetch(
      `${GREEN_API_BASE_URL}/waInstance${GREEN_API_ID_INSTANCE}/sendMessage/${GREEN_API_TOKEN_INSTANCE}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chatId: `${phone}@c.us`,
          message: `New contact form submission:\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
        }),
      }
    );

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || 'Failed to send WhatsApp message');
    }

    res.status(200).json({ 
      success: true,
      message: 'Message sent successfully' 
    });
  } catch (error) {
    console.error('Error sending WhatsApp message:', error);
    res.status(500).json({ 
      success: false,
      message: error instanceof Error ? error.message : 'Failed to send message' 
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
