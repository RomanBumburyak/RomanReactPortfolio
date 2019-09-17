import React from 'react';
import ReactDOM from 'react-dom';
import './navBar.css';





class navBar extends React.Component {
    render () {
        return (
   
                <div className="parent-nav">
                   <div className='nav-anchors'>
                        <a className='link-anchor-one'> hi</a>
                        <a className='link-anchor-two'> hi</a>
                        <a className='link-anchor-three'> hi</a>
                   </div> 
                   <div className='top-right-anchors'>
                        <div className='anchor-flex-one'></div> 
                                               
                   </div> 
                 </div>
         )
    }
}


export default navBar;