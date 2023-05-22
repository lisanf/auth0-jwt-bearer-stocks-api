require('isomorphic-fetch');

const apiPublicController = {
  symbolSearch: (req, res) => {
    const keywords = req.query.keywords;
    const apiKey = req.headers['x-api-key'];
  
    const url = `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${keywords}&apikey=${apiKey}`;
  
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Status: ' + response.status);
        }
        return response.json();
      })
      .then(symbolSearchResults => {
        res.json(symbolSearchResults);
      })
      .catch(error => {
        console.log('Error:', error.message);
        res.status(500).json({ error: 'An error occurred' });
      });
  }
  
};

module.exports = apiPublicController;