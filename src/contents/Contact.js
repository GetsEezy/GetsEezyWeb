import React, { Component } from 'react';
import Social from '../components/Social';
class Contact extends Component {
    render() {
        return (
            <div className="condiv">
            <h1 className="subtopic">Contact Us</h1>
            <h3 className='widecard' >SAVITA-RMH</h3>
            <h3 className='widecard'>Email  :   hr@getseezy.com</h3>
            <h3 className='widecard'>GetsEezy Solutions LLP</h3>
            <h3 className='widecard'>Bangalore –India</h3>
                      
            {/* <div className="condiv"> */}
            <h1 className="subtopic">Board Members</h1>
            <h3 className='widecard'>Kalpana-Director : GetsEezy Solutions LLP : Bangalore –India</h3>
            <h3 className='widecard'>Swamy-Partner : GetsEezy Solutions LLP : Bangalore –India</h3>
            {/* </div> */}

            
            <Social />
            </div>
            )
        }
    }
    
    export default Contact
    