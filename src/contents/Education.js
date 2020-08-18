import React, { Component } from 'react';
import Widecard from '../components/Widecard';

class Education extends Component {
    render() {
        return (
            <div className="condiv">
            <h1 className="subtopic">My Team</h1>
            <div>
            <Widecard title="30 Years Exp" where="Educational Domain" from="1980" to="Present"/>
            <Widecard title="15 Years Exp" where="Retail and E-commerance" from="2005" to="Present"/>
            </div>
            <div>
            <Widecard title="15 Years Exp" where="Peoplesoft-HRMS" from="2005" to="Present"/>
            <Widecard title="10 Years Exp" where="HR-RM" from="2007" to="Present"/>
            </div>
            </div>
            )
        }
    }
    
export default Education
    