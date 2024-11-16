import * as React from "react"
import "../assets/about.css"
import down_arrow from '../assets/images/abajo.png'

const Objectives = () => {
    return (
        <div className="about-main">
            <div className="about-filter">
                <div className="about-children">
                    <div>
                        <h2 className="about-text-header">
                            Metas
                        </h2>
                        <h3>
                        Quiero seguir creciendo como desarrollador, especializándome en Python, JavaScript y Java. 
                        Busco profundizar en buenas prácticas, seguridad y eficiencia en el código. Me interesa AWS y diferentes arquitecturas de software, 
                        y explorar áreas como IA y ciberseguridad.

                        </h3>
                    </div>
                    <div id="scroll_down" className="hobbies-button">
                        <button onClick={() => window.scrollBy({ 'top': window.innerHeight , 'behavior': 'smooth' })}><img src={down_arrow} alt="arrow" /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Objectives