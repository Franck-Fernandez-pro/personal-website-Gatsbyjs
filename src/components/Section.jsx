import React from "react"

const Section = ({ id, bgLight, title, children }) => {
  return (
    <section id={id} className={bgLight && "bg-light"}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading text-uppercase">{title}</h2>
            <br />
            <br />
          </div>
        </div>

        <div className="row text-center justify-content-center">
          {children && children}
        </div>
      </div>
    </section>
  )
}

export default Section
