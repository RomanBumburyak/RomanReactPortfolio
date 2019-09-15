import React from 'react';
import ReactDOM from 'react-dom';


class Portfolio extends React.Component {
       
    render () {
        return (
            <div className="parent portfolio">
                 <div className="porfolio flex body">
                        <div className="begin portfolio flex" style={{height:'300px', backgroundColor:'#fafafa', display:'flex', flexWrap:'wrap', justifyContent:'space-between', padding:'15px', marginBottom:'15%'}}>
                          <div style={{color:'blue', width:'30%', height:'60%', backgroundColor:'silver'}}> Hey Portfolio 
                           {/* <a href={'google.com'}>
                                click test
                            </a> */}
                            
                          </div>
                          <div style={{color:'silver', width:'30%', height:'60%', backgroundColor:'silver'}}> Hey Portfolio </div>
                          <div style={{color:'red', width:'30%', height:'60%', backgroundColor:'silver'}}> Hey Portfolio </div>
                          <div style={{color:'blue', width:'30%', height:'60%', backgroundColor:'#333'}}> Hey Portfolio </div>
                          <div style={{color:'yellow', width:'30%', height:'60%', backgroundColor:'#333'}}> Hey Portfolio </div>
                          <div style={{color:'red', width:'30%', height:'60%', backgroundColor:'#333'}}> Hey Portfolio </div>


                        </div>
                </div>
            </div>
            
         )
    }
   
}


export default Portfolio;