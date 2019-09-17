import React, { Component } from 'react';
// import ReactDOM from 'react-dom'; 
import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import About from './components/about';
import Information from './components/information';
import Portfolio from './components/portfolio';
import Footer from './components/footer';
import NavBar from './components/navBar';
import {BrowserRouter as Router,Route, Link} from 'react-router-dom';









//Simple React component.
class App extends Component {
  render() {
    return (
      
      <div className="main div">
        <NavBar/>
        <Header/>
        <About/>
        <Portfolio/>
        <Information/>
       
        <Footer/>
      </div>
      


  )
  }
}





export default App;
