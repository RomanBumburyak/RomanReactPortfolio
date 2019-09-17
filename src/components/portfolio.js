import React from 'react';
import ReactDOM from 'react-dom';
import './portfolio.css';




class Portfolio extends React.Component {
       
    render () {
        return (
            <div className="parent-portfolio">
                
                        <div className="begin-portfolio-flex">
                            <div className="portfolio-block-one">
                                <a href="https://7oaks.io" target="_blank" rel="noopener noreferrer">7 oaks</a>
                             </div>

                             <div className="portfolio-block-two">
                                <a href="https://7oaks.io" target="_blank" rel="noopener noreferrer">7 oaks</a>
                             </div>

                             <div className="portfolio-block-three">
                                <a href="https://7oaks.io" target="_blank" rel="noopener noreferrer">7 oaks</a>
                             </div>
                             <div className="portfolio-block-four">
                                <a href="https://7oaks.io" target="_blank" rel="noopener noreferrer">7 oaks</a>
                             </div>
                             <div className="portfolio-block-five">
                                <a href="https://7oaks.io" target="_blank" rel="noopener noreferrer">7 oaks</a>
                             </div>


                        </div>

                        <div className="my-info-parent">
                             
                            <div className="my-info-one">
                                <a href="https://7oaks.io" target="_blank" rel="noopener noreferrer">7 oaks</a>
                             </div>

                             <div className="my-info-two">
                                <a href="https://7oaks.io" target="_blank" rel="noopener noreferrer">7 oaks</a>
                             </div>
                        </div>
                
            </div>
            
         )
    }
   
}


export default Portfolio;