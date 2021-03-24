import React from "react";
import ProfilePic from "./profile.jpg";
import Resume from "./AlexBertuzziResume.pdf"

function AboutMe() {
    return (
        <div classname="container" id="content">            
            <div classname="row">                
                <div classname="col">
                    <h1>About Me</h1>
                </div>
            </div>
            
            <div classname="row">
                <div classname="col">                    
                    <img src={ProfilePic} classname="rounded float-left" id="aboutme-img" alt="Profile Pic"/>      

                    <p>Hello, my name is Alex Bertuzzi. I have just started my coding journey and so far I think its going pretty well. I made this website with bootstrap utilizing html, css, React.js, Formspree (for contact form), and Screencastify (for Project Previews on the Portfolio page).</p> 
                    <p>To date I have learned to use HTML5, CSS3, Bootstrap, UIKIT, Javascript, Jquery, AJAX, Node.js, Express, Handlebars, MySQL, MongoDB, MongoDB Atlas, RoboT3, React.js, and PWA's.</p>
                    <p>Please take a look around and let me know what you think by using the form on the contact page.</p>
                    <p>Phone Number: 361-728-4894</p>
                    <p>Email: alexmichaelbertuzzi@yahoo.com</p>
                    <p><a href={Resume}>View my Resume Here</a></p>
                </div>
            </div>
        </div>
    );

};

export default AboutMe;