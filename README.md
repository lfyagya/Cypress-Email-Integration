# Cypress-Email-Integration
This project demonstrates how to integrate email functionality into Cypress testing. It allows you to send test reports, or any other type of email communication via an SMTP server after Cypress tests execution.

# Prerequisites
Before starting the email integration, ensure you have the following:

- Node.js (v12 or above recommended)
- Cypress installed in your project
- SMTP server details (e.g., Gmail, Office365, SendGrid)

# SMTP Email Account
To send emails via Cypress, you'll need an SMTP account. You can use any of the following:

Gmail SMTP:
- SMTP Host: smtp.gmail.com
- Port: 465 (for SSL) or 587 (for TLS)
- Requires App Passwords (if using 2FA)

Office365 SMTP:
- SMTP Host: smtp.office365.com
- Port: 587

SendGrid SMTP:
- SMTP Host: smtp.sendgrid.net
- Port: 587
- Requires an API key

# Installation

1. **Install Cypress (if not already installed):**

   ```bash
   npm install cypress --save-dev
2. **Install Nodemailer (for email sending):**
    ```bash
    npm install nodemailer
3. **Install Pug (for templating):**
    ```bash
    npm install pug
4. **Install Cypress Mochawesome Reporter (for test reports):**
    ```bash
    npm install cypress-mochawesome-reporter --save-dev
5. **Install dotenv (for environment variables):**
    ```bash
    npm install dotenv

# Configuration
1. Setup Cypress Mochawesome Reporter in your cypress.config.js file
2. Setup Nodemailer for Email Sending in your nodemailersendmail.js file
3. Setup .env File for SMTP Configuration
   - Add a .env file in the root directory to store your email credentials and SMTP settings
4. Create a Pug Template for HTML Email
   - This Pug template dynamically receives the JSON data from the Mochawesome report and creates a simple HTML structure for the email.

**Note**: If you're using Gmail and have 2FA enabled, you need to generate an App Password: <SMTP_PASS=your-email-password> and use it as your password.

# Usage
## Running Tests and Generating JSON Report
1. **To run your tests and generate the report:**

   ```bash
   npx cypress run --reporter cypress-mochawesome-reporter
## Sending the Email with the Generated Report
1. **To send email:**
    ```bash
    node <nodemailersendmail.js> file name
