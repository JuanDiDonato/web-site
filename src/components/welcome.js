import * as React from "react";
import '../assets/welcome.css';

import arrrow from '../assets/images/abajo.png';
import telegram from '../assets/images/telegram.png'
import git from '../assets/images/git.png'
import linkedin from '../assets/images/linkedin.png'


const WelcomeMessage = () => {

    return (
        <div className="welcome-main">
            <div className="filter">
                <div className="welcome-message-markup">
                    <p className="my-name">
                        Juan Di Donato
                    </p>
                    <p className="my-profession">
                        Software Developer
                    </p>
                    <div className="footer-children">
                        <div className="footer-children-element">
                            <div className="footer-element">
                                <img src={telegram} alt="telegram" />
                                <a href="https://t.me/Juan_didonato" target="null">Telegram</a>
                            </div>
                        </div>
                        <div className="footer-children-element">
                            <div className="footer-element">
                                <img src={linkedin} alt="linkedin" />
                                <a href="https://www.linkedin.com/in/juandidonato/" target="null">Linkedin</a>
                            </div>
                        </div>
                        <div className="footer-children-element">
                            <div className="footer-element">
                                <img src={git} alt="github" />
                                <a href="https://github.com/JuanDiDonato" target="null">GitHub</a>
                            </div>
                        </div>
                    </div>
                    <div className="buttons">
                        <button onClick={() => window.scrollBy({ 'top': window.innerHeight, 'behavior': 'smooth' })}><img src={arrrow} alt="arrow" /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WelcomeMessage