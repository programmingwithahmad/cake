'use client';

import { useState } from 'react';
import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState('photos');

  const galleryItems = {
    photos: [
      { id: 1, src: 'a1.png', category: 'Chocolate Cake', alt: 'A1'},
      { id: 2, src: 'a2.png', title: 'Chocolate Delight', category: 'Chocolate Cake', alt: 'A2' },
      { id: 3, src: 'a3.jpg', title: 'Baby Shower Special', category: 'Teddy Bear Cake', alt: 'A3' },
      { id: 4, src: 'a4.jpg', title: 'Gentleman Cake', category: 'Custom Cakes', alt: 'A4' },
      { id: 5, src: 'a5.jpg', title: 'Dessert Table', category: 'Sweets Collection', alt: 'A5' },
      { id: 6, src: 'a6.jpg', title: 'Player Theme', category: 'Custom Cakes', alt: 'A6' },
      { id: 7, src: 'a7.jpg', title: 'Wedding Cake', category: 'Special Events', alt: 'A7' },
      { id: 8, src: 'a8.jpg', title: 'Graduation Cake', category: 'Custom Cakes', alt: 'A8' },
      { id: 9, src: 'a9.jpg', title: 'Anniversary Cake', category: 'Special Events', alt: 'A9' },
      { id: 10, src: 'a10.jpg', title: 'Anniversary Cake', category: 'Special Events', alt: 'A10' },
      { id: 11, src: 'a11.jpg', title: 'Anniversary Cake', category: 'Special Events', alt: 'A11' },
      { id: 12, src: 'a12.jpg', title: 'Anniversary Cake', category: 'Special Events', alt: 'A12' },
      { id: 13, src: 'a13.jpg', title: 'Anniversary Cake', category: 'Special Events', alt: 'A13' },
      { id: 14, src: 'a14.jpg', title: 'Anniversary Cake', category: 'Special Events', alt: 'A14' },
      { id: 15, src: 'a15.jpg', title: 'Anniversary Cake', category: 'Special Events', alt: 'A15' },
      { id: 16, src: 'a16.jpg', title: 'Anniversary Cake', category: 'Special Events', alt: 'A16' },
      { id: 17, src: 'a17.jpg', title: 'Anniversary Cake', category: 'Special Events', alt: 'A17' },
      { id: 18, src: 'a18.png', title: 'Anniversary Cake', category: 'Special Events', alt: 'A18' },
      { id: 19, src: 'a19.png', title: 'Anniversary Cake', category: 'Special Events', alt: 'A19' },
      { id: 20, src: 'a20.jpg', title: 'Anniversary Cake', category: 'Special Events', alt: 'A20' },
      { id: 21, src: 'a21.jpg', title: 'Anniversary Cake', category: 'Special Events', alt: 'A21' },
      { id: 22, src: 'a22.jpg', title: 'Anniversary Cake', category: 'Special Events', alt: 'A22' },
      { id: 23, src: 'a23.jpg', title: 'Anniversary Cake', category: 'Special Events', alt: 'A23' },
      { id: 24, src: 'a24.jpg', title: 'Anniversary Cake', category: 'Special Events', alt: 'A24' },
      { id: 25, src: 'a25.jpg', title: 'Anniversary Cake', category: 'Special Events', alt: 'A25' },
      { id: 26, src: 'a26.jpg', title: 'Anniversary Cake', category: 'Special Events', alt: 'A26' },
      { id: 27, src: 'a27.jpg', title: 'Anniversary Cake', category: 'Special Events', alt: 'A27' },
      { id: 28, src: 'a28.jpg', title: 'Anniversary Cake', category: 'Special Events', alt: 'A28' },
      { id: 29, src: 'a29.jpg', title: 'Anniversary Cake', category: 'Special Events', alt: 'A29' },
      { id: 30, src: 'a30.jpg', title: 'Anniversary Cake', category: 'Special Events', alt: 'A30' },
      { id: 31, src: 'a31.jpg', title: 'Anniversary Cake', category: 'Special Events', alt: 'A31' },
      { id: 32, src: 'a32.jpg', title: 'Anniversary Cake', category: 'Special Events', alt: 'A32' },
      { id: 33, src: 'a33.jpg', title: 'Anniversary Cake', category: 'Special Events', alt: 'A33' },
      { id: 34, src: 'a34.jpg', title: 'Anniversary Cake', category: 'Special Events', alt: 'A34' },
      { id: 35, src: 'a35.jpg', title: 'Anniversary Cake', category: 'Special Events', alt: 'A35' },
      { id: 36, src: 'a36.jpg', title: 'Anniversary Cake', category: 'Special Events', alt: 'A36' },
      { id: 37, src: 'a37.jpg', title: 'Anniversary Cake', category: 'Special Events', alt: 'A37' },
      { id: 38, src: 'a38.jpg', title: 'Anniversary Cake', category: 'Special Events', alt: 'A38' },
      { id: 39, src: 'a39.jpg', title: 'Anniversary Cake', category: 'Special Events', alt: 'A39' },
      { id: 40, src: 'a40.jpg', title: 'Anniversary Cake', category: 'Special Events', alt: 'A40' },
      { id: 41, src: 'a41.png', title: 'Anniversary Cake', category: 'Special Events', alt: 'A41' },
      { id: 42, src: 'a42.png', title: 'Anniversary Cake', category: 'Special Events', alt: 'A42' },
      { id: 43, src: 'a43.jpg', title: 'Anniversary Cake', category: 'Special Events', alt: 'A43' },
      { id: 44, src: 'a44.jpg', title: 'Anniversary Cake', category: 'Special Events', alt: 'A44' },
      { id: 45, src: 'a45.jpg', title: 'Anniversary Cake', category: 'Special Events', alt: 'A45' },
      { id: 46, src: 'a46.jpg', title: 'Anniversary Cake', category: 'Special Events', alt: 'A46' },
      { id: 47, src: 'a47.jpg', title: 'Anniversary Cake', category: 'Special Events', alt: 'A47' },
      { id: 48, src: 'a48.jpg', title: 'Anniversary Cake', category: 'Special Events', alt: 'A48' },
      { id: 49, src: 'a49.jpg', title: 'Anniversary Cake', category: 'Special Events', alt: 'A49' },
      { id: 50, src: 'a50.png', title: 'Anniversary Cake', category: 'Special Events', alt: 'A50' },
      { id: 51, src: 'a51.png', title: 'Anniversary Cake', category: 'Special Events', alt: 'A51' },
      { id: 52, src: 'a52.jpg', title: 'Anniversary Cake', category: 'Special Events', alt: 'A52' },
      { id: 53, src: 'a53.jpg', title: 'Anniversary Cake', category: 'Special Events', alt: 'A53' },
      { id: 54, src: 'a54.jpg', title: 'Anniversary Cake', category: 'Special Events', alt: 'A54' },
      { id: 55, src: 'a55.jpg', title: 'Anniversary Cake', category: 'Special Events', alt: 'A55' },
      { id: 56, src: 'a56.jpg', title: 'Anniversary Cake', category: 'Special Events', alt: 'A56' },
      { id: 57, src: 'a57.jpg', title: 'Anniversary Cake', category: 'Special Events', alt: 'A57' },
      { id: 58, src: 'a58.jpg', title: 'Anniversary Cake', category: 'Special Events', alt: 'A58' },
      { id: 59, src: 'a59.jpg', title: 'Anniversary Cake', category: 'Special Events', alt: 'A59' },
      { id: 60, src: 'a60.jpg', title: 'Anniversary Cake', category: 'Special Events', alt: 'A60' },
      { id: 61, src: 'a61.png', title: 'Anniversary Cake', category: 'Special Events', alt: 'A61' },
      { id: 62, src: 'a62.jpg', title: 'Anniversary Cake', category: 'Special Events', alt: 'A62' },
      { id: 63, src: 'a63.png', title: 'Anniversary Cake', category: 'Special Events', alt: 'A63' },
      { id: 64, src: 'a64.jpg', title: 'Anniversary Cake', category: 'Special Events', alt: 'A64' },
      { id: 65, src: 'a65.jpg', title: 'Anniversary Cake', category: 'Special Events', alt: 'A65' },
      { id: 66, src: 'a66.jpg', title: 'Anniversary Cake', category: 'Special Events', alt: 'A66' },
      { id: 67, src: 'a67.png', title: 'Anniversary Cake', category: 'Special Events', alt: 'A67' },
      { id: 68, src: 'a68.jpg', title: 'Anniversary Cake', category: 'Special Events', alt: 'A68' },
      { id: 69, src: 'a69.jpg', title: 'Anniversary Cake', category: 'Special Events', alt: 'A69' },
      { id: 70, src: 'a70.jpg', title: 'Anniversary Cake', category: 'Special Events', alt: 'A70' },
      { id: 71, src: 'a71.jpg', title: 'Anniversary Cake', category: 'Special Events', alt: 'A71' },
      { id: 72, src: 'a72.jpg', title: 'Anniversary Cake', category: 'Special Events', alt: 'A72' },
      { id: 73, src: 'a73.jpg', title: 'Anniversary Cake', category: 'Special Events', alt: 'A73' },
      { id: 74, src: 'a74.jpg', title: 'Anniversary Cake', category: 'Special Events', alt: 'A74' },
      { id: 75, src: 'a75.jpg', title: 'Anniversary Cake', category: 'Special Events', alt: 'A75' },
      { id: 76, src: 'a76.jpg', title: 'Anniversary Cake', category: 'Special Events', alt: 'A76' },
      { id: 77, src: 'a77.jpg', title: 'Anniversary Cake', category: 'Special Events', alt: 'A77' },
      { id: 78, src: 'a78.jpg', title: 'Anniversary Cake', category: 'Special Events', alt: 'A78' },
      { id: 79, src: 'a79.jpg', title: 'Anniversary Cake', category: 'Special Events', alt: 'A79' },
      { id: 80, src: 'a80.jpg', title: 'Anniversary Cake', category: 'Special Events', alt: 'A80' },
      { id: 81, src: 'a81.jpg', title: 'Anniversary Cake', category: 'Special Events', alt: 'A81' },
      { id: 82, src: 'a82.jpg', title: 'Anniversary Cake', category: 'Special Events', alt: 'A82' },
      { id: 83, src: 'a83.jpg', title: 'Anniversary Cake', category: 'Special Events', alt: 'A83' },
      { id: 84, src: 'a84.png', title: 'Anniversary Cake', category: 'Special Events', alt: 'A84' },
      { id: 85, src: 'a85.jpg', title: 'Anniversary Cake', category: 'Special Events', alt: 'A85' },
      { id: 86, src: 'a86.jpg', title: 'Anniversary Cake', category: 'Special Events', alt: 'A86' },
    ],
    videos: [
      { id: 1, src: 'baking-demo.mp4', title: 'Tres Leches Making', category: 'Making Of', alt: 'How we make our tres leches cake' },
      { id: 2, src: 'cake-decorating.mp4', title: 'Cake Decorating', category: 'Making Of', alt: 'Watch us decorate a custom cake' },
      { id: 3, src: 'https://www.tiktok.com/@machiscake7/video/7538234354401611038?is_from_webapp=1&sender_device=pc', title: 'Customer Review', category: 'Testimonials', alt: 'Happy customer sharing experience' },
    ]
  };

  return (
    <>
      <Header />
      <main>
        <section className="py-5">
          <div className="container">
            <div className="text-center mb-5">
              <div className="d-inline-flex minimal-border p-1" style={{ background: 'var(--off-white)' }}>
                <button
                  className={`btn ${activeTab === 'photos' ? 'neon-btn' : ''}`}
                  onClick={() => setActiveTab('photos')}
                  style={{
                    borderRadius: '50px',
                    padding: '10px 30px',
                    margin: '0 5px',
                    background: activeTab === 'photos' ? '' : 'transparent',
                    color: activeTab === 'photos' ? 'white' : 'var(--gray-dark)'
                  }}
                >
                  <i className="bi bi-images me-2"></i>
                  Photos
                </button>
                <button
                  className={`btn ${activeTab === 'videos' ? 'neon-btn' : ''}`}
                  onClick={() => setActiveTab('videos')}
                  style={{
                    borderRadius: '50px',
                    padding: '10px 30px',
                    margin: '0 5px',
                    background: activeTab === 'videos' ? '' : 'transparent',
                    color: activeTab === 'videos' ? 'white' : 'var(--gray-dark)'
                  }}
                >
                  <i className="bi bi-camera-video me-2"></i>
                  Videos
                </button>
              </div>
            </div>

            <div className="row g-4">
              {galleryItems[activeTab].map((item) => (
                <div key={item.id} className="col-lg-4 col-md-6">
                  {activeTab === 'photos' ? (
                    <div className="card card-hover minimal-border border-0 overflow-hidden">
                      <div className="position-relative" style={{ height: '300px' }}>
                        <Image
                          src={`/images/gallery/${item.src}`}
                          alt={item.alt}
                          fill
                          style={{ objectFit: 'contain' }}
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                        <div className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column align-items-center justify-content-center text-white p-3" 
                             style={{ background: 'rgba(0, 0, 0, 0.1)' }}>
                        </div>
                      </div>
                      <div className="card-body text-center p-3">
                        <small style={{ color: 'var(--gray-dark)' }}>
                          {item.alt}
                        </small>
                      </div>
                    </div>
                  ) : (
                    <div className="card card-hover minimal-border border-0 overflow-hidden">
                      <div className="position-relative" style={{ height: '250px' }}>
                        <video
                          className="w-100 h-100"
                          style={{ objectFit: 'cover' }}
                          controls
                          poster={`/images/gallery/thumb-${item.id}.jpg`}
                        >
                          <source src={`${item.src}`} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                        <div className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column align-items-center justify-content-center text-white p-3" 
                             style={{ background: 'rgba(0, 0, 0, 0.3)' }}>
                          <h5 className="fw-bold text-center mb-2">{item.title}</h5>
                          <span className="badge" style={{ 
                            background: 'rgba(255, 94, 0, 0.8)',
                            backdropFilter: 'blur(10px)'
                          }}>
                            {item.category}
                          </span>
                        </div>
                      </div>
                      <div className="card-body text-center p-3">
                        <small style={{ color: 'var(--gray-dark)' }}>
                          {item.alt}
                        </small>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}