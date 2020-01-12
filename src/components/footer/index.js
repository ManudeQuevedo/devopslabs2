import React from 'react';
import { connect } from "react-redux";
import footerLang from './footer.lang.json';
import './style.css';

const mapStateToProps = state => {
  return {
    lang: state.get("lang").get("value")
  };
};

export default connect(mapStateToProps)(props => {
  return (
    <React.Fragment>
      <div className="footer-bottom base-grid">
        <div className="content-basic">
          <div>
            <div>
              © {new Date().getFullYear()} -{" "}
              {footerLang.header.rights[props.lang]}
            </div>
          </div>
          <div className="footer-copyrights-right">
            {footerLang.header.developed[props.lang]}&ensp;
            <a href="https://www.manudequevedo.com" target="_blank" rel="noopener noreferrer">
              Manu de Quevedo
            </a>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
});
