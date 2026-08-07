import React from 'react';
import { Home as HomeIcon, Heart } from 'lucide-react';

export const Navbar = ({ activeTab, setActiveTab, favoritesCount }) => {
  return (
    <header className="navbar-header">
      <div className="navbar-container">
        {/* Brand Vector Logo */}
        <div onClick={() => setActiveTab('home')} className="brand-logo">
          <svg width="34" height="34" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FF1E27" />
                <stop offset="100%" stopColor="#E50914" />
              </linearGradient>
            </defs>
            <rect width="100" height="100" rx="24" fill="url(#logoGrad)" />
            <polygon points="38,28 74,50 38,72" fill="#FFFFFF" />
            <path d="M22 78 Q 50 60, 78 78" stroke="#FFFFFF" strokeWidth="6" strokeLinecap="round" opacity="0.6" />
          </svg>

          <span className="brand-title">
            CINE<span className="brand-title-red">STREAM</span>
          </span>
        </div>

        {/* Right Segmented Navigation Control */}
        <nav className="segmented-nav">
          <button
            onClick={() => setActiveTab('home')}
            className={`nav-btn ${activeTab === 'home' ? 'active' : ''}`}
          >
            <HomeIcon size={16} color={activeTab === 'home' ? '#fff' : '#a0a0a0'} />
            <span>Home</span>
          </button>

          <button
            onClick={() => setActiveTab('favorites')}
            className={`nav-btn ${activeTab === 'favorites' ? 'active' : ''}`}
          >
            <Heart 
              size={16} 
              color={activeTab === 'favorites' ? '#fff' : '#a0a0a0'} 
              fill={activeTab === 'favorites' ? '#fff' : 'transparent'} 
            />
            <span>Favorites</span>
            <span className="favorites-badge">{favoritesCount}</span>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;