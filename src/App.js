import React from 'react';
import "./App.css"
import Info from './componenets/Info';
import About from './componenets/About';
import Footer from './componenets/Footer';


function App() {
  return (
    <div className="container">
        <div className="card-view">
          <Info />
          <About />
          <Footer />
          
        </div>
    </div>
  );
}

export default App;
