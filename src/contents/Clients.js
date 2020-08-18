import React, { Component } from 'react';
// import profilepic from '../img/getseezyLogo.png'; 
import Infisuite from '../img/Infisuite.png'; 
import roundsqr from '../img/roundsqr.png';
import fiveY from '../img/5Y.png';




class Clients extends Component {
    render() {
        return (
            <div className="condiv home">
            {/* <img src={profilepic} className="profilepic"></img> */}
            <img src={Infisuite} className="profilepic"></img>
            <img src={fiveY} className="profilepicfiveY"></img><br/>
            <img src={roundsqr} className="profilepicRS"></img>
            
            <h2 className="subtopicorange">D-Square Tech Labs</h2>
            <h2 className="subtopicblue">V2R Tele Communications</h2>
            <h2 className="subtopicgreen">8Square SME Finance</h2>
            <h2 className="subtopicorange">AI Soft IT Solutions</h2>
          
            </div>
            )
        }
    }
    
export default Clients