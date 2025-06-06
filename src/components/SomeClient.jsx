import React from "react";
import "./SomeClient.css";

const SomeClient = () => {
  const clients = [
    { name: "Octave Mettle", logo: "/octave.png" },
    { name: "Azon Steel", logo: "/octave.png" },
    { name: "Guru Ram Das Academy", logo: "/octave.png" },
    { name: "QQ Solutions", logo: "/octave.png" },
    { name: "Right Horizons", logo: "octave.png" },
    { name: "Shyam Medtech", logo: "octave.png" },
    { name: "Service Print & Copy", logo: "avon.png" },

    { name: "Bhavya Industries", logo: "avon.png" },
    { name: "Craftsmen", logo: "avon.png" },
    { name: "Initial Security", logo: "qq.png" },
    { name: "Modern Orthodontics", logo: "qq.png" },
    { name: "Happyj", logo: "avon.png" },
    { name: "Hombale Films", logo: "qq.png" },
    { name: "Recruiteze", logo: "avon.png" },

    { name: "Bharat International", logo: "octave.png" },
    { name: "Ortho Derma", logo: "shyam.png" },
    { name: "Future Finx", logo: "shyam.png" },
    { name: "Stryder", logo: "shyam.png" },
    { name: "Vega", logo: "shyam.png" },
    { name: "Wathif", logo: "shyam.png" },
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
