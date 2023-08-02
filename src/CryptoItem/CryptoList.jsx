import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CryptoItem from './CryptoItem'; // Update the import path if needed
import './CryptoList.css';

const coingeckoAPI = 'https://api.coingecko.com/api/v3/coins/markets';

const CryptoList = () => {
  const [cryptoData, setCryptoData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(coingeckoAPI, {
          params: {
            vs_currency: 'usd',
            order: 'market_cap_desc',
            per_page: 10,
            page: 1,
          },
        });
        setCryptoData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="crypto-list">
      {cryptoData.map((crypto) => (
        <CryptoItem key={crypto.id} data={crypto} currentStatus={crypto.current_price} />
      ))}
    </div>
  );
};

export default CryptoList;
