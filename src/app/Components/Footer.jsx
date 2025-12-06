import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-5" style={{ 
      backgroundColor: 'var(--black)',
      color: 'var(--white)'
    }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 mb-4 mb-lg-0">
<h3 className="fw-bold neon-text mb-4">{`Machi's Food & Cakes`}</h3>            <p className="mb-4" style={{ color: 'var(--gray-light)' }}>
              Home-based bakery creating delicious, customized cakes and desserts for Jacksonville, Florida.
            </p>
            <div className="d-flex gap-3">
              <Link href="https://www.facebook.com/yenny.villegas.415582" className="text-decoration-none">
                <i className="bi bi-facebook" style={{ 
                  fontSize: '1.5rem',
                  color: 'var(--neon-orange)'
                }}></i>
              </Link>
              <Link href="https://www.tiktok.com/@machiscake7" className="text-decoration-none">
                <i className="bi bi-tiktok" style={{ 
                  fontSize: '1.5rem',
                  color: 'var(--neon-orange)'
                }}></i>
              </Link>
              <Link href="/contact" className="text-decoration-none">
                <i className="bi bi-whatsapp" style={{ 
                  fontSize: '1.5rem',
                  color: 'var(--neon-orange)'
                }}></i>
              </Link>
            </div>
          </div>
          
          <div className="col-lg-4 mb-4 mb-lg-0">
            <h5 className="fw-bold mb-4" style={{ color: 'var(--neon-orange)' }}>Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link href="/" className="text-decoration-none" style={{ color: 'var(--gray-light)' }}>
                  Home
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/about" className="text-decoration-none" style={{ color: 'var(--gray-light)' }}>
                  About
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/price" className="text-decoration-none" style={{ color: 'var(--gray-light)' }}>
                  Price
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/flavors" className="text-decoration-none" style={{ color: 'var(--gray-light)' }}>
                  Flavors
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/gallery" className="text-decoration-none" style={{ color: 'var(--gray-light)' }}>
                  Gallery
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/contact" className="text-decoration-none" style={{ color: 'var(--gray-light)' }}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="col-lg-4">
            <h5 className="fw-bold mb-4" style={{ color: 'var(--neon-orange)' }}>Contact Info</h5>
            <div className="mb-3">
              <i className="bi bi-whatsapp me-2" style={{ color: 'var(--neon-orange)' }}></i>
              <span style={{ color: 'var(--gray-light)' }}>(904) 749-9374</span>
            </div>
            <div className="mb-3">
              <i className="bi bi-geo-alt me-2" style={{ color: 'var(--neon-orange)' }}></i>
              <span style={{ color: 'var(--gray-light)' }}>Jacksonville, Florida</span>
            </div>
            <div className="mb-3">
              <i className="bi bi-envelope me-2" style={{ color: 'var(--neon-orange)' }}></i>
              <span style={{ color: 'var(--gray-light)' }}>Orders via WhatsApp/Facebook/TikTok</span>
            </div>
          </div>
        </div>
        
        <hr className="my-5" style={{ borderColor: 'var(--gray-dark)' }} />
        
        <div className="text-center" style={{ color: 'var(--gray-light)' }}>
          <p className="mb-0">&copy; {new Date().getFullYear()} {`Machi's Food & Cakes. All rights reserved.`}</p>
          <p className="mb-0">Home Baker in Jacksonville, Florida</p>
        </div>
      </div>
    </footer>
  );
}