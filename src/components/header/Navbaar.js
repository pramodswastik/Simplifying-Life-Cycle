import React, { useState } from "react"; // Import useState for state management
import "./navbaar.css";
import Chatbot from "./Chatbot"; // Import the Chatbot component
import "./Chatbot.css"; // Chatbot styles

function App() {
  // State to control chatbot visibility
  const [showChatbot, setShowChatbot] = useState(false);

  // Function to toggle chatbot visibility
  const toggleChatbot = () => {
    setShowChatbot((prevState) => !prevState);
  };

  return (
    <div className="app">
      {/* Navbar */}
      <header className="navbar">
        <h1 className="logo">🌿 Simplifying Life Cycle</h1>
        <nav>
          <a href="#home">Home</a>
          <a href="#manual-lca">Manual LCA</a>
          <a href="#chatbot">Chatbot</a>
          <a href="#more-info">More info</a>
        </nav>
        <button className="login-btn">Log in</button>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h2>
            Perform LCA with ease <br /> and eco-<br />
            consciousness
          </h2>
          <p>Secure storage for eco-data, ensuring sustainability and protection</p>
          <div className="hero-buttons">
            <button className="btn calculate-btn">Calculate</button>
            {/* Button to toggle the chatbot */}
            <button className="btn chat-btn" onClick={toggleChatbot}>
              {showChatbot ? "Close Chat" : "Chat now"}
            </button>
          </div>
        </div>
        <div className="hero-icon">
          <img src="https://cdn-icons-png.flaticon.com/512/190/190411.png" alt="Recycle" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="stat-item">
          <h3>1M+</h3>
          <p>Active users</p>
        </div>
        <div className="stat-item">
          <h3>5TB+</h3>
          <p>Eco-friendly files stored</p>
        </div>
        <div className="stat-item">
          <h3>6M+</h3>
          <p>Eco-files uploaded</p>
        </div>
        <div className="stat-item">
          <button className="eco-demo-btn">Eco Demo</button>
        </div>
      </section>

      {/* Render Chatbot conditionally */}
      {showChatbot && <Chatbot />}
    </div>
  );
}

export default App;
