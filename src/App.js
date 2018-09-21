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
            <div className="MainHeaderDiv">
              <h2> Roman N.Bumburyak </h2>
              <h2> Software Development </h2>
              <a href="https://github.com/RomanBumburyak/RomanReactPortfolio"><FontAwesomeIcon icon="coffee" /> Github</a>
              <a href="https://www.linkedin.com/in/romanbumburyak/"><FontAwesomeIcon icon="check-square" /> LinkedIn</a>

              <h3> I Create and Maintain Software.</h3>
            </div>
        </header>

            // <div className= "ContactBar">
            // <a href="https://github.com/RomanBumburyak/RomanReactPortfolio"><FontAwesomeIcon icon="coffee" /> Github</a>
            // <a href="https://www.linkedin.com/in/romanbumburyak/"><FontAwesomeIcon icon="check-square" /> LinkedIn</a>
            //
            //
            // </div>

          <header className="App-headerTwo">
             <h2>This Site was created using React.js </h2>
               <p className="CreationInformation">
                  Skill sets include: Java, Spring, IntelliJ, Android Studio, Building Restful Apis, React.js, JavaScript,

               </p>
            <p className="CreationInformationTwo">
             Node.js, Express, HTML 5, CSS 3,
            Git & Zsh, Github, SQL Databases, MongoDB, WordPress among other frameworks.
            </p>

          </header>

          <header className="App-headerThree">
             <h2>This Site was created using Node.js</h2>
          </header>


        <p className="App-intro">
        </p>

    <div className= "MyExtensionsFlexed">
          <div className= "ExtensionOne">
          <img src={logo} className="App-logo" alt="logo" />

             <h1> My goals and my Mission </h1>

                       I am a motivated and hungry developer. I love to code and I love to learn new technologies. I am patient and a great team player.
                       I am detail oriented and I am consistently thinking outside-the-box.



          </div>

          <div className= "ExtensionTwo">
            <h1> My Story </h1>
                I have always loved computers and technology, I have always been near my computer and my tech. I vividly remember my first Sony Computer when I was five years old.
                Growing up I sat by my computer for hours on end - learning and practicing. I learned HTML and CSS and began creating landing pages. I grew as a freelancer and
                began learning JavaScript. From there my interest really blossomed. I began looking into Object Oriented programming and saw the potential. I am constantly learning and
                researching programmatic languages and frameworks. From a young age, I knew that developing software would be a life long dream and activity.

          </div>

          <div className= "ExtensionThree">
              NPM is the Node.js Package manager.
          </div>

          <div className= "ExtensionFour">
              This website was built in React.js along with Node.js and Express.
          </div>

          <div className= "ExtensionFive">
            <p className="NodeIntroBlock">  Node.js is a JavaScript environment that includes everything a Developer needs to run a program written in JavaScript.
            </p>
          </div>

          <div className= "ExtensionSix">
              I have experience building several Android applications with Android Studio. I have working knowledge
              with XML and Kotlin.
          </div>

          <div className= "Underliner">

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
