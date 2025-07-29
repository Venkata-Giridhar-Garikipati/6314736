import React from 'react';

const OfficeList = () => {
  const offices = [
    {
      name: 'Tech Hub Workspace',
      rent: 55000,
      address: 'Banjara Hills, Hyderabad',
      image: './img.jpg'
    },
    {
      name: 'Startup Bay',
      rent: 62000,
      address: 'Koramangala, Bangalore',
      image: './img.jpg'
    },
    {
      name: 'Innovation Loft',
      rent: 58000,
      address: 'Gachibowli, Hyderabad',
      image: './img.jpg'
    }
  ];

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>🏢 Office Space Rentals</h1>
      {offices.map((office, idx) => (
        <div
          key={idx}
          style={{
            border: '1px solid #ccc',
            padding: '15px',
            marginBottom: '10px',
            borderRadius: '8px',
            boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
            textAlign: 'center',
            backgroundColor: '#f9f9f9'
          }}
        >
          <img src={office.image} alt={office.name} style={{ width: '200px' }} />
          <h2>{office.name}</h2>
          <p><strong>Address:</strong> {office.address}</p>
          <p>
            <strong>Rent:</strong>{' '}
            <span style={{ color: office.rent < 60000 ? 'red' : 'green' }}>
              ₹{office.rent.toLocaleString()}
            </span>
          </p>
        </div>
      ))}
    </div>
  );
};

export default OfficeList;
