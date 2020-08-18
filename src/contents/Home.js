import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';
/*import profilepic from '../img/naafi_photo.png'; */
import profilepic from '../img/getseezyLogo.png'; 
import Social from '../components/Social'



class Home extends Component {
    render() {
        return (
            <div className="condiv home">
            <img src={profilepic} className="profilepic"></img>
            <ReactTypingEffect className="typingeffect" text={['GetsEezy  is established in 2019 with vision to help the society','Adapt to new technologies to provide software solutions to the business enterprise']} speed={100} eraseDelay={700}/>
            <Social />
            </div>
            )
        }
    }
    
    export default Home
    