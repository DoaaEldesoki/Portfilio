import React from "react";
import Progress from './progress';

class Skills extends React.Component {
    constructor() {
        console.log('skills')
        super();
        this.state={
            value:"20%",
            name:"HTML"
        }
    }
    render() {
        return (
            <div>
                <section class="page-section" id="contact">
                    <div class="container">
                        <div class="text-center">
                            <h2 class="section-heading text-uppercase">My skills</h2>
                            <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                        </div>
                        
                        <br></br>
                        <p style={{color:"white"}}>JavaScript</p>
                        <Progress
                        name="JavaScript"
                        value= "50%"
                        />
                        <br></br>

                        <p style={{color:"white"}}>CSS</p>

                        <Progress
                        name="JavaScript"
                        value= "50%"
                        />
                        <br></br>
                        <p style={{color:"white"}}>Angular</p>

                        <Progress
                        name="Angular"
                        value= "60%"
                        />


                        <br></br>
                        
                    </div>
                </section>

            </div>
        )
    }
}
export default Skills;