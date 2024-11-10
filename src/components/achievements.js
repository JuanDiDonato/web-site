import * as React from "react"
import "../assets/achievements.css"
import right_arrow from '../assets/images/flecha-derecha.png';
import down_arrow from '../assets/images/abajo.png'


const Achievements = () => {

    const [activeIndex, setActiveIndex] = React.useState(0);
    const [scrollDown, setScrollDown] = React.useState()
    const [scrollRight, setScrollRight] = React.useState()

    React.useEffect(() => {
        setScrollDown(document.getElementById("achievements_scroll_down"));
        setScrollRight(document.getElementById("achievements_scroll_right"));
    }, []);

    const achievements = [
        {
            message: "Conseguir adaptarme a mi equipo de trabajo, porder comunicar mis ideas y colaborar para crear una plataforma solida lo considero un logro en si mismo."
        },
        {
            message: "A nivel tecnico, pude aportar de mis habilidades para migrar varios servicios y convertirlos en micro-servicos, fomentando el uso de aplicaciones SAM (aws) y usando tecnologia serverless como lambdas y step funcions, para ahorrar en tiempo y coste de ejecucion."
        },
        {
            message: "Tambien colabore para crear una plataforma basada en micro servicios que se aleje lo mas posible de un 'monolito de codigo', creando codigo que siga buenas practicas, aplicando los principios SOLID, y escribiendo muchos test unitarios y de integracion para facilitar el testeo ante los nuevos releases que hacemos. "
        },
        {
            message: "Ayude e incentive en la documentacion del codigo, para que sea mas facil desplegar y trabajar en proyectos ya existentes, y cree actions en github para poder deployar de forma rapida las nuevas releases tanto en beta como en produccion."
        }
    ];

    const next = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % achievements.length);
    };

    const scroll = () => {
        if (activeIndex === (achievements.length - 1)) {
            scrollRight.classList.add("achievements-hidden")
            scrollDown.classList.remove("achievements-hidden")
            scrollDown.classList.add("achievements-slide")
            window.scrollBy({ 'top': window.innerHeight, 'behavior': 'smooth' })
        } else {
            next();
        }
    };

    const { message } = achievements[activeIndex];
    return (
        <div className="achievements-main">
            <div className="achievements-filter">
                <div className="achievements-children">
                    <div >
                        <h2 className="achievements-text-header">
                            Algunos logros
                        </h2>
                        <h3>
                            {message}
                        </h3>
                    </div>
                    <div id="achievements_scroll_right" className="achievements-button">
                        <button onClick={() => scroll()}><img src={right_arrow} alt="arrow" /></button>
                    </div>
                    <div id="achievements_scroll_down" className="achievements-button achievements-hidden">
                        <button onClick={() => scroll()}><img src={down_arrow} alt="arrow" /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Achievements