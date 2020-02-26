import React, { useState, useEffect } from "react"
import classNames from "classnames"

const Nav = ({ headerBtnLeft, headerBtns }) => {
  const [shrink, setShrink] = useState(false)
  const [openResponsiveNavbar, setOpenResponsiveNavbar] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  })

  function toggleNavbarResponsive(e) {
    setOpenResponsiveNavbar(!openResponsiveNavbar)
  }
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
          onClick={toggleNavbarResponsive}
        >
          <i className="fa fa-bars"></i>
        </button>
        <div
          id="navbarResponsive"
          className={classNames("collapse navbar-collapse", {
            show: openResponsiveNavbar,
          })}
        >
          <ul className="navbar-nav text-uppercase ml-auto">
            {headerBtns.map(({ text, href }, key) => (
              <li key={key} className="nav-item">
                <a
                  className="nav-link js-scroll-trigger"
                  href={href}
                  onClick={toggleNavbarResponsive}
                >
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
