import React from 'react';
import '../styles/AboutAuthor.css';

const AboutAuthor = () => {
  return (
    <section id="about-author" className="about-author-section">
      <div className="container">
        <div className="about-author-content">
          <h2 className="about-author-title">Sobre el Autor</h2>
          
          <div className="author-info">
            <div className="author-image">
              <img 
                src="/images/aboutHe/stephenKingPhoto.jpg" 
                alt="Stephen King"
                onError={(e) => {
                  e.target.src = "https://via.placeholder.com/400x500/8b0000/ffffff?text=Stephen+King";
                }}
              />
            </div>
            
            <div className="author-description">
              <h3 className="author-name">Stephen Edwin King</h3>
              <p className="author-subtitle">El Maestro del Terror</p>
              
              <div className="author-bio">
                <p>
                  <strong>Stephen King</strong> (Portland, Maine, 21 de septiembre de 1947), también conocido por su 
                  pseudónimo <strong>Richard Bachman</strong>, es un escritor estadounidense de novelas de terror, 
                  ficción sobrenatural, misterio, ciencia ficción y literatura fantástica.
                </p>
                
                <p>
                  Sus libros han vendido <strong>más de 500 millones de ejemplares</strong> y en su mayoría han sido 
                  adaptados al cine y a la televisión. Ha publicado <strong>65 novelas</strong>, once colecciones de 
                  relatos y novelas cortas, y siete libros de no ficción.
                </p>
                
                <p>
                  King ha ganado numerosos premios literarios, incluyendo el <strong>Premio Bram Stoker</strong> en 
                  trece ocasiones, el <strong>Premio British Fantasy</strong> siete veces, y los <strong>Premios 
                  Locus</strong> en cinco oportunidades.
                </p>
                
                <div className="author-stats">
                  <div className="stat-item">
                    <span className="stat-number">65+</span>
                    <span className="stat-label">Novelas</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">500M+</span>
                    <span className="stat-label">Libros Vendidos</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">78</span>
                    <span className="stat-label">Años</span>
                  </div>
                </div>
                
                <p>
                  Muchas de sus historias se desarrollan en <strong>Maine</strong>, utilizando ciudades ficticias como 
                  <em>Castle Rock</em>, <em>Jerusalem's Lot</em> y <em>Derry</em>. Su obra ha influenciado a 
                  generaciones de escritores y cineastas, consolidándose como uno de los autores más importantes 
                  del género de terror contemporáneo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutAuthor;