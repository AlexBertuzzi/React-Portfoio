import React from "react";

function Header() {
    return (
        <header>
            <div>
                <nav classname="navbar navbar-expand-lg navbar-light bg-light" id="nav">

                    <a classname="navbar-brand" id="nav-brand" href="/">Alex Bertuzzi</a>
                
                    <button classname="navbar-toggler" id="button" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation"> 
                    <span classname="navbar-toggler-icon"></span>
                    </button>
                    
                    <div classname="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul classname="navbar-nav ml-auto">                        
                            <li classname="nav-item">
                                <a classname="nav-link" id="not-active" href="/contact" alt="Contact">Contact</a>
                            </li>           

                            <li classname="nav-item">
                                <a classname="nav-link"  id="not-active" href="/portfolio" alt="Portfolio">Portfolio</a>
                            </li>

                            <li classname="nav-item">
                            <a classname="nav-link" id="not-active" href="/" alt="About Me">About Me</a>
                            </li>            
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    );

}

export default Header;