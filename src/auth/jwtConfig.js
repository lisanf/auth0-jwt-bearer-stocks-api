const { auth, requiredScopes } = require('express-oauth2-jwt-bearer');

const jwtCheck = auth({
    audience: 'http://localhost:3000/api',
    issuerBaseURL: 'https://dev-cpjjwjanlwbi77dy.us.auth0.com/',
    tokenSigningAlg: 'RS256'
  });

module.exports = jwtCheck;
