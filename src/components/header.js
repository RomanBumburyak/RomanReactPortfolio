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
            <div className='particles-div'>
                <div className='banner-animated'>
                    <h1>Roman Bumburyak. Focused on Structure and Scalability.</h1>
                </div>

                <Particles className='under-nav-particles' 
                params= {particleOpt}
                />
            </div>
           
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