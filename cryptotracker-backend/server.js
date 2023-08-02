import express from 'express';
import { get } from 'axios';

const app = express();
const port = 5000;

// CORS Middleware to allow requests from localhost:3000 (React frontend)
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// API endpoint to fetch data from Coingecko
const coingeckoAPI = 'https://api.coingecko.com/api/v3/coins/markets';

app.get('/api/coins', async (req, res) => {
  try {
    const response = await get(coingeckoAPI, {
      params: {
        vs_currency: 'usd',
        order: 'market_cap_desc',
        per_page: 10,
        page: 1,
      },
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data from Coingecko API' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
