import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer pt-5">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-4 col-md-6">
            <h3 className="footer-title">Acerca de Stephen King</h3>
            <p className="mb-4">
              Stephen King el "Maestro del Terror", cuyas novelas han redefinido el género.
            </p>
            <div className="social-links mb-4">
              <a href="https://www.facebook.com/todostephenking?locale=es_ES" target="_blank" rel="noopener noreferrer" className="social-link">
                📘 Facebook
              </a>
              <a href="https://www.instagram.com/stephenking/" target="_blank" rel="noopener noreferrer" className="social-link">
                📷 Instagram
              </a>
              <a href="https://www.linkedin.com/in/stephen-king-a393a3188/" target="_blank" rel="noopener noreferrer" className="social-link">
                💼 LinkedIn
              </a>
            </div>
          </div>

          <div className="col-lg-2 col-md-6">
            <h3 className="footer-title">Enlaces rápidos</h3>
            <ul className="footer-links">
              <li><a href="#top-ten">Top 10</a></li>
              <li><a href="#books">Libros</a></li>
              <li><a href="https://www.amazon.es/stephen-king-merchandising/s?k=stephen+king+merchandising" target="_blank" rel="noopener noreferrer">Productos</a></li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-6">
            <h3 className="footer-title">Soporte Técnico</h3>
            <ul className="footer-links">
              <li><a href="/pdf/avisoLegal.pdf" target="_blank" rel="noopener noreferrer">Aviso Legal</a></li>
              <li><a href="/pdf/politicaPrivacidadDatos.pdf" target="_blank" rel="noopener noreferrer">Política de Privacidad</a></li>
              <li><a href="/pdf/condicionesGeneralesVenta.pdf" target="_blank" rel="noopener noreferrer">Política de Ventas</a></li>
              <li><a href="/pdf/politicaCookies(3).pdf" target="_blank" rel="noopener noreferrer">Política de Cookies</a></li>
            </ul>
          </div>

          <div className="col-lg-4 col-md-6">
            <h3 className="footer-title">Newsletter</h3>
            <p className="mb-4">Suscríbete para recibir novedades exclusivas.</p>
            <form className="mb-4" onSubmit={(e) => e.preventDefault()}>
              <div className="input-group">
                <input type="email" className="form-control newsletter-input" placeholder="Tu email" required />
                <button className="btn btn-subscribe text-white" type="submit">Suscríbete</button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="footer-bottom mt-5">
        <div className="container">
          <div className="row py-3">
            <div className="col-md-6 text-center text-md-start">
              <h6 className="mb-0">&copy; 2025 Stephen King. Todos los derechos reservados.</h6>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <h6 className="mb-0">Stephen King</h6>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;