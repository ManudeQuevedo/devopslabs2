import React from 'react';
import '../assets/css/home.css';
import Typewriter from "typewriter-effect";
import { connect } from 'react-redux';
import homeLang from './home.lang.json';
import { Link } from 'react-router-dom';
import Founder from '../assets/images/rafa.jpeg';

const mapStateToProps = state => {
  return {
    lang: state.get('lang').get('value')
  };
};

export default connect(mapStateToProps)(props => {
  return (
    <React.Fragment>
      <div className="base-grid banner-home">
        <div className="content-basic">
          <h1>{homeLang.header.title[props.lang]}</h1>
          <h2>
            <Typewriter
              options={{
                strings: ["DEVOPS", "CLOUD", "AWS"],
                autoStart: true,
                loop: true
              }}
            />
          </h2>
          <div className="call2action">
            <Link to="/cursos" className="btn-bigger btn-solid buttom-banner">
              {homeLang.header.button[props.lang]}
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-home base-grid">
        <div className="content-basic">
          <h1 className="white">
            {homeLang.header.subtitle[props.lang]} <br/>
            {homeLang.header.subtitle2[props.lang]}
          </h1>
          <div className="grid-1">
            <p className="white">{homeLang.header.paragraph1[props.lang]}</p>
          </div>
          <div className="grid-1">
            <p className="white">{homeLang.header.paragraph2[props.lang]}</p>
          </div>
        </div>
      </div>
      <div className="base-grid">
        <div className="content-basic">
          <div className="title">
            <h1 className="blue">{homeLang.steps.title[props.lang]}</h1>
            <p className="black">{homeLang.steps.text1[props.lang]}</p>
            <p className="black">{homeLang.steps.text2[props.lang]}</p>
          </div>
          <Link to="/eventos" className="btn-bigger btn-ghost">
            {homeLang.steps.learn.button[props.lang]}
          </Link>
        </div>
      </div>
      <div className="bg-team learnMore base-grid">
        <div className="content-basic">
          <h1>{homeLang.steps.learn.title[props.lang]}</h1>
          <div className="grid-2">
            <img className="home-founder-image" src={Founder} alt="Rafael Nize" />
            <div>
              <p className="black">{homeLang.steps.learn.founderText1[props.lang]}</p>

              <p className="black">{homeLang.steps.learn.founderText2[props.lang]}</p>

              <p className="black">{homeLang.steps.learn.founderText3[props.lang]}</p>

              <p className="black">{homeLang.steps.learn.founderText4[props.lang]}</p>
              
              <p className="black">{homeLang.steps.learn.founderText5[props.lang]}</p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
});


// background-image: linear-gradient(to right, #f6c25c, #e3ca5c, #ced262, #b7d86d, #9fde7c, #7ede8e, #5adda1, #26dab5, #00d0ca, #00c4d8, #00b6df, #2fa7dd);