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
               
                <p className="about-class-parent">
                I am a young and ambitious person who is passionate about coding. I am diligent, humble and a great team player. I love challenges and I see obstacles as a way to better myself.
                      My goal is to convert real-life issues into software solutions. 
    
                     </p>
                     <Particles className='under-nav-particles' 
               params= {particleOpt}
           />

                  
              


                

                      


                  
                   

                    
                 </div>
                </div>

         )
    }
   
}


export default Information;