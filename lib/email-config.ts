// This file contains the email configuration
// For security, these values should come from environment variables in production

interface EmailConfig {
  service: string;
  host: string;
  port: number;
  secure: boolean;
  auth: {
    user: string;
    pass: string;
  };
  from: string;
  to: string;
}

// These values should be set in your environment variables
const emailConfig: EmailConfig = {
  service: process.env.EMAIL_SERVICE || 'gmail',
  host: process.env.EMAIL_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.EMAIL_PORT || '587'),
  secure: process.env.EMAIL_SECURE === 'true',
  auth: {
    user: process.env.EMAIL_USER || 'your-email@gmail.com',
    pass: process.env.EMAIL_PASSWORD || 'your-app-password', // Use App Password for Gmail
  },
  from: `"Sridhish Finvest" <${process.env.EMAIL_FROM || 'noreply@sridhishfinvest.com'}>`,
  to: process.env.EMAIL_TO || 'sridhifinpltd@gmail.com',
};

export default emailConfig;
