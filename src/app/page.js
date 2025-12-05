import Header from './Components/Header';
import Hero from './Components/Hero';
import Footer from './Components/Footer';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        
        {/* Featured Cakes Section */}
        <section className="py-5">
          <div className="container">
            <div className="text-center mb-5">
              <h2 className="section-title d-inline-block">Popular Creations</h2>
              <p className="lead" style={{ color: 'var(--gray-dark)' }}>
                Most requested cakes and desserts
              </p>
            </div>
            
            <div className="row g-4">
              {[
                { src:'images/gallery/a18.png', title: 'Tres Leches Cake', desc: 'Traditional three-milk cake in various flavors' },
                { src:'images/gallery/a34.jpg', title: 'Chocolate Cake', desc: 'Rich chocolate cake with creamy frosting' },
                { src:'images/gallery/a10.jpg', title: 'Teddy Bear Cake', desc: 'Perfect for Baby Showers & Birthdays' },
                { src:'images/gallery/a15.jpg', title: 'Personalized Cakes', desc: 'Custom designs for any occasion' },
                { src:'images/gallery/a17.jpg', title: 'Sweets Collection', desc: 'Dessert tables and party treats' },
                { src:'images/gallery/a62.jpg', title: 'Gentleman Cakes', desc: 'Special cakes for men\'s celebrations' }
              ].map((cake, index) => (
                <div key={index} className="col-md-4">
                  <div className="card card-hover minimal-border h-100 border-0" style={{ background: 'var(--off-white)' }}>
                    <div className="card-body text-center p-4">
                      <div className="mb-3" style={{ 
                        width: '80px',
                        height: '80px',
                        borderRadius: '50%',
                        margin: '0 auto',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                        {/* <i className="bi bi-cake2-fill text-white" style={{ fontSize: '2rem' }}>{cake.src}</i> */}
<Image
  src={`${cake.src}`}
  alt="Cake"
  width={150}
  height={75}
  className="object-contain"
  sizes="64px"
/>
                      </div>
                      <h5 className="fw-bold mb-3">{cake.title}</h5>
                      <p style={{ color: 'var(--gray-dark)' }}>{cake.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-5" style={{ 
          background: 'linear-gradient(135deg, var(--neon-orange) 0%, var(--orange-light) 100%)'
        }}>
          <div className="container">
            <div className="text-center text-white">
              <h2 className="display-5 fw-bold mb-4">Ready to Order Your Perfect Cake?</h2>
              <p className="lead mb-4">Contact us via Facebook, TikTok, or call us directly!</p>
              <a href="tel:9047499374" className="btn btn-light btn-lg px-5 py-3 fw-bold" style={{ 
                color: 'var(--neon-orange)',
                borderRadius: '50px'
              }}>
                <i className="bi bi-whatsapp me-2"></i>
                Call or Text (904) 749-9374
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}