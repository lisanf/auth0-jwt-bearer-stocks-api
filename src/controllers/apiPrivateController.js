require('isomorphic-fetch');

const apiPrivateController = {
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
      .then(companyOverview => {
        res.json({companyOverview});
      })
      .catch(error => {
        console.log('Error:', error.message);
        res.status(500).json({ error: 'An error occurred' });
      });
  },

  companyProfile: (req, res) => {
    const symbol = req.params.symbol;
    const apiKey = req.headers['x-api-key']; // Assuming the apiKey is passed as an 'x-api-key' header
  
    const url = `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${symbol}&apikey=${apiKey}`;
  
    fetch(url, {
      headers: {
        Authorization: 'Bearer TOKEN' // Reemplaza 'TOKEN' con tu token JWT
      }
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Status: ' + response.status);
        }
        return response.json();
      })
      .then(companyProfile => {
        res.json({
          Symbol: companyProfile.Symbol,
          AssetType: companyProfile.AssetType,
          Name: companyProfile.Name,
          CIK: companyProfile.CIK,
          Exchange: companyProfile.Exchange,
          Currency: companyProfile.Currency,
          Country: companyProfile.Country,
          Sector: companyProfile.Sector,
          Industry: companyProfile.Industry,
          Address: companyProfile.Address
        });
      })
      .catch(error => {
        console.log('Error:', error.message);
        res.status(500).json({ error: 'An error occurred' });
      });
  },

  companyProfileMetrics: (req, res) => {
    const symbol = req.params.symbol;
    const apiKey = req.headers['x-api-key'];
    
    const url = `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${symbol}&apikey=${apiKey}`;
    
    fetch(url, {
      headers: {
        Authorization: 'Bearer TOKEN' // Reemplaza 'TOKEN' con tu token JWT
      }
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Status: ' + response.status);
        }
        return response.json();
      })
      .then(companyProfile => {
        res.json({
          MarketCapitalization: companyProfile.MarketCapitalization,
          EBITDA: companyProfile.EBITDA,
          PERatio: companyProfile.PERatio,
          PEGRatio: companyProfile.PEGRatio,
          BookValue: companyProfile.BookValue
        });
      })
      .catch(error => {
        console.log('Error:', error.message);
        res.status(500).json({ error: 'An error occurred' });
      });
  },
  
  companyProfileDividends: (req, res) => {
    const symbol = req.params.symbol;
    const apiKey = req.headers['x-api-key'];
    
    const url = `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${symbol}&apikey=${apiKey}`;
    
    fetch(url, {
      headers: {
        Authorization: 'Bearer TOKEN' // Reemplaza 'TOKEN' con tu token JWT
      }
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Status: ' + response.status);
        }
        return response.json();
      })
      .then(companyProfile => {
        res.json({
          DividendPerShare: companyProfile.DividendPerShare,
          DividendYield: companyProfile.DividendYield
        });
      })
      .catch(error => {
        console.log('Error:', error.message);
        res.status(500).json({ error: 'An error occurred' });
      });
  } 
};

module.exports = apiPrivateController;

