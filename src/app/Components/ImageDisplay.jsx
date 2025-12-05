import Image from 'next/image';

export function CakeImage({ src, alt, className = '' }) {
  return (
    <div className={`position-relative overflow-hidden ${className}`} style={{ borderRadius: '15px' }}>
      <Image
        src={`/images/${src}`}
        alt={alt}
        fill
        style={{ objectFit: 'cover' }}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  );
}

export function GalleryImage({ src, alt, title, category }) {
  return (
    <div className="card card-hover minimal-border border-0 overflow-hidden">
      <div className="position-relative" style={{ height: '250px' }}>
        <Image
          src={`/images/gallery/${src}`}
          alt={alt}
          fill
          style={{ objectFit: 'cover' }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column align-items-center justify-content-center text-white p-3" 
             style={{ background: 'rgba(0, 0, 0, 0.3)' }}>
          <h5 className="fw-bold text-center mb-2">{title}</h5>
          <span className="badge" style={{ 
            background: 'rgba(255, 94, 0, 0.8)',
            backdropFilter: 'blur(10px)'
          }}>
            {category}
          </span>
        </div>
      </div>
      <div className="card-body text-center p-3">
        <small style={{ color: 'var(--gray-dark)' }}>
          {alt}
        </small>
      </div>
    </div>
  );
}