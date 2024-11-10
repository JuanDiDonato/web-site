import * as React from "react";
import '../assets/capabilities.css';
import right_arrow from '../assets/images/flecha-derecha.png';
import down_arrow from '../assets/images/abajo.png'

const Aptitudes = () => {

  const [activeIndex, setActiveIndex] = React.useState(0);
  const [scrollDown, setScrollDown] = React.useState()
  const [scrollRight, setScrollRight] = React.useState()

  React.useEffect(() => {
    setScrollDown(document.getElementById("capabilities_scroll_down"));
    setScrollRight(document.getElementById("capabilities_scroll_right"));
  }, []);

  const capabilities = [
    {
      title: 'Gestión de tiempos',
      description: 'La organización es un pilar fundamental en mi metodología de trabajo. Antes de comenzar un proyecto, llevo a cabo un análisis exhaustivo, diseño diagramas de flujo para visualizar el proceso y establezco un plan de acción detallado.',
    },
    {
      title: 'Proactivo',
      description: 'Me caracterizo por buscar soluciones innovadoras y alternativas viables ante cualquier desafío, con el objetivo de optimizar los resultados tanto a nivel individual como colectivo.',
    },
    {
      title: 'Trabajo en Equipo',
      description: 'Mi pasión por la programación me lleva a buscar constantemente nuevos desafíos y a colaborar con profesionales comprometidos. Valoro enormemente la oportunidad de trabajar en equipo, aplicando metodologías ágiles para desarrollar productos de alta calidad.',
    },
    {
      title: 'Iniciativa',
      description: 'Soy un apasionado de la tecnología y la innovación. Me motiva constantemente la búsqueda de soluciones a los desafíos cotidianos que enfrentamos en el entorno digital. Estoy comprometido con el aprendizaje continuo y dispuesto a colaborar en proyectos que generen un impacto positivo.',
    },
    {
      title: 'Motivación',
      description: '¡Estoy motivado!. La programación me encanta, hay mucho por hacer y por aprender. Quiero expandir mis horizontes, hacer proyectos mas grandes y mejores, y poder contribuir con el desarrollo de nuevas aplicaciones y las nuevas tecnologías.',
    },
  ];

  const next = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % capabilities.length);
  };

  const scroll = () => {
    if (activeIndex === (capabilities.length - 1)) {
      scrollRight.classList.add("capabilities-hidden");
      scrollDown.classList.remove("capabilities-hidden");
      scrollDown.classList.add("capabilities-slide");
      window.scrollBy({ 'top': window.innerHeight, 'behavior': 'smooth' });
    } else {
      next();
    }
  };

  const { title, description } = capabilities[activeIndex];

  return (
    <div className="capabilities-main">
      <div className="capabilities-filter">
        <div onClick={() => next()}>
          <div className="capabilities-message">
            <h2>{title}</h2>
            <h3>{description}</h3>
          </div>
          <div id="capabilities_scroll_right" className="capabilities-button">
            <button onClick={() => scroll()}><img src={right_arrow} alt="arrow" /></button>
          </div>
          <div id="capabilities_scroll_down" className="capabilities-button capabilities-hidden">
            <button onClick={() => scroll()}><img src={down_arrow} alt="arrow" /></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aptitudes;