# Stock Market API with Auth0 JWT Integration

This repository provides a secure API for retrieving stock market data using Node.js and Auth0 integration. The API utilizes JSON Web Tokens (JWTs) for authentication and authorization.

## JSON Web Token (JWT) Overview

JSON Web Tokens (JWTs) are a secure method for exchanging information between parties. They consist of three parts: the header, the payload, and the signature.

## Endpoints

- `GET /public/symbol-search`: Search for stock symbols based on a keyword.
- `GET /private/company-profile/{symbol}`: Retrieve the company profile for a specific symbol.
- `GET /private/company-profile/{symbol}/metrics`: Get the company profile metrics for a specific symbol.
- `GET /private/company-profile/{symbol}/dividends`: Get the dividends for a specific symbol.
- `GET /private/company-overview/{symbol}`: Get a general overview of a company for a specific symbol.

## Implementation Details

The API uses Auth0 for secure authentication and authorization. It is integrated with an Express.js application using the `express-oauth2-jwt-bearer` package.

Refer to the documentation and code in this repository for implementation details and usage instructions.

Feel free to reach out for assistance or questions.




