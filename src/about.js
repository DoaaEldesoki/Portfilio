import React from "react";
import MyPDF from './Colorcard-hex_ffc800-www.colorbook.io.png';


class About extends React.Component {
    constructor() {
        console.log('about')
        super();
    }
    render() {
        return (
            <div>
                <section class="page-section" id="about">
                    <div class="container">
                        <div class="text-center">
                            <h2 class="section-heading text-uppercase">About Me</h2>
                            <h3 class="section-subheading text-muted">it is a brief of Curriculum Vitae .</h3>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). </p>
                            <a className="btn btn-primary btn-xl text-uppercase" href={MyPDF} download="./Colorcard-hex_ffc800-www.colorbook.io.png"> Download Resume </a> 
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
export default About;