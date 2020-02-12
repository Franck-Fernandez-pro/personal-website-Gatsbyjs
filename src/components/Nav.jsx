import React, { useState, useEffect } from "react"
import classNames from "classnames"

const Nav = ({ headerBtnLeft, headerBtns }) => {
  const [shrink, setShrink] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  })

  function handleScroll(e) {
    if (window.scrollY && window.scrollY >= 120 && !shrink) {
      setShrink(true)
    }

    if (window.scrollY && window.scrollY < 120 && shrink) {
      setShrink(false)
    }
  }

  return (
    <nav
      className={classNames("navbar navbar-expand-lg navbar-light fixed-top", {
        "navbar-shrink": shrink,
      })}
      id="mainNav"
    >
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
}

export default Nav
