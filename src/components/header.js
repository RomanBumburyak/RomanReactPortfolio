import React from 'react';
import ReactDOM from 'react-dom';

import './header.css';
import MediaQuery from 'react-responsive';



class Header extends React.Component {
    render () {
        return (
            <div className='parent-header'>
           
        <div className='header-flex-begins'> 
                        <div className='header-flex-one'> </div>
                        <div className='header-flex-two'> </div>
                        <div className='header-flex-three'> </div>
                   
                 </div>
                 {/* <MediaQuery query="(max-width: 1224px)">
                    <h1>You are sized like a tablet or mobile phone though</h1>
                 </MediaQuery> */}
                    
            </div>
                
            
           
         )
    }
   
}


export default Header;