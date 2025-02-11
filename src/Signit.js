import React from 'react';
import { launchSignitEmbedded } from './signitEmbedded';


const Signit = () => {

  launchSignitEmbedded()

  return (
    <div style={{ margin: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Integration with Signit</h1>
      <p>
        This application integrates with Signit via their SDK.
      </p>
      <div
        style={{
          border: '2px solid #007bff',
          borderRadius: '8px',
          padding: '10px',
          backgroundColor: '#f9f9f9',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        }}
      >
      </div>
    </div>
  );
};

export default Signit;
