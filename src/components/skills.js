import * as React from "react";

import flask from '../assets/images/flask.png';
import python from '../assets/images/python.png';
import js from '../assets/images/javascript.png';
import react from '../assets/images/react.png';
import sql from '../assets/images/postgres.png';
import git from '../assets/images/git.png';
import tux from '../assets/images/tux.png';
import node from '../assets/images/node.png';
import django from '../assets/images/django.png';
import docker from '../assets/images/docker.png';
import mongodb from '../assets/images/mongodb.png';
import java from '../assets/images/java.png';
import spring from '../assets/images/spring.png';
import aws from '../assets/images/aws.png';
import right_arrow from '../assets/images/flecha-derecha.png';
import up_arrow from '../assets/images/arriba.png'

import '../assets/skills.css'

const Skills = () => {

    const [activeIndex, setActiveIndex] = React.useState(0);
    const [scrollDown, setScrollDown] = React.useState()
    const [scrollRight, setScrollRight] = React.useState()

    React.useEffect(() => {
        setScrollDown(document.getElementById("skills_scroll_down"));
        setScrollRight(document.getElementById("skills_scroll_right"));
    }, []);

    const skills = [
        {
            title: 'Javascript',
            description: 'Empecé con funciones básicas en mi tercer lenguaje. Luego, lo apliqué en proyectos más complejos de backend con Node.js, mejorando mis habilidades gradualmente.',
            image: js
        },
        {
            title: 'Python',
            description: 'Python me resulta muy intuitivo. Su sintaxis sencilla me permitió aprenderlo rápido y aplicarlo en diversos proyectos.',
            image: python
        },
        {
            title: 'React js',
            description: 'Actualmente uso React JS para proyectos web básicos. Quiero mejorar mis habilidades en frontend y explorar más a fondo esta librería.',
            image: react
        },
        {
            title: 'DJango',
            description: 'Empecé a usar Django por su buena reputación y no me decepcionó. Su gran cantidad de herramientas preinstaladas ahorran mucho tiempo en desarrollo.',
            image: django
        },
        {
            title: 'Node Js',
            description: 'Soy desarrollador backend con experiencia en Node.js y Express. Utilizo estas herramientas para construir APIs y aplicaciones web.',
            image: node
        },
        {
            title: 'Postgres SQL',
            description: 'Manejo bases de datos SQL (PostgreSQL, MySql) y herramientas de gestión (Liquibase) para proyectos de diversa complejidad.',
            image: sql
        },
        {
            title: 'Mongo DB',
            description: 'Ideal para proyectos ágiles, esta herramienta me permitió ganar velocidad y simplificar procesos.',
            image: mongodb
        },
        {
            title: 'Docket',
            description: 'Implementar servicios en AWS con Docker fue increíblemente sencillo y rápido. ¡Sorprendente lo fácil que es subir proyectos en contenedores!',
            image: docker
        },
        {
            title: 'Linux',
            description: 'Soy usuario de Linux desde hace tiempo. He probado muchas distros (Ubuntu, Debian, etc.) y actualmente uso Arch Linux.',
            image: tux
        },
        {
            title: 'Git',
            description: 'Desde que domino Git y GitHub, mi flujo de trabajo es mucho más eficiente. Uso Git para versionar mi código y GitHub para alojar mis proyectos. Además, aprovecho al máximo las acciones y validaciones de GitHub para automatizar despliegues y asegurar la calidad del código.',
            image: git
        },
        {
            title: 'Flask',
            description: 'Flask: ideal para crear APIs REST en Python. Su simplicidad lo hace perfecto para iniciar y desarrollar microservicios rápidamente.',
            image: flask
        },
        {
            title: 'Java',
            description: 'Desde que estoy estudiando simpre me dijieron que si puedo aprender java puedo aprender cualquier cosa. Por curiosidad busque acerca del lenguaje, y me encanto. Hoy en dia utilizo Java en mi vida diaria y me siento comodo con el.',
            image: java
        },
        {
            title: 'Spring',
            description: 'Experiencia sólida en desarrollo de APIs RESTful con Spring Boot. Creación de módulos independientes (ej: seguridad) reutilizables en diversos proyectos. Profundo conocimiento en beans y JPA.',
            image: spring
        },
        {
            title: 'Aws',
            description: 'Experiencia en AWS con Python, Node.js, Docker y AWS SAM. Despliegues automatizados con GitHub Actions. Manejo de servicios como DynamoDB, S3, Step Functions, API Gateway, CloudFormation y Route53.',
            image: aws
        },
    ]

    const next = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % skills.length);
    };

    const scroll = () => {
        if (activeIndex === (skills.length - 1)) {
            scrollRight.classList.add("skills-hidden");
            scrollDown.classList.remove("skills-hidden");
            scrollDown.classList.add("skills-slide");
            window.scrollBy({ 'top': ((0 - window.innerHeight  * 6)), 'behavior': 'smooth' });
        } else {
            next();
        }
    };

    const { title, description, image } = skills[activeIndex]

    return (
        <div className="skills-main">
            <div className="skills-filter">
                <div className="skills-element" onClick={() => next()}>
                    <div>
                        <div>
                            <img src={image} alt="JavaScript" />
                        </div>
                        <div>
                            <h2>{title}</h2>
                        </div>
                    </div>
                    <div>
                        <h3>{description}</h3>
                    </div>
                </div>
            </div>
            <div id="skills_scroll_right" className="skills-button">
                <button onClick={() => scroll()}><img src={right_arrow} alt="arrow" /></button>
            </div>
            <div id="skills_scroll_down" className="skills-button skills-hidden">
                <button onClick={() => scroll()}><img src={up_arrow} alt="arrow" /></button>
            </div>
        </div>
    )
}

export default Skills