import React from "react";

function Contact() {
    return (
        <div classname="container" id="content">            
            <div classname="row">
                <div classname="col">
                    <h1>Contact</h1>
                </div>
            </div>
            
            <div classname="row">
                <div classname="col">
                    <form action="https://formspree.io/f/xrgoqyon" method="POST">
                        <div classname="form-group">
                        <label name="Your Name">Your Name</label>
                        <input type="text" classname="form-control" id="name" placeholder=""/>
                        </div>

                        <div classname="form-group">
                        <label name="Email address">Email address</label>
                        <input type="email" classname="form-control" id="inputEmail" placeholder="" aria-describedby="emailHelp"/>
                        </div>

                        <div classname="form-group">
                            <label name="Message">Message</label>
                            <textarea classname="form-control" id="message" placeholder="" rows="4"></textarea>
                        </div>
                        <button type="submit" classname="btn btn-primary" id="submit">Submit</button>
                    </form>                    
                </div>   
            </div>
        </div>
    );
}

export default Contact;