import React, { useState } from 'react';

const CurrencyConvertor = () => {
  const [rupees, setRupees] = useState('');
  const [euros, setEuros] = useState('');

  const handleSubmit = () => {
    const euroRate = 0.011; // Assume 1 INR = 0.011 EUR
    const converted = (parseFloat(rupees) * euroRate).toFixed(2);
    setEuros(converted);
  };

  return (
    <div style={{ marginTop: '30px' }}>
      <h2>💱 Currency Convertor</h2>
      <input
        type="number"
        placeholder="Enter amount in INR"
        value={rupees}
        onChange={(e) => setRupees(e.target.value)}
      />
      <button onClick={handleSubmit}>Convert</button>
      <p>Converted Amount: € {euros}</p>
    </div>
  );
};

export default CurrencyConvertor;
