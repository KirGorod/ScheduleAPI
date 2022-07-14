import 'react-big-calendar/lib/css/react-big-calendar.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from './components/Navbar'
import { AuthProvider } from "./context/AuthContext";
import NavbarComponent from './components/NavbarComponent'
import FooterComponent from './components/FooterComponent'
import AuthContext from "./context/AuthContext";
import { useContext } from 'react'
import RoutesHelper from './RoutesHelper'


function App() {

  return (
    <Router>
      <AuthProvider>
        <div className="app">
        <div className="container-xxl bg-white p-0">
          <div className="container-xxl position-relative p-0">
          <NavbarComponent />
          </div>
          <RoutesHelper />
          <FooterComponent />
          </div>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
