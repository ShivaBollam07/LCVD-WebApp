import React, { useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <ProjectDetails />
      <AppShowcase />
      <Features />
    </div>
  );
}

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-content">  
        <div className="logo"
          onClick={() => window.location.href = '#home'}
          style={{ cursor: 'pointer' }}
        >
          <img 
            style={{ height: '50px' }}
          src={require('./assets/logo.png')} alt="Leaf Curl Virus Detection" />
        </div>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#features">Features</a>

        </div>
      </div>
    </nav>
  );
}


function Hero() {
  return (
    <section className="hero" id="home">
      <h1>Leaf Curl Virus Detection</h1>
      <p>Detect plant diseases instantly using AI-powered image analysis</p>
      <a 
        href="https://github.com/dlsathvik04/LCVD-flutterapp/releases/download/v0.4.0/app-release.apk" 
        className="download-btn"
      >
        Download App
      </a>
    </section>
  );
}

function ProjectDetails() {
  return (
    <section className="project-details">
      <h2>About The Project</h2>
      <div className="project-content">
        <div className="detail-card">
          <h3>Overview</h3>
          <p>Our project aims to help farmers and agricultural experts detect Leaf Curl Virus disease in plants using artificial intelligence. By leveraging machine learning and computer vision, we've developed a mobile application that can analyze leaf images and provide instant disease detection results.</p>
        </div>
        <div className="detail-card">
          <h3>System Architecture</h3>
          <p>The solution is built as a collection of microservices that interact with each other, each with well-defined responsibilities. The system uses a decentralized approach for efficient resource utilization and cost-effectiveness.</p>
        </div>
        <div className="detail-card">
          <h3>Technology Stack</h3>
          <ul>
            <li>Flutter for cross-platform mobile development</li>
            <li>Python for AI/ML model development</li>
            <li>Node.js for Language Model implementation</li>
            <li>Cloud services for model deployment</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function AppShowcase() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = ['pic-1.jpg', 'pic-2.jpg', 'pic-3.jpg', 'pic-4.jpg', 'pic-5.jpg'];


  return (
    <section className="app-showcase">
      <h2>App Screenshots</h2>
      <div className="carousel">
        <div className="carousel-content">
          <img 
            src={require(`./assets/${images[currentImage]}`)}
            alt={`App screenshot ${currentImage + 1}`} 
          />
        </div>
        <div className="carousel-dots">
          {images.map((_, index) => (
            <span 
              key={index} 
              className={`dot ${index === currentImage ? 'active' : ''}`}
              onClick={() => setCurrentImage(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function Features() {
  const features = [
    {
      title: 'Instant Detection',
      description: 'Upload cropped leaf images for accurate and immediate disease detection'
    },
    {
      title: 'AI Powered Analysis',
      description: 'Advanced machine learning models trained on extensive datasets for precise detection'
    },
    {
      title: 'Cross-Platform',
      description: 'Built with Flutter for seamless experience across Android and iOS devices'
    },
    {
      title: 'User-Friendly Interface',
      description: 'Simple and intuitive design for easy navigation and quick results'
    }
  ];

  return (
    <section className="features" id="features">
      <h2>Key Features</h2>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}



export default App;