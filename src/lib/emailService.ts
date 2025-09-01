import emailjs from '@emailjs/browser';

// EmailJS configuration - you'll need to replace these with your actual keys
const EMAILJS_SERVICE_IDS = ['service_z1scm6k', 'service_oopwcka']; // Multiple service IDs as fallbacks
const EMAILJS_TEMPLATE_ID = 'template_cd5wlu3'; // Replace with your template ID  
const EMAILJS_PUBLIC_KEY = 'KBxFKaa0lBtUGmLJ4'; // Replace with your EmailJS public key

interface DemoConfirmationParams {
  name: string;
  email: string;
  product: string;
  company?: string;
}

export const sendDemoConfirmationEmail = async (params: DemoConfirmationParams): Promise<boolean> => {
  // Try each service ID as fallback
  for (let i = 0; i < EMAILJS_SERVICE_IDS.length; i++) {
    const serviceId = EMAILJS_SERVICE_IDS[i];
    try {
      console.log(`Attempting to send email via EmailJS with service ID: ${serviceId}`, params);
      console.log('EmailJS Config:', { 
        serviceId, 
        templateId: EMAILJS_TEMPLATE_ID, 
        publicKey: EMAILJS_PUBLIC_KEY ? 'Set' : 'Not set' 
      });
      
      const templateParams = {
        to_email: params.email,
        to_name: params.name,
        product: params.product,
        company: params.company || 'N/A',
        from_name: 'Vegam Robotics Team',
        reply_to: 'info@vegam.co'
      };

      console.log('Template params:', templateParams);

      const result = await emailjs.send(
        serviceId,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      console.log('EmailJS send result:', result);
      console.log(`Demo confirmation email sent successfully via EmailJS using service: ${serviceId}`);
      return true;
    } catch (error) {
      console.error(`Failed to send email with service ${serviceId}:`, error);
      if (i === EMAILJS_SERVICE_IDS.length - 1) {
        // Last attempt failed
        console.error('All EmailJS services failed:', error);
        return false;
      }
      // Continue to next service ID
      console.log(`Trying next service ID...`);
    }
  }
  return false;
};

// Alternative: Direct SMTP using a simple service
export const sendEmailViaWebhook = async (params: DemoConfirmationParams): Promise<boolean> => {
  try {
    // You can use services like Formspree, Netlify Forms, or custom webhook
    const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: params.email,
        subject: 'Demo Request Received - Vegam Robotics',
        message: `
Dear ${params.name},

Thank you for your interest in ${params.product}${params.company ? ` from ${params.company}` : ''}!

We have successfully received your demo request and our robotics experts will review your requirements. 

What's Next?
• Our team will contact you within 24 hours to schedule your personalized demo
• Experience firsthand how our AI-powered robots can transform your warehouse operations
• Learn how we've helped 100+ warehouses achieve ROI within 12-18 months

Best regards,
The Vegam Robotics Team
Transforming Warehouses with Intelligent Robotics
        `
      })
    });

    if (response.ok) {
      console.log('Email sent successfully via webhook');
      return true;
    } else {
      throw new Error('Webhook response not ok');
    }
  } catch (error) {
    console.error('Failed to send email via webhook:', error);
    return false;
  }
};