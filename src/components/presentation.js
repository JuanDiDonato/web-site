import * as React from "react"
import right_arrow from '../assets/images/flecha-derecha.png';
import down_arrow from '../assets/images/abajo.png'
import '../assets/presentation.css'
import moment from 'moment'
import 'moment/locale/es'


const Presentation = () => {

    const [activeIndex, setActiveIndex] = React.useState(0);
    const [scrollDown, setScrollDown] = React.useState();
    const [scrollRight, setScrollRight] = React.useState();
    const [browser, setBrowser] = React.useState(null);
    const [year, setYear] = React.useState();

    React.useEffect(() => {
        const birthday = moment('2001-03-19');
        const today = moment();
        setScrollDown(document.getElementById("presentation_scroll_down"));
        setScrollRight(document.getElementById("presentation_scroll_right"));
        setYear(today.diff(birthday, 'years'));
        setBrowser(window.navigator.userAgent.match(/(Chrome|Firefox|Safari|Edge|IE|Opera)/i)[0])
    }, []);

    const presentation = [
        {
            message: "¿Quien soy? ¡Conoceme!"
        },
        {
            message: "Me llamo Juan, actualmente tengo " + year + " años y soy programador backend. Vivo y estudio en la ciudad de Mar del Plata, Argentina."
        },
        {
            message: "Me recibí de Técnico Maestro Mayor de Obras en la escuela Técnica N°3 de Mar del Plata y actualmente me desempeño como desarrollador backend con Python, Node Js y Java."
        },
        {
            message: "Sigo capacitandome con nuevas tecnologias y servicos para mejorar a nivel tecnico y dedico tiempo a mejorar mis hablidades de comunicacion para coordinar esfuerzos en conjunto con las demas personas de mi equipo actual."
        }
    ];

    const next = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % presentation.length);
    };

    const scroll = () => {
        if (activeIndex === (presentation.length - 1)) {
            scrollRight.classList.add("presentation-hidden")
            scrollDown.classList.remove("presentation-hidden")
            scrollDown.classList.add("presentation-slide")
            window.scrollBy({ 'top': window.innerHeight, 'behavior': 'smooth' })
        } else {
            next();
        }
    };

    const { message } = presentation[activeIndex];


    return (
        <div className="presentation-main" id="presentation-main">
            <div className="presentation-filter">
                <div>
                    <div className="presentation-message" onClick={() => next()}>
                        <h2>{message}</h2>
                    </div>
                    <div id="presentation_scroll_right" className={browser === "Safari" ? "presentation-safari-button" : "presentation-button"}>
                        <button onClick={() => scroll()}><img src={right_arrow} alt="arrow" /></button>
                    </div>
                    <div id="presentation_scroll_down" className={browser === "Safari" ? "presentation-safari-button presentation-hidden" : "presentation-button presentation-hidden"}>
                        <button onClick={() => scroll()}><img src={down_arrow} alt="arrow" /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Presentation