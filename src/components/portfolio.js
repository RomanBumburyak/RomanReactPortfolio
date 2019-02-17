import React from 'react';
import ReactDOM from 'react-dom';


class Portfolio extends React.Component {
    render () {
        return (
            <div className="parent portfolio">
                 <div className="porfolio flex body">
                        <div className="begin portfolio flex" style={{height:'300px', backgroundColor:'#fafafa', display:'flex', flexWrap:'wrap', justifyContent:'center', marginBottom:'15%'}}>
                          <div style={{color:'blue', width:'30%', height:'60%', backgroundColor:'black'}}> Hey Portfolio </div>
                          <div style={{color:'yellow', width:'30%', height:'60%', backgroundColor:'#0b71c9'}}> Hey Portfolio </div>
                          <div style={{color:'red', width:'30%', height:'60%', backgroundColor:'silver'}}> Hey Portfolio </div>
                          <div style={{color:'blue', width:'30%', height:'60%', backgroundColor:'red'}}> Hey Portfolio </div>
                          <div style={{color:'yellow', width:'30%', height:'60%', backgroundColor:'darkgreen'}}> Hey Portfolio </div>
                          <div style={{color:'red', width:'30%', height:'60%', backgroundColor:'white'}}> Hey Portfolio </div>


                        </div>
                </div>
            </div>
            
         )
    }
   
}


export default Portfolio;