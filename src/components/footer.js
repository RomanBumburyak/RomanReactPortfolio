import React from 'react';
import ReactDOM from 'react-dom';


class Footer extends React.Component {
    render () {
        return (
            <div className="main footer parent">
                <div className="footer control" style={{height:'300px', backgroundColor:'#333'}}>
                     <h1 style={{color:'orange', display:'flex', justifyContent:'center'}}> Hey Footer </h1>

                  </div>
            </div>
         )
    }
   
}


export default Footer;