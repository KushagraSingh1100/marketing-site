import React from "react";
import "./SomeClient.css";

const SomeClient = () => {
  const clients = [
    { name: "STM Riders", logo: "/clients/STM Riders.png" },
    { name: "Eva-Ceramic Tiles", logo: "/clients/Eva-Ceramic-Tiles-Morbi.webp" },
    { name: "Armus Digital", logo: "/clients/Duotone Logo Black.png" },
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
