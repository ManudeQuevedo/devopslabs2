import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import navLang from "./navbar.lang.json";
import './style.css';

const checkActive = (match, location) => {
  if (!location) return false;
  const { pathname } = location;
  return pathname === '/';
};

const mapStateToProps = state => {
  return {
    lang: state.get("lang").get("value")
  };
};



export default connect(mapStateToProps)(props => {
  const [isTop, setIsTop] = useState(true);
  document.addEventListener('scroll', () => {
    if ((window.scrollY === 0) !== isTop) {
      setIsTop(window.scrollY === 0);
    }
  });

  useEffect(() => {
    setIsTop(window.scrollY === 0);
  }, []);

  useEffect(() => {
    const menu = document.getElementById('menu-responsive');
    const menuBurger = document.getElementById('burger-buttom');
    menuBurger.addEventListener(
      'click',
      e => {
        let isActive = menuBurger.classList.contains('is-active');
        if (isActive) {
          menuBurger.classList.remove('is-active');
          menu.classList.remove('is-active');
        } else {
          menuBurger.classList.add('is-active');
          menu.classList.add('is-active');
        }
      },
      []
    );

    menu.addEventListener('click', e => {
      menuBurger.classList.remove('is-active');
      menu.classList.remove('is-active');
    });
  }, []);

  return (
    <React.Fragment>
      <nav className={`top-menu ${isTop ? "" : "no-top"}`}>
        <div className="top-menu-wrapper">
          <Link to="/">
            <div className="logo" />
          </Link>
          <div className="hamburger--3dxy" id="burger-buttom">
            <span className="hamburger-box">
              <span className="hamburger-inner" />
            </span>
          </div>
          <div className="menuItems">
            <NavLink to="/">{navLang.menu.home[props.lang]}</NavLink>
            <NavLink to="/cursos">
              {navLang.menu.courses[props.lang]}
            </NavLink>
            <NavLink to="/eventos">
              {navLang.menu.events[props.lang]}
            </NavLink>
          </div>
        </div>
        <div className="menuItems-responsive" id="menu-responsive">
          <div>
            <div className="category">Menú</div>
            <div>
              <NavLink to="/" isActive={checkActive}>
                Inicio
              </NavLink>
              <NavLink to="/cursos">
                Cursos
              </NavLink>
              <NavLink to="/eventos">
                Eventos
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
});

/*

<NavLink to="/products/verified" className="item">
  <div className="imagen">
    <div
      style={{
        backgroundPosition: '-280px 0'
      }}
    />
  </div>
  <div className="info">
    <h4>Verified SMS</h4>
    <div>
      Strengthen your brand with Trust and security for mobile
      users.
    </div>
  </div>
</NavLink>
                  
<NavLink to="/products/bots" className="item">
  <div className="imagen">
    <div />
  </div>
  <div className="info">
    <h4>Bots</h4>
    <div>
      Automatize interaction and bring cost savings into your
      company. Ideal for customer support and sales
    </div>
  </div>
</NavLink>
*/
