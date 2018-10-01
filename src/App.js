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


                <a href ="https://github.com/RomanBumburyak/RomanReactPortfolio"> <h3> Github  </h3> </a> &
                 <a href="https://www.linkedin.com/in/romanbumburyak/" > <h3>LinkedIn</h3> </a>
                 <h5>Check out my Code Repositories and my LinkedIn Account</h5>

            </div>
        </header>

          <header className="App-headerTwo">
             <h2>This Site was created using React.js </h2>
               <p className="CreationInformation">
                  My Skill sets include: Java, IntelliJ,  Spring, React.js, Vue.js,  Javascript, Android Studio,

               </p>
            <p className="CreationInformationTwo">
             Node.js, Express, HTML 5, CSS 3,
            Git, Github, Node, SQL, MongoDB, WordPress, Salesforce CRM, Front-End and Back-End development and deployment.
            </p>

          </header>

          <header className="App-headerThree">
             <h2> Here are several examples of my Projects. The examples range from HTML/CSS and JavaScript, to Java.</h2>

                 <div className="HeaderThreeExtensionOne">
                              <h4> "Work order Creator" - Java.</h4>
                              <a href= "https://github.com/RomanBumburyak/WorkOrder/tree/master/src"> <h3> WorkOrder </h3>  </a>

                 </div>


                 <div className="HeaderThreeExtensionTwo">

                 <h4> "CanIgetUhh"- Written in Java and React.</h4>

                 <a href= "https://github.com/canIgetUhh/"> <h3>CanIgetUhh</h3>  </a>

                 <div className = "App-logo-CanI"></div>

                 </div>

                 <div className="HeaderThreeExtensionThree">

                              <h4> "iTunes API" - Created using HTML, CSS & JavaScript .</h4>
                              <a href= "https://github.com/RomanBumburyak/iTunes-Project/tree/master/starter_files%2011"> <h3>iTunes API</h3>  </a>

                 </div>


          </header>


        <p className="App-intro">
        </p>

    <div className= "MyExtensionsFlexed">
          <div className= "ExtensionOne">
          <img src={logo} className="App-logo" alt="logo" />

             <h1> Mantra </h1>
               <h2> I am a motivated and hungry developer. </h2>

                       I love to code and I love to learn new technologies.
                       I am detail oriented and I am consistently thinking outside-the-box. Technology is growing and
                       expanding at an astounding pace. As a Developer, I understand that staying on top of tech is the
                       best way to adapt learn while staying updated an informed.
                        <h2> Daily Goals </h2>
                       My goal is to convert real-life issues into software solutions. Saving time and automating processes
                        are essential to growth and we can accomplish these goals with different Software solutions.

            </div>

          <div className= "ExtensionTwo">
            <h1> My Story </h1>
                I have always loved computers and technology, I have always been near my computer and my tech. I vividly remember my first Sony Computer when I was five years old.
                Growing up I sat by my computer for hours on end - learning and practicing. I learned HTML and CSS and began creating landing pages. I grew as a freelancer and
                began learning JavaScript. From there my interest really blossomed. I began looking into Object Oriented programming and saw the potential. I am constantly learning and
                researching programmatic languages and frameworks. From a young age, I knew that developing software would be a life long dream and activity.

          </div>

          <div className= "ExtensionThree">
              Npm is the Node.js Package Manager I used for this React App.
          </div>

          <div className= "ExtensionFour">
              This website was built in React.js along with Node.js and Express.
          </div>

          <div className= "ExtensionFive">



            <div className="NodeIntroBlock">  Node.js is a JavaScript environment that includes everything a Developer needs to run a program written in JavaScript.
                  <h1> Hello </h1>
            </div>



          </div>



                      <div className= "NpmTerminalLook">

                            <div className= "InternalTerminal">
                            node -v
                            npm -v
                            npm start
                            </div>



                      </div>


          <div className= "ExtensionSix">
              I have experience building several Android applications with Android Studio. I have working knowledge
              with XML and Kotlin.
          </div>


          <div className= "UnderLinerOne">

           <p className="UnderlinerParaOne">

           </p>

          </div>

      </div>

  </div>




  )
  }
}





export default App;
