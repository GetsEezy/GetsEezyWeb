import React, { Component } from 'react'

class Skills extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            'myskills':[
                        'Internships:Online/Offline Programs,Tech stacks/Soft Skills up to the bench mark',
                        'ERP System: Retail/Ecommerce/Payroll',
                        'Software, Solutions & Services:On Demand Projects developments with trending Tech Stacks',
                        'UI/UX Web Design',
                        'Digital Transformation',
                        'SME Finance Specialists',
                        'Corporate Videos and Advertising',
                        'Staff Augmentation: Technology resource fulfill to Industries/Empowering Talent/HR Solutions'
                       ]
        };
    }

    render() {
        return (
            <div className="condiv skills">
            <h1 className="subtopic">Services</h1>
            <ul>
            {this.state.myskills.map((value)=>{
                return <li className='widecard'><b>{value}</b></li>
            })}
            </ul>
            </div>
            )
        }
    }
    
    export default Skills
    