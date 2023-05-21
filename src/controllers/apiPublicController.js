require('isomorphic-fetch');

const apiPublicController = {
  helloWorld: (req, res) => {
    res.json({ message: 'Hello, world! Welcome to my API 🚀' });
  }
};

module.exports = apiPublicController;