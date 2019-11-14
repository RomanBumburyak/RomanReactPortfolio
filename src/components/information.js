import React from 'react';
import ReactDOM from 'react-dom';
import './information.css';





class Information extends React.Component {
    render () {
        return (
            
               
                <div className="main-info-div">
                    <div className="information-class-parent">
                    <h1>About Me</h1>
                        <p>
                        I am an ambitious person who values code. I really enjoy technology and all of the possible applications I could create.<br></br>
                         When I was about 5 we got our first computer. I've been glued ever since.
                            My goal is to convert real-life issues into software solutions.
                            <br></br> I have helped companies in the past edit and fix their sites on various languages.
                            Learning to solve tech issues is a skill I've improved on. 
                        </p>
                       
                    </div>
                    <div className="info-child-one">
                        <h1>My Skillset</h1>
                    </div>
                    <div className="info-child-two">
                        <h1>My Aspirations</h1>
                    </div>
                 </div>
         )
    }
}


export default Information;