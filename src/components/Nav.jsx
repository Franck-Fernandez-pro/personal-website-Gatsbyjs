import React from "react"

// "navbar-shrink" HARD CODED --> only on scroll
const Nav = ({ headerBtnLeft, headerBtns }) => (
  <nav className="navbar navbar-expand-lg navbar-light fixed-top navbar-shrink" id="mainNav">
    <div className="container">
      <a className="navbar-brand js-scroll-trigger" href="#page-top">
        {headerBtnLeft}
      </a>
      <button
        className="navbar-toggler navbar-toggler-right"
        type="button"
        data-toggle="collapse"
        data-target="#navbarResponsive"
        aria-controls="navbarResponsive"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i className="fa fa-bars"></i>
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav text-uppercase ml-auto">
          {headerBtns.map(({ text, href }, key) => (
            <li key={key} className="nav-item">
              <a className="nav-link js-scroll-trigger" href={href}>
                {text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </nav>
)

export default Nav
