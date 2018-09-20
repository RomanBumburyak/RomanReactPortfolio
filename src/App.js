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
          <h1> Roman N.Bumburyak Software Development </h1>
          <h3> I like to Create and Maintain Software.</h3>
        </header>

          <header className="App-headerTwo">
             <h2>This Site was created using React.js </h2>
             <p className="CreationInformation">
                Skill sets include: Java, Spring, IntelliJ, Android Studio, Building Restful Apis, React.js, JavaScript, Node.js, Express, HTML 5, CSS 3,
                Git & Zsh, Github, SQL Databases, MongoDB, WordPress among other frameworks.
                <FontAwesomeIcon icon="coffee" href="https://reactjs.org/docs/react-component.html" />Click me
                <FontAwesomeIcon icon= "check-square" />
                <FontAwesomeIcon icon="coffee" />
                <FontAwesomeIcon icon="coffee" />


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

              Why do you want to extend this so bad?

                       Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit amet consectetur adipisci[ng] velit, sed quia non-numquam [do] eius modi tempora inci[di]dunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur?




          </div>

          <div className= "ExtensionTwo">
              Why do you want to extend this so bad?

              Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit amet consectetur adipisci[ng] velit
          </div>

          <div className= "ExtensionThree">
              Node.js Package manager
          </div>

          <div className= "ExtensionFour">
              This website was built in React.js.
          </div>

          <div className= "ExtensionFive">
              Why do you want to extend this so bad?
          </div>

          <div className= "ExtensionSix">
              I have experience building several Android applications with Android Studio. I have working knowledge
              with XML and Kotlin.
          </div>

          <div className= "Underliner">
              Under the NPM it goes.
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
