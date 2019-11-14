import React from 'react';
import ReactDOM from 'react-dom';
import './information.css';





class Information extends React.Component {
    render () {
        return (
            
               
                <div className="main-info-div">
                    <div className="information-class-parent">
                    <h1>About Me</h1>
                        I am a young and ambitious person who is passionate about coding. I am diligent, humble and a great team player. I love challenges and I see obstacles as a way to better myself.
                        My goal is to convert real-life issues into software solutions. 
                    </div>
                    <div className="info-child-one">
                        <h1>My Skillset</h1>
                    </div>
                    <div className="info-child-two">
                        <h1>Final Project</h1>
                    </div>
                 </div>
         )
    }
}


export default Information;