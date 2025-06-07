import "./HomePage.css";

function HomePage() {
  return (
    <div className="home-page">
      <div className="home-carousel">
        <div className="home-text">
          <h3>Meet your next digital agency</h3>
          <h1>
            Move Forward<span>.</span>
          </h1>
          <h1>
            Move Faster<span>.</span>
          </h1>
          <button>
            <h3>Have a project? Let’s talk</h3>
          </button>
        </div>
      </div>
      <div className="vertical-contact">
        <button>Contact Us</button>
      </div>
    </div>
  );
}

export default HomePage;
