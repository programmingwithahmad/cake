import Image from 'next/image';

export default function Hero() {
  return (
    <section className="py-4 position-relative overflow-hidden" style={{ 
      background: 'linear-gradient(135deg, var(--white) 0%, var(--off-white) 100%)',
      minHeight: '90vh',
      display: 'flex',
      alignItems: 'center'
    }}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-5 mb-lg-0">
            <div className="animate-fade-in-up">
              <h1 className="display-3 fw-bold mb-4">
                <span className="neon-text">Custom Cakes</span> Made With Love in Jacksonville
              </h1>
              <p className="lead mb-4" style={{ color: 'var(--gray-dark)' }}>
                Artisanal cakes, Tres Leches, and sweet delights crafted in my home kitchen. 
                Perfect for birthdays, celebrations, and special moments in Florida.
              </p>
              <div className="d-flex flex-wrap gap-3">
                <a href="/contact" className="btn neon-btn">
                  Order Your Cake
                </a>
                <a href="/gallery" className="btn btn-outline" style={{ 
                  borderColor: 'var(--neon-orange)',
                  color: 'var(--neon-orange)',
                  borderRadius: '50px',
                  padding: '12px 30px'
                }}>
                  View Gallery
                </a>
              </div>
              <div className="mt-5">
                <h6 className="text-uppercase mb-3" style={{ color: 'var(--neon-orange)' }}>
                  <i className="bi bi-geo-alt me-2"></i>Located in Jacksonville, Florida
                </h6>
                <h6 className="text-uppercase mb-3" style={{ color: 'var(--neon-orange)' }}>
                  <i className="bi bi-whatsapp me-2"></i>Call/Text: (904) 749-9374
                </h6>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="position-relative">
              <div className="minimal-border p-3" style={{ 
                background: 'white',
                transform: 'rotate(3deg)'
              }}>
                <div className="minimal-border overflow-hidden" style={{
                  height: '560px',
                  position: 'relative'
                }}>
                  {/* Actual Image */}
                  <Image
                    src="/images/gallery/ye.png"
                    alt="Beautiful custom cake by Yenny Villegas"
                    fill
                    style={{ objectFit: 'cover' }}
                    priority
                  />
                </div>
              </div>
              {/* Decorative elements */}
              <div style={{
                position: 'absolute',
                top: '-20px',
                right: '-20px',
                width: '100px',
                height: '100px',
                background: 'var(--neon-orange)',
                borderRadius: '50%',
                opacity: '0.1',
                zIndex: '-1'
              }}></div>
              <div style={{
                position: 'absolute',
                bottom: '-30px',
                left: '-30px',
                width: '150px',
                height: '150px',
                background: 'var(--orange-light)',
                borderRadius: '50%',
                opacity: '0.1',
                zIndex: '-1'
              }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}