# EmailJS Setup Guide for Portfolio Contact Form

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account (allows 200 emails/month)
3. Verify your email address

## Step 2: Create an Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail recommended)
4. Follow the setup instructions to connect your Gmail account
5. Note down the **Service ID** (e.g., `service_xxxxxxx`)

## Step 3: Create an Email Template

1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this **exact** template structure (copy and paste):

**Subject:**

```
New Portfolio Contact from {{name}}
```

**Content:**

```html
<div style="font-family: system-ui, sans-serif, Arial; font-size: 12px">
  <div>A message by {{name}} has been received. Kindly respond at your earliest convenience.</div>
  <div
    style="
      margin-top: 20px;
      padding: 15px 0;
      border-width: 1px 0;
      border-style: dashed;
      border-color: lightgrey;
    "
  >
    <table role="presentation">
      <tr>
        <td style="vertical-align: top">
          <div
            style="
              padding: 6px 10px;
              margin: 0 10px;
              background-color: aliceblue;
              border-radius: 5px;
              font-size: 26px;
            "
            role="img"
          >
            &#x1F464;
          </div>
        </td>
        <td style="vertical-align: top">
          <div style="color: #2c3e50; font-size: 16px">
            <strong>{{name}}</strong>
          </div>
          <div style="color: #cccccc; font-size: 13px">{{time}}</div>
          <div style="color: #7f8c8d; font-size: 14px; margin-top: 5px">{{email}}</div>
          <p style="font-size: 16px">{{message}}</p>
        </td>
      </tr>
    </table>
  </div>
</div>
```

4. Save the template and note down the **Template ID** (e.g., `template_xxxxxxx`)

## Step 4: Get Your Public Key

1. Go to "Account" → "General"
2. Find your **Public Key** (e.g., `xxxxxxxxxxxxxxx`)

## Step 5: Update Configuration

1. Open `/src/config/emailConfig.js`
2. Replace the placeholder values with your actual credentials:

```javascript
export const EMAIL_CONFIG = {
  SERVICE_ID: "your_actual_service_id",
  TEMPLATE_ID: "your_actual_template_id",
  PUBLIC_KEY: "your_actual_public_key",
};
```

## Step 6: Test the Contact Form

1. Build and deploy your portfolio
2. Fill out the contact form and submit
3. Check your email (dzikrirazzan02@gmail.com) for the message

## Security Notes

- The public key is safe to include in your frontend code
- EmailJS handles the actual email sending securely
- Free tier allows 200 emails per month
- No backend server required!

## Troubleshooting

- Make sure your EmailJS service is connected to your Gmail account
- Check the browser console for any error messages
- Verify all IDs are correctly copied from your EmailJS dashboard
- Test with a simple message first

## Alternative Template Variables

You can customize the email template with these variables:

- `{{name}}` - Sender's name
- `{{email}}` - Sender's email
- `{{message}}` - The message content
- `{{time}}` - Timestamp when message was sent (Jakarta time)
