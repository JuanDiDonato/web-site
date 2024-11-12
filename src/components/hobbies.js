import * as React from "react"
import "../assets/hobbies.css"
import down_arrow from '../assets/images/abajo.png'


const Hobbies = () => {

    return (
        <div className="hobbies-main">
            <div className="hobbies-filter">
                <div className="hobbies-children">
                    <div >
                        <h2 className="hobbies-text-header">
                            Hobbies
                        </h2>
                        <h3>
                            En mis tiempos libres me gusta dibujar, estoy estudiando ilustracion para hacer diseños de personaje.
                            Tambien me gusta entrenar, salir a correr y andar en bici.
                            Me gusta leer libros y mangas, asi como tambien ver anime (me gusta la tematica de los 80s/ 90s) y jugar video juegos casuales
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

export default Hobbies