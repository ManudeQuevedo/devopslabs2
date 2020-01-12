import React from 'react';
import { connect } from "react-redux";
import jobLang from "./events.lang.json";
import Classroom from "../assets/images/classroom.svg";
import Search from "../assets/images/search.svg";
import Resume from '../assets/images/resume.svg';

const mapStateToProps = state => {
  return {
    lang: state.get("lang").get("value")
  };
};

export default connect(mapStateToProps)(props => {
  return (
    <React.Fragment>
      <div className="banner">
        <div className="wrapper">
          <div className="info">
            <h1 className="black">{jobLang.header.title[props.lang]}</h1>
            <p className="text">{jobLang.header.subtitle[props.lang]}</p>
          </div>
        </div>
      </div>
      <div className="bg-events base-grid">
        <div className="content-basic">
          <div className="title">
            <h1>{jobLang.header.title2[props.lang]}</h1>
          </div>
          <div className="grid-3">
            <div className="card-a">
              <div className="number">1</div>
              <div className="image">
                <img src={Classroom} alt="Classroom Icon"/>
              </div>
              <h3>{jobLang.header.reason1[props.lang]}</h3>
              <div className="text">
                {jobLang.header.textReason1[props.lang]}
              </div>
            </div>
            <div className="card-a">
              <div className="number">2</div>
              <div className="image">
                <img src={Resume} alt="Classroom Icon" />  
              </div>
              <h3>{jobLang.header.reason2[props.lang]}</h3>
              <div className="text">
                {jobLang.header.textReason2[props.lang]}
              </div>
            </div>
            <div className="card-a">
              <div className="number">3</div>
              <div className="image">
                <img src={Search} alt="Classroom Icon" />
              </div>
              <h3>{jobLang.header.reason3[props.lang]}</h3>
              <div className="text">
                {jobLang.header.textReason3[props.lang]}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="base-grid">
        <div className="content-basic">
          <div className="grid-1">
            <div className="readyToStart">
              <h1 className="black">Checa nuestros eventos disponibles</h1>
              <a
                href="https://www.eventbrite.com/e/curso-en-devops-actualizado-tickets-89128111581"
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-bigger btn-solid-events"
              >
                Ver eventos
              </a>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
});
