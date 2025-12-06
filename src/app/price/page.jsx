'use client';

import { useState } from 'react';
import Image from 'next/image';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

export default function PricingPage() {
  const [showFullSize, setShowFullSize] = useState(false);

  return (
    <>
      <Header />
      <main className="min-vh-100">
        {/* Simple Pricing Title at Top */}
        <div className="container py-5">
          <div className="text-center">
            <h1 className="display-6 fw-bold neon-text">Price</h1>
          </div>
        </div>

        {/* Image Display - Exact 1112x1483px */}
        <div className="container pb-4">
          <div className="d-flex justify-content-center">
            <div className="position-relative" 
                 style={{ 
                   width: '1112px', 
                   maxWidth: '100%',
                   cursor: 'pointer'
                 }}
                 onClick={() => setShowFullSize(true)}>
              

              
              {/* UNCOMMENT THIS WHEN YOU HAVE THE ACTUAL IMAGE: */}
              
              <Image
                src="/images/gallery/yt.jpg"
                alt="Yenny Villegas Cakes Pricing"
                width={1112}
                height={1483}
                style={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: '8px',
                  border: '2px solid var(--neon-orange)'
                }}
                priority
              />
             
            </div>
          </div>
        </div>

        {/* Contact Info Below Image */}
        <div className="container py-5">
          <div className="d-flex justify-content-center">
            <div className="d-flex align-items-center gap-3 p-4" style={{ 
              background: 'var(--off-white)',
              borderRadius: '10px',
              maxWidth: '500px'
            }}>
              <div style={{ 
                width: '50px',
                height: '50px',
                background: 'var(--neon-orange)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <i className="bi bi-whatsapp text-white"></i>
              </div>
              <div className="text-start">
                <p className="mb-1 fw-bold" style={{ color: 'var(--neon-orange)' }}>
                  Questions about pricing?
                </p>
                <p className="mb-0" style={{ color: 'var(--gray-dark)' }}>
                  Call or Text us at <strong>(904) 749-9374</strong>
                </p>
              </div>
            </div>
          </div>
        </div>


      </main>
      <Footer />
    </>
  );
}