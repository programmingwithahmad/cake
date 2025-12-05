import Image from 'next/image';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <section className="py-5">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 mb-5 mb-lg-0">
                <div className="position-relative">
                  <div className="minimal-border overflow-hidden" style={{ 
                    height: '400px',
                    position: 'relative'
                  }}>
                    <Image
                      src="/images/gallery/zee.png"
                      alt="Yenny Villegas - Home Baker in Jacksonville"
                      fill
                      style={{ objectFit: 'contain' }}
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </div>
              
              <div className="col-lg-6">
                <h2 className="fw-bold mb-4" style={{ color: 'var(--neon-orange)' }}>Meet Yenny</h2>
                <p className="mb-4" style={{ color: 'var(--gray-dark)' }}>
                  Hello! I'm Yenny Villegas, a passionate home baker based in beautiful Jacksonville, Florida. 
                  My journey into professional baking started in my own kitchen, where I discovered the joy of 
                  creating beautiful, delicious cakes for family and friends.
                </p>
                <p className="mb-4" style={{ color: 'var(--gray-dark)' }}>
                  What began as a hobby soon turned into requests from friends, then friends of friends, 
                  and now I'm blessed to share my creations with the wonderful Jacksonville community. 
                  Every cake I make is infused with love, attention to detail, and the highest quality ingredients.
                </p>
                
                <div className="row mt-4">
                  <div className="col-md-6">
                    <div className="d-flex align-items-center mb-3">
                      <div className="me-3" style={{ 
                        width: '50px',
                        height: '50px',
                        background: 'var(--off-white)',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                        <i className="bi bi-house-heart-fill" style={{ color: 'var(--neon-orange)', fontSize: '1.5rem' }}></i>
                      </div>
                      <div>
                        <h6 className="fw-bold mb-1">Home Kitchen</h6>
                        <p className="mb-0 small" style={{ color: 'var(--gray-dark)' }}>All cakes baked fresh at home</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="col-md-6">
                    <div className="d-flex align-items-center mb-3">
                      <div className="me-3" style={{ 
                        width: '50px',
                        height: '50px',
                        background: 'var(--off-white)',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                        <i className="bi bi-award-fill" style={{ color: 'var(--neon-orange)', fontSize: '1.5rem' }}></i>
                      </div>
                      <div>
                        <h6 className="fw-bold mb-1">Quality Focus</h6>
                        <p className="mb-0 small" style={{ color: 'var(--gray-dark)' }}>Premium ingredients only</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section with Images */}
        <section className="py-5" style={{ background: 'var(--off-white)' }}>
          <div className="container">
            <div className="text-center mb-5">
              <h2 className="section-title d-inline-block">Our Process</h2>
              <p className="lead" style={{ color: 'var(--gray-dark)' }}>
                From idea to delicious celebration
              </p>
            </div>
            
            <div className="row g-4">
              <div className="col-md-4">
                <div className="card minimal-border h-100 border-0 text-center p-4" style={{ background: 'white' }}>
                  <div className="position-relative mb-4" style={{ height: '200px' }}>
                    <Image
                      src="/images/gallery/b1.png"
                      alt="Clean home kitchen preparation"
                      fill
                      style={{ objectFit: 'cover', borderRadius: '10px' }}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <h4 className="fw-bold mb-3">1. Preparation</h4>
                  <p style={{ color: 'var(--gray-dark)' }}>
                    We start with a clean workspace and fresh, high-quality ingredients for every order.
                  </p>
                </div>
              </div>
              
              <div className="col-md-4">
                <div className="card minimal-border h-100 border-0 text-center p-4" style={{ background: 'white' }}>
                  <div className="position-relative mb-4" style={{ height: '200px' }}>
                    <Image
                      src="/images/gallery/b2.png"
                      alt="Baking process with love"
                      fill
                      style={{ objectFit: 'cover', borderRadius: '10px' }}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <h4 className="fw-bold mb-3">2. Baking</h4>
                  <p style={{ color: 'var(--gray-dark)' }}>
                    Each cake is baked with precision and care, ensuring perfect texture and flavor.
                  </p>
                </div>
              </div>
              
              <div className="col-md-4">
                <div className="card minimal-border h-100 border-0 text-center p-4" style={{ background: 'white' }}>
                  <div className="position-relative mb-4" style={{ height: '200px' }}>
                    <Image
                      src="/images/gallery/b3.png"
                      alt="Beautiful cake decoration"
                      fill
                      style={{ objectFit: 'cover', borderRadius: '10px' }}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <h4 className="fw-bold mb-3">3. Decoration</h4>
                  <p style={{ color: 'var(--gray-dark)' }}>
                    Custom designs and decorations that bring your vision to life with edible artistry.
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