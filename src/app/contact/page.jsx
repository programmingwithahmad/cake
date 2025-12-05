'use client';

import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    occasion: '',
    date: '',
    details: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Since we're static, we'll create a mailto link or social media redirect
    const subject = `Cake Order Inquiry - ${formData.name}`;
    const body = `
Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Occasion: ${formData.occasion}
Date: ${formData.date}
Details: ${formData.details}
    `;
    
    // Redirect to Facebook or create mailto link
    alert('Please contact us directly at (904) 749-9374 or through our social media pages for orders.');
  };

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-5" style={{ 
          background: 'linear-gradient(135deg, var(--white) 0%, var(--off-white) 100%)'
        }}>
          <div className="container">
            <div className="text-center py-5">
              <h1 className="display-4 fw-bold mb-4 neon-text">Order Your Cake</h1>
              <p className="lead" style={{ color: 'var(--gray-dark)', maxWidth: '700px', margin: '0 auto' }}>
                Ready to order your custom cake? Contact us through any of these methods or fill out the inquiry form.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-5">
          <div className="container">
            <div className="row g-4">
              <div className="col-lg-4">
                <div className="card minimal-border h-100 border-0 text-center p-4" style={{ background: 'white' }}>
                  <div className="mb-4" style={{ 
                    width: '80px',
                    height: '80px',
                    background: 'linear-gradient(45deg, var(--neon-orange), var(--orange-light))',
                    borderRadius: '50%',
                    margin: '0 auto',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <i className="bi bi-whatsapp text-white" style={{ fontSize: '2rem' }}></i>
                  </div>
                  <h3 className="fw-bold mb-3">WhatsApp</h3>
                  <p className="mb-3" style={{ color: 'var(--gray-dark)' }}>
                    Fastest way to reach us for orders and inquiries
                  </p>
                  <a href="tel:9047499374" className="btn neon-btn">
                    <i className="bi bi-whatsapp me-2"></i>
                    (904) 749-9374
                  </a>
                </div>
              </div>
              
              <div className="col-lg-4">
                <div className="card minimal-border h-100 border-0 text-center p-4" style={{ background: 'white' }}>
                  <div className="mb-4" style={{ 
                    width: '80px',
                    height: '80px',
                    background: 'linear-gradient(45deg, var(--neon-orange), var(--orange-light))',
                    borderRadius: '50%',
                    margin: '0 auto',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <i className="bi bi-facebook text-white" style={{ fontSize: '2rem' }}></i>
                  </div>
                  <h3 className="fw-bold mb-3">Facebook</h3>
                  <p className="mb-3" style={{ color: 'var(--gray-dark)' }}>
                    Message us on Facebook for orders and updates
                  </p>
                  <a href="https://www.facebook.com/yenny.villegas.415582" className="btn" style={{ 
                    background: '#1877F2',
                    color: 'white',
                    borderRadius: '50px',
                    padding: '12px 30px'
                  }}>
                    <i className="bi bi-facebook me-2"></i>
                    Visit Page
                  </a>
                </div>
              </div>
              
              <div className="col-lg-4">
                <div className="card minimal-border h-100 border-0 text-center p-4" style={{ background: 'white' }}>
                  <div className="mb-4" style={{ 
                    width: '80px',
                    height: '80px',
                    background: 'linear-gradient(45deg, var(--neon-orange), var(--orange-light))',
                    borderRadius: '50%',
                    margin: '0 auto',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <i className="bi bi-tiktok text-white" style={{ fontSize: '2rem' }}></i>
                  </div>
                  <h3 className="fw-bold mb-3">TikTok</h3>
                  <p className="mb-3" style={{ color: 'var(--gray-dark)' }}>
                    Follow and message us on TikTok for getting updates
                  </p>
                  <a href="https://www.tiktok.com/@machiscake7" className="btn" style={{ 
                    background: 'black',
                    color: 'white',
                    borderRadius: '50px',
                    padding: '12px 30px'
                  }}>
                    <i className="bi bi-tiktok me-2"></i>
                    Follow Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* Location Info */}
        <section className="py-5">
          <div className="container">
            <div className="row align-items-center">
                                <h2 className="fw-bold mb-4 text-center">Pickup Information</h2>

              <div className="col-lg-6 mb-4 mb-lg-0">
                <div className="minimal-border overflow-hidden" style={{ 
                  height: '300px',
                  background: 'linear-gradient(45deg, var(--neon-orange), var(--orange-light))',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <div className="text-center text-white">
                    <i className="bi bi-geo-alt-fill" style={{ fontSize: '4rem' }}></i>
                    <h3 className="mt-3">Jacksonville, Florida</h3>
                  </div>
                </div>
              </div>
              
              <div className="col-lg-6">
                <div className="mb-4">
                  <h5 className="fw-bold mb-3" style={{ color: 'var(--neon-orange)' }}>
                    <i className="bi bi-shop me-2"></i>
                    Home-Based Bakery
                  </h5>
                  <p style={{ color: 'var(--gray-dark)' }}>
                    All cakes are baked fresh in our home kitchen located in Jacksonville, Florida. 
                    We are a home-based bakery offering pickup service for all orders.
                  </p>
                </div>
                
                <div className="mb-4">
                  <h5 className="fw-bold mb-3" style={{ color: 'var(--neon-orange)' }}>
                    <i className="bi bi-clock me-2"></i>
                    Pickup Hours
                  </h5>
                  <p style={{ color: 'var(--gray-dark)' }}>
                    Pickup times are arranged individually based on your order and schedule. 
                    We'll coordinate the perfect pickup time when you place your order.
                  </p>
                </div>
                
                <div>
                  <h5 className="fw-bold mb-3" style={{ color: 'var(--neon-orange)' }}>
                    <i className="bi bi-info-circle me-2"></i>
                    Important Note
                  </h5>
                  <p style={{ color: 'var(--gray-dark)' }}>
                    Please contact us at least 48 hours in advance for custom cake orders. 
                    For larger or more complex cakes, we recommend contacting us 5-7 days in advance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}