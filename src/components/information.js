import React from 'react';
import ReactDOM from 'react-dom';
import Particles from 'react-particles-js';


const particleOpt = {
    particles: {
      number: {
        value: 160,
        density:{
          enable: true,
          value_area:500,
        }
      }
    }
}


class Information extends React.Component {
    render () {
        return (
            
                <div className="parent-Info"> 
                    
                <div className="main-info-div"style={{color:'gold', height:'300px', backgroundColor:'#333'}}>
                      <p>
                      <Particles className='under-nav-particles'
               params= {particleOpt}
           />

                

                      


                    </p>
                   

                    
                 </div>
                </div>

         )
    }
   
}


export default Information;