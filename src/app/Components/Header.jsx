'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-light sticky-top" style={{ 
      background: 'rgba(255, 255, 255, 0.95)',
      backdropFilter: 'blur(10px)',
      boxShadow: '0 2px 20px rgba(255, 107, 53, 0.1)'
    }}>
      <div className="container">
        <Link className="navbar-brand fw-bold fs-3 neon-text" href="/">
          Machi's Food & Cakes
        </Link>
        
        <button 
          className="navbar-toggler" 
          type="button" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          style={{ borderColor: 'var(--neon-orange)' }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`}>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link fw-semibold mx-2" href="/" style={{ color: 'var(--gray-dark)' }}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-semibold mx-2" href="/about" style={{ color: 'var(--gray-dark)' }}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-semibold mx-2" href="/price" style={{ color: 'var(--gray-dark)' }}>
                Price
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-semibold mx-2" href="/flavors" style={{ color: 'var(--gray-dark)' }}>
                Flavors
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-semibold mx-2" href="/gallery" style={{ color: 'var(--gray-dark)' }}>
                Gallery
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-semibold mx-2" href="/contact" style={{ color: 'var(--neon-orange)' }}>
                Order Now
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}