# Environment Variables for Render Deployment

## Required Environment Variables for Contact Form:

1. **EMAIL_USER**
   - Value: `salahshadi2005@gmail.com`
   - Description: Gmail account for sending emails

2. **GMAIL_APP_PASSWORD**
   - Value: `bvur sdmu stjl mczl`
   - Description: Gmail App Password (16-character password)
   - Note: This is your existing Gmail app password

## How to Add Environment Variables in Render:

1. Go to your Render service dashboard
2. Click on your "Salah Portfolio" service
3. Go to "Environment" tab
4. Click "Add Environment Variable"
5. Add each variable:
   - Key: `EMAIL_USER`
   - Value: `salahshadi2005@gmail.com`
   
   - Key: `GMAIL_APP_PASSWORD`  
   - Value: `bvur sdmu stjl mczl`

6. Click "Save Changes"
7. Render will automatically redeploy with the new environment variables

## After Adding Environment Variables:

The contact form should work properly and stop the continuous sending issue.