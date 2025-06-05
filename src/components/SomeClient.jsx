import React from 'react';
import './SomeClient.css';

const SomeClient = () => {
  // Define client logos with exact names from the image
  const clients = [
    { name: 'Octave Mettle', logo: 'https://example.com/octave-mettle.png' },
    { name: 'Azon Steel', logo: 'https://example.com/azon-steel.png' },
    { name: 'Guru Ram Das Academy', logo: 'https://example.com/guru-ram-das.png' },
    { name: 'QQ Solutions', logo: 'https://example.com/qq-solutions.png' },
    { name: 'Right Horizons', logo: 'https://example.com/right-horizons.png' },
    { name: 'Shyam Medtech', logo: 'https://example.com/shyam-medtech.png' },
    { name: 'Service Print & Copy', logo: 'https://example.com/service-print.png' },
    
    { name: 'Bhavya Industries', logo: 'https://example.com/bhavya-industries.png' },
    { name: 'Craftsmen', logo: 'https://example.com/craftsmen.png' },
    { name: 'Initial Security', logo: 'https://example.com/initial-security.png' },
    { name: 'Modern Orthodontics', logo: 'https://example.com/modern-orthodontics.png' },
    { name: 'Happyj', logo: 'https://example.com/happyj.png' },
    { name: 'Hombale Films', logo: 'https://example.com/hombale-films.png' },
    { name: 'Recruiteze', logo: 'https://example.com/recruiteze.png' },
    
    { name: 'Bharat International', logo: 'https://example.com/bharat-international.png' },
    { name: 'Ortho Derma', logo: 'https://example.com/ortho-derma.png' },
    { name: 'Future Finx', logo: 'https://example.com/future-finx.png' },
    { name: 'Stryder', logo: 'https://example.com/stryder.png' },
    { name: 'Vega', logo: 'https://example.com/vega.png' },
    { name: 'Wathif', logo: 'https://example.com/wathif.png' },
  ];

  return (
    <section className="clients-section">
      <div className="clients-container">
        <h2 className="section-title">Some of our Clients</h2>
        <div className="clients-grid">
          {clients.map((client, index) => (
            <div key={index} className="client-card">
              <div className="client-logo-wrapper">
                <img 
                  src={client.logo} 
                  alt={`${client.name} logo`}
                  className="client-logo"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SomeClient;
