
# JWT

1. Intro
--------

- Stands for Json Web Tokens
- It is an open standard (RFC 7519) for securely transmitting information between parties as a JSON object. 
- It's widely used for authentication in web applications.
- Like when we want to send a verification link to your email to confirm sign ups and sign ins
- And those for resetting a password

- A JWT is composed of three parts:

- Header: Contains metadata about the token, such as the type of token (JWT) and the signing algorithm used (e.g., HMAC SHA256).

- Payload: Contains the claims, which are statements about an entity (typically, the user) and additional data. Claims can be predefined (like iss, exp, sub, etc.) or custom.

- Signature: This is used to verify that the sender of the JWT is who it says it is and to ensure that the message wasn’t changed along the way.







2. Usage
---------

- npm install jsonwebtoken



