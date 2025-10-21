import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email } = body;

    console.log('=== NEWSLETTER DEBUG ===');
    console.log('Received email:', email);
    console.log('Environment check - API key exists:', !!process.env.RESEND_API_KEY);
    console.log('API key starts with:', process.env.RESEND_API_KEY?.substring(0, 10));

    // Validate email
    if (!email) {
      console.log('ERROR: No email provided');
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.log('ERROR: Invalid email format:', email);
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    console.log('Attempting to send confirmation email to:', email);

    // Send confirmation email to subscriber
    let confirmationEmail;
    try {
      confirmationEmail = await resend.emails.send({
        from: 'Kishi Consulting <onboarding@resend.dev>',
        to: [email],
        reply_to: 'kimramos.ofcl@gmail.com',
        subject: 'Welcome to Kishi Consulting Newsletter!',
        html: `
          <!DOCTYPE html>
          <html>
            <head>
              <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                .header { background: linear-gradient(135deg, #1a3a52 0%, #2c5f7f 100%); color: white; padding: 40px 20px; border-radius: 8px 8px 0 0; text-align: center; }
                .content { background: #f8f9fa; padding: 40px 30px; border-radius: 0 0 8px 8px; }
                .welcome-message { font-size: 18px; margin-bottom: 20px; color: #1a3a52; font-weight: bold; }
                .message-text { color: #666; margin-bottom: 15px; }
                .highlight-box { background: white; border-left: 4px solid #d4af37; padding: 20px; margin: 20px 0; border-radius: 4px; }
                .footer { margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #999; text-align: center; }
                .button { display: inline-block; padding: 12px 30px; background: #d4af37; color: #1a3a52; text-decoration: none; border-radius: 5px; font-weight: bold; margin-top: 20px; }
              </style>
            </head>
            <body>
              <div class="container">
                <div class="header">
                  <h1 style="margin: 0; font-size: 28px;">Welcome to Kishi Consulting!</h1>
                  <p style="margin: 10px 0 0 0; opacity: 0.9;">Your trusted partner in financial excellence</p>
                </div>
                <div class="content">
                  <div class="welcome-message">Thank you for subscribing! 🎉</div>
                  <p class="message-text">We're thrilled to have you join our community of forward-thinking business leaders and financial professionals.</p>
                  <div class="highlight-box">
                    <p style="margin: 0; color: #1a3a52; font-weight: bold;">What to expect:</p>
                    <ul style="margin: 10px 0 0 0; padding-left: 20px; color: #666;">
                      <li>Expert insights on SOX compliance and financial regulations</li>
                      <li>Best practices in risk management and financial planning</li>
                      <li>Industry trends and analysis</li>
                      <li>Exclusive tips from our financial experts</li>
                    </ul>
                  </div>
                  <p class="message-text">You'll receive our newsletter with the latest insights, industry news, and expert advice to help your business thrive.</p>
                  <p class="message-text">Have questions? Feel free to reach out to us at <a href="mailto:contact@kishi.com" style="color: #d4af37;">contact@kishi.com</a></p>
                  <center><a href="https://kishi-consulting.vercel.app" class="button">Visit Our Website</a></center>
                </div>
                <div class="footer">
                  <p>You're receiving this email because you subscribed to Kishi Consulting's newsletter.</p>
                  <p style="margin-top: 10px;"><strong>Kishi Consulting</strong><br>123 Financial Plaza, Suite 500<br>New York, NY 10001</p>
                </div>
              </div>
            </body>
          </html>
        `,
      });
      console.log('✅ SUCCESS: Confirmation email sent to', email);
      console.log('Confirmation email response:', confirmationEmail);
    } catch (emailError) {
      console.error('❌ ERROR: Failed to send confirmation email to', email);
      console.error('Error details:', emailError);
    }

    // Send notification to owner
    let notificationEmail;
    try {
      notificationEmail = await resend.emails.send({
        from: 'Kishi Consulting <onboarding@resend.dev>',
        to: ['kimramos.ofcl@gmail.com'],
        subject: 'New Newsletter Subscription',
        html: `
          <!DOCTYPE html>
          <html>
            <head>
              <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                .header { background: linear-gradient(135deg, #1a3a52 0%, #2c5f7f 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
                .content { background: #f8f9fa; padding: 30px; border-radius: 0 0 8px 8px; }
                .field { margin-bottom: 20px; }
                .label { font-weight: bold; color: #1a3a52; margin-bottom: 5px; }
                .value { color: #666; padding: 10px; background: white; border-radius: 4px; border-left: 3px solid #d4af37; }
                .footer { margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #999; text-align: center; }
              </style>
            </head>
            <body>
              <div class="container">
                <div class="header">
                  <h2 style="margin: 0;">New Newsletter Subscription</h2>
                  <p style="margin: 5px 0 0 0; opacity: 0.9;">Kishi Consulting Website</p>
                </div>
                <div class="content">
                  <div class="field">
                    <div class="label">Subscriber Email:</div>
                    <div class="value"><a href="mailto:${email}">${email}</a></div>
                  </div>
                  <div class="field">
                    <div class="label">Subscription Date:</div>
                    <div class="value">${new Date().toLocaleString()}</div>
                  </div>
                  <div class="field">
                    <div class="label">Status:</div>
                    <div class="value" style="color: #28a745; font-weight: bold;">✓ Confirmation email sent to subscriber</div>
                  </div>
                </div>
                <div class="footer">
                  <p>This is an automated notification from the Kishi Consulting newsletter subscription form.</p>
                </div>
              </div>
            </body>
          </html>
        `,
      });
      console.log('✅ SUCCESS: Notification email sent to owner');
      console.log('Notification email response:', notificationEmail);
    } catch (emailError) {
      console.error('❌ ERROR: Failed to send notification email to owner');
      console.error('Error details:', emailError);
    }

    console.log('=== END DEBUG ===');

    // Return success if at least one email was sent
    if (!confirmationEmail && !notificationEmail) {
      throw new Error('Failed to send both emails');
    }

    return NextResponse.json(
      { 
        message: 'Newsletter subscription successful',
        confirmationSent: !!confirmationEmail,
        notificationSent: !!notificationEmail,
        details: {
          subscriberEmail: confirmationEmail ? 'sent' : 'failed',
          ownerEmail: notificationEmail ? 'sent' : 'failed'
        }
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('❌ CRITICAL ERROR in newsletter API:', error);
    return NextResponse.json(
      { error: 'Failed to process subscription' },
      { status: 500 }
    );
  }
}
