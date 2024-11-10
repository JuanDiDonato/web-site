import * as React from "react"

import telegram from '../assets/images/telegram.png'
import git from '../assets/images/git.png'
import linkedin from '../assets/images/linkedin.png'

import '../assets/footer.css'

// markup
const Footer = () => {
    return (
        <div className="footer-main">
            <div className="footer-filter">
                <div className="footer-children">
                    <div className="footer-children-element">
                        <img src={telegram} alt="telegram" />
                        <a href="https://t.me/Juan_didonato" target="null">Telegram</a>
                    </div>
                    <div className="footer-children-element">
                        <img src={linkedin} alt="linkedin" />
                        <a href="https://www.linkedin.com/in/juandidonato/" target="null">Linkedin</a>
                    </div>
                    <div className="footer-children-element">
                        <img src={git} alt="github" />
                        <a href="https://github.com/JuanDiDonato" target="null">GitHub</a>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Footer