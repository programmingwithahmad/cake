import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import BootstrapClient from './Components/BootstrapClient';
import Header from './Components/Header';
import Hero from './Components/Hero';
import Footer from './Components/Footer';

export const metadata = {
  title: 'Yenny Villegas Cakes | Jacksonville Florida',
  description: 'Custom cakes and desserts in Jacksonville, Florida. Tres Leches, Chocolate Cake, and personalized cakes for all occasions.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700;800&family=Montserrat:wght@300;400;600&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css" />
      </head>
      <body>
        {/* <Header/>
        <Hero/>
        <Footer/> */}
        {children}
        <BootstrapClient/>
      </body>
    </html>
  );
}
