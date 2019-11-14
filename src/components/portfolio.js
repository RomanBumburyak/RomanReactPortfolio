import React from 'react';
import ReactDOM from 'react-dom';
import './portfolio.css';




class Portfolio extends React.Component {
       
    render () {
        return (
            <div className="parent-portfolio">
                
                        <div className="begin-portfolio-flex">
                            <div className="portfolio-block-one">
                                 <h1>Java Projects</h1>
                                 <h3>Vehicle Telematics app</h3>
                                <a style={{ color: '#FFF' }} href="https://github.com/RomanBumburyak/Telematics" target="_blank" rel="noopener noreferrer">Telematics</a>
                                  <h2>Work Order Creator</h2>
                                  <a style={{ color: '#FFF' }} href="https://github.com/RomanBumburyak/WorkOrder" target="_blank" rel="noopener noreferrer">WorkOrder</a>
                                  <h2>My Favorite Project(CanIGetUhh)</h2>
                                  <a style={{ color: '#FFF' }} href="https://github.com/canIgetUhh/CanIGetUhh" target="_blank" rel="noopener noreferrer">Bartender/Customer order app</a>

                             </div>

                             <div className="portfolio-block-two">
                                
                             </div>

                             


                        </div>

                        <div className="my-info-parent">
                             
                            <div className="my-info-one">
                            <p>
                               <h2>I'm a lifelong learner.</h2>
                               With progressive Back-End and Front-End experience.
                               <h3>Please bear with me while the site is under service!</h3>
                            </p>
                           </div>

                             <div className="my-info-two">
                             </div>
                        </div>
                
            </div>
            
         )
    }
   
}


export default Portfolio;