import './App.css';
import Navbar from './Components/Navbar';
import Dropdown from './Components/Dropdown';
import Main from './Components/Main';
import Card from './Components/Card';
import Hero from './Components/Hero';
import Footer from './Components/Footer';
import LoginForm from './Components/LoginForm';
import Sell from './Components/Sell';
import Cars from './Components/MoreCars'
import MobileView from './Components/MobileView'
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
       
        <Routes>
          {/* Home Page */}
          <Route path="/" element={
            <>
             <Navbar />
        <Dropdown />

              <Main />
              <Card />
              <Hero />
               <Footer />
            </>
          } />

          {/* Login Page */}
          <Route path="/login" element={<LoginForm />} />
          <Route path="/cars" element={<Cars />} />
          <Route path="/mobile" element={<MobileView />} />

          {/* Sell Page */}
          <Route path="/sell" element={<Sell />} />
        </Routes>

       
      </div>
    </Router>
  );
}

export default App;
