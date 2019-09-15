import React from 'react';
import ReactDOM from 'react-dom';
import Particles from 'react-particles-js';
import './header.css';

const particleOpt = {
    particles: {
      number: {
        value: 160,
        density:{
          enable: true,
          value_area:400,
        }
      }
    }
}


class Header extends React.Component {
    render () {
        return (
<div className='parent-header'>
           <Particles className='under-nav-particles' 
               params= {particleOpt}
           />
        <div className='header-flex-begins'> 
                     <div className='header-flex-one'>
                    </div>
                    <div className='header-flex-two'>
                    </div>
        </div>
</div>
                
            
           
         )
    }
   
}


export default Header;