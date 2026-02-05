import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Carousel from './components/Carousel';
import TopTenBooks from './components/TopTenBooks';
import BooksTable from './components/BooksTable';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Carousel />
      
      <main className="main-content">
        <TopTenBooks />
        <BooksTable />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;