import './App.css'

function App() {
  return (
    <div className="app-container">
      <header>
        <div className="logo">DateCode</div>
        <nav className="nav-links">
          <a href="#">Features</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>
      </header>

      <main>
        <div className="hero-badge">
          New ✨ Vite + React Stack
        </div>
        
        <h1>
          Elevate Your <br />
          <span className="gradient-text">Development</span>
        </h1>
        
        <p className="hero-subtitle">
          Experience lightning-fast builds, modern styling, and seamless deployments with our newly migrated application stack.
        </p>

        <div className="cta-group">
          <button className="btn btn-primary" onClick={() => window.open('https://github.com/datecode', '_blank')}>
            View Source
          </button>
          <button className="btn btn-secondary">
            Read Documentation
          </button>
        </div>

        <div className="features">
          <div className="feature-card">
            <span className="feature-icon">⚡️</span>
            <h3>Lightning Fast</h3>
            <p>Powered by Vite for instant server start and incredibly fast Hot Module Replacement.</p>
          </div>
          <div className="feature-card">
            <span className="feature-icon">🎨</span>
            <h3>Modern Design</h3>
            <p>Crafted with premium typography, glassmorphism, and fluid micro-animations.</p>
          </div>
          <div className="feature-card">
            <span className="feature-icon">🚀</span>
            <h3>Auto Deploy</h3>
            <p>Integrated with GitHub Actions for seamless continuous deployment to Pages.</p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
