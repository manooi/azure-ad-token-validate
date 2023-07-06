# AZURE AD ACCESS TOKEN VALIDATE

This code is a Node.js script that performs access token validation using JSON Web Tokens (JWT) and Microsoft Azure Active Directory (Azure AD) public keys. It utilizes the `axios` library for making HTTP requests and the `jsonwebtoken` library for JWT decoding and verification.

## Prerequisites

Before running the code, make sure you have the following prerequisites:

- Node.js installed on your machine
- `axios` and `jsonwebtoken` packages installed in your Node.js project
- A valid Azure AD tenant ID
- An access token to be validated

## Installation

To install the required packages, run the following command in your project directory:

```bash
npm install axios jsonwebtoken
```


## Usage
1. Replace the empty strings tenantId and accessToken with your Azure AD tenant ID and the access token to be validated, respectively.

2. Run the script using Node.js with the following command:
```bash
node index.js
```

3. The script will fetch the public keys from the Azure AD endpoint and then validate the access token using the fetched keys. If the access token is valid, it will log the verified token object. Otherwise, it will log the error encountered during validation.

## Important Notes
- Make sure you have a valid access token to be validated.😎
- Ensure that the provided Azure AD tenant ID is correct and accessible.
- This code assumes that the Azure AD public keys are available at https://login.microsoftonline.com/<tenantId>/discovery/v2.0/keys. If this endpoint changes in the future, you may need to update the code accordingly.
- Feel free to modify the code to suit your specific needs or integrate it into your existing applications.
- This README is generated with ChatGPT 
