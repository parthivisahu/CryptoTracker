import React, { useState } from 'react';

const CryptoItem = ({ data, currentStatus }) => {
  const [showDescription, setShowDescription] = useState(false);

  const handleMouseEnter = () => {
    setShowDescription(true);
  };

  const handleMouseLeave = () => {
    setShowDescription(false);
  };

  return (
    <div
      className="crypto-item"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={data.image} alt={data.name} />
      <h3>{data.name}</h3>
      <p>{data.symbol.toUpperCase()}</p>
      {showDescription && (
        <div className="description">
          <p>Current Price: ${currentStatus}</p>
          <p>Market Cap: ${data.market_cap.toLocaleString()}</p>
          <p>Total Volume: ${data.total_volume.toLocaleString()}</p>
          
        </div>
      )}
    </div>
  );
};

export default CryptoItem;
