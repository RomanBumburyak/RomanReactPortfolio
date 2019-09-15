import React, { Component } from 'react';
import ReactDOM from 'react-dom'; 
import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import About from './components/about';
import Information from './components/information';
import Portfolio from './components/portfolio';
import Footer from './components/footer';








//Simple React component.
class App extends Component {
  render() {
    return (
      
      <div className="main div" style={{backgroundColor:'lightgrey'}}>
        
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
