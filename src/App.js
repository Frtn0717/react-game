import React from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
// import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="app-wrap">
      <Header />
      {/* <Navbar /> */}
      <Main />
      <Footer />
    </div>
  );
}

export default App;
