import React, { Component } from 'react';
// import ReactDOM from 'react-dom'; Never used so I won't include it for now.
import logo from './logo.svg';
import './App.css';
import {hot} from "react-hot-loader";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faCheckSquare } from '@fortawesome/free-solid-svg-icons';

library.add(faCoffee, faCheckSquare);


//Simple React component.
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <h1> Roman N.Bumburyak Software Development </h1>
          <h3> I like to Create and Maintain Software.</h3>
        </header>

          <header className="App-headerTwo">
             <h2>This Site was created using React.js</h2>
             <p className="CreationInformation">
                Skill sets include: Java, Spring, IntelliJ, Android Studio experience, Building Restful Apis, React.js, JavaScript, Node.js, HTML 5, CSS 3, Git & Zsh, Github, SQL Databases, MongoDB, WordPress.
                <FontAwesomeIcon icon="coffee" />
                <FontAwesomeIcon icon= "check-square" />
                <FontAwesomeIcon icon="coffee" />
                <FontAwesomeIcon icon="coffee" />

             </p>
          </header>

          <header className="App-headerThree">
             <h2>This Site was created using Node.js</h2>
          </header>


        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

    <div className= "MyExtensionsFlexed">
          <div className= "ExtensionOne">
              Why do you want to extend this so bad?
          </div>

          <div className= "ExtensionTwo">
              Why do you want to extend this so bad?
          </div>

          <div className= "ExtensionThree">
              Why do you want to extend this so bad?
          </div>
      </div>
  </div>


    );
  }
}



 //
 // class Contacts extends React.Component{
 //   render(){     //must define the render method in a React Component.
 //     return (
 //        <div className= "ContactClassOne"></div>
 //
 //     )
 //
 //
 //   }
 // }
 //





export default App;
