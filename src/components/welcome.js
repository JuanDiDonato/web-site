import * as React from "react";
import '../assets/welcome.css';

import arrrow from '../assets/images/abajo.png';


const WelcomeMessage = () => {
    return (
        <div className="welcome-main">
            <div className="filter">
                <div className="welcome-message-markup">
                    <h1>
                        Juan Di Donato
                    </h1>
                    <h3>
                        Software Developer
                    </h3>
                    <div className="buttons">
                        <button onClick={() => window.scrollBy({ 'top': window.innerHeight, 'behavior': 'smooth' })}><img src={arrrow} alt="arrow" /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WelcomeMessage