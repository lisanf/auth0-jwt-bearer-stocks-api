require('isomorphic-fetch');

const apiController = {
  helloWorld: (req, res) => {
    res.json({ message: 'Hello, world! Welcome to my API 🚀' });
  },

  companyOverview: (req, res) => {
    const symbol = req.params.symbol;
    const apiKey = req.headers['x-api-key']; // Assuming the apiKey is passed as an 'x-api-key' header

    const url = `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${symbol}&apikey=${apiKey}`;

    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Status: ' + response.status);
        }
        return response.json();
      })
      .then(data => {
        res.json(data);
      })
      .catch(error => {
        console.log('Error:', error.message);
        res.status(500).json({ error: 'An error occurred' });
      });
  }
};

module.exports = apiController;

