import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Link from 'next/link';

export default function FlavorsPage() {
  const flavors = [
    {
      category: 'Tres Leches Flavors',
      items: [
        'Three Nutella Milks',
        'Three Milk Sweets of Milk',
        'Three Coffee Milk',
        'Three Pistachio Milks',
        'Three Piña Colada Milks',
        'Three Milk Raisin Rum'
      ]
    },
    {
      category: 'Cake Fillings',
      items: [
        'Cream Bariloche (Dulce de Leche & Chocolate)',
        'Buttercream Frosting',
        'Chocolate Ganache',
        'Fruit Preserves',
        'Whipped Cream',
        'Custom Fillings Available'
      ]
    },
    {
      category: 'Special Flavors',
      items: [
        'Traditional Chocolate',
        'Vanilla Bean',
        'Red Velvet',
        'Caramel Swirl',
        'Cookies & Cream',
        'Seasonal Specials'
      ]
    }
  ];

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
              <h1 className="display-6 fw-bold mb-4 neon-text">Our Flavors</h1>
              <p className="lead" style={{ color: 'var(--gray-dark)', maxWidth: '700px', margin: '0 auto' }}>
                Explore our wide range of delicious flavors and fillings. Each creation is made with high-quality ingredients and lots of love.
              </p>
            </div>
          </div>
        </section>

        {/* Recipe Highlight */}
        <section className="py-5">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 mb-5 mb-lg-0">
                <div className="minimal-border p-4 h-100" style={{ background: 'white' }}>
                  <h3 className="fw-bold mb-4" style={{ color: 'var(--neon-orange)' }}>
                    <i className="bi bi-star-fill me-2"></i>
                    Signature Recipe: Cream Bariloche
                  </h3>
                  <p className="mb-4" style={{ color: 'var(--gray-dark)' }}>
                    Our famous Cream Bariloche filling made with dulce de leche and chocolate.
                  </p>
                  <h5 className="fw-bold mb-3">Ingredients:</h5>
                  <ul className="list-unstyled mb-4">
                    <li className="mb-2">
                      <i className="bi bi-check-circle-fill me-2" style={{ color: 'var(--neon-orange)' }}></i>
                      1 can of sweet milk (dulce de leche)
                    </li>
                    <li className="mb-2">
                      <i className="bi bi-check-circle-fill me-2" style={{ color: 'var(--neon-orange)' }}></i>
                      60gr of semi-sweet chocolate
                    </li>
                    <li className="mb-2">
                      <i className="bi bi-check-circle-fill me-2" style={{ color: 'var(--neon-orange)' }}></i>
                      2 bars of cold butter
                    </li>
                  </ul>
                  <div style={{ 
                    padding: '15px',
                    background: 'var(--off-white)',
                    borderRadius: '10px',
                    borderLeft: '4px solid var(--neon-orange)'
                  }}>
                    <h6 className="fw-bold mb-2">Instructions:</h6>
                    <p className="mb-0" style={{ fontSize: '0.9rem' }}>
                      {`Melt the dulce de leche with chocolate in a double boiler, whisk for two minutes when the chocolate has dissolved, then start adding the butter into pieces, whisk for ten minutes and that's it! Refrigerate and use.`}
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="col-lg-6">
                <div className="minimal-border overflow-hidden" style={{ 
                  height: '400px',
                  background: 'linear-gradient(45deg, var(--neon-orange), var(--orange-light))',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <div className="text-center text-white">
                    <i className="bi bi-egg-fried" style={{ fontSize: '5rem' }}></i>
                    <h3 className="mt-3">Fresh Ingredients</h3>
                    <p className="mb-0">Always made with love and quality</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Flavors Grid */}
        <section className="py-5" style={{ background: 'var(--off-white)' }}>
          <div className="container">
            <div className="row g-4">
              {flavors.map((category, index) => (
                <div key={index} className="col-lg-4 col-md-6">
                  <div className="card minimal-border h-100 border-0" style={{ background: 'white' }}>
                    <div className="card-body p-4">
                      <h3 className="fw-bold mb-4" style={{ color: 'var(--neon-orange)' }}>
                        {category.category}
                      </h3>
                      <ul className="list-unstyled mb-0">
                        {category.items.map((item, idx) => (
                          <li key={idx} className="mb-3 d-flex align-items-start">
                            <div style={{ 
                              minWidth: '24px',
                              marginTop: '2px'
                            }}>
                              <i className="bi bi-arrow-right-circle-fill" style={{ color: 'var(--neon-orange)' }}></i>
                            </div>
                            <span style={{ color: 'var(--gray-dark)' }}>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Custom Order Section */}
        <section className="py-5">
          <div className="container">
            <div className="text-center">
              <h2 className="fw-bold mb-4">Custom Flavor Requests?</h2>
              <p className="lead mb-4" style={{ color: 'var(--gray-dark)', maxWidth: '700px', margin: '0 auto' }}>
                Have a special flavor in mind? We love creating custom combinations for our customers!
              </p>
              <Link href="/contact" className="btn neon-btn px-5">
                <i className="bi bi-chat-dots me-2"></i>
                Discuss Your Custom Cake
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}