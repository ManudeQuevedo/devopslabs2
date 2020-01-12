import React from 'react';
import { connect } from "react-redux";
import aboutLang from "./courses.lang.json";
import YouTube from "react-youtube";

const mapStateToProps = state => {
  return {
    lang: state.get("lang").get("value")
  };
};

const opts = {
  height: "410",
  width: "660",
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 1
  }
};

export default connect(mapStateToProps)(props => {
  return (
    <React.Fragment>
      <div className="base-grid">
        <div className="content-basic">
          <div className="grid-2">
            <div>
              <h1 className="blue">{aboutLang.header.title[props.lang]}</h1>
              <p className="black">{aboutLang.header.text1[props.lang]}</p>

              <p className="black">{aboutLang.header.text2[props.lang]}</p>

              <p className="black">{aboutLang.header.text3[props.lang]}</p>

              <p className="black">{aboutLang.header.text4[props.lang]}</p>

              <p className="black">{aboutLang.header.text5[props.lang]}</p>

              <p className="black">{aboutLang.header.text6[props.lang]}</p>
            </div>
            <div className="img" />
          </div>
        </div>
      </div>
      <div className="bg-courses base-grid">
        <div className="content-basic">
          <h1 className="white">TEMARIO</h1>
          <div className="grid-2">
            <div className="video-container">
              <YouTube className="courses-youtube" opts={opts} />
            </div>
            <div>
              <ul className="course-syllabus">
                <li className="white">Definición de Devops y su historia</li>
                <li className="white">¿Porqué Devops?</li>
                <li className="white">
                  Tendencias en el mercado de Devops (prácticas, herramientas
                  y casos)
                  </li>
                <li className="white">Conocimientos necesarios de un ingeniero Devops</li>
                <li className="white">Introducción a la computación en la nube (AWS)</li>
                <li className="white">Qué es un pipeline y casos de uso</li>
                <li className="white">
                  Entrega Continua, Despliegue Continuo e Integración Continua
                  </li>
                <li className="white">Casos de uso en el mercado</li>
                <li className="white">
                  Control de versiones y su uso en Devops con ejercicios
                  prácticos
                  </li>
                <li className="white">Gerenciamento de configuración usando Ansible</li>
                <li className="white">
                  Jenkins y otras herramientas usadas en CI (creación de
                  Pipeline, Pipeline As A Code, etc)
                  </li>
                <li className="white">
                  Ejercicios prácticos usando Jenkins con CI, Continuous
                  Delivery
                  </li>
                <li className="white">Continuous Integration con el uso de Maven y Git</li>
                <li className="white">Despliegue continuo usando contenedores Docker</li>
                <li className="white">Continuous Monitoring con Nagios, Icinga</li>
                <li className="white">Servicios en el entorno AWS usados en Devops</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
});
