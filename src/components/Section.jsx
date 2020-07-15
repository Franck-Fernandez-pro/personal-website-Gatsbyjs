import React from "react"

const Section = ({ id, bgLight, title, content }) => {
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

        <div className="row text-center">
          {content &&
            content.map(
              ({ frontmatter: { iconColor, icon, title, content } }, key) => (
                <div key={key} className="col-md-4">
                  <span className="fa-stack fa-4x">
                    <i className={`fa fa-circle fa-stack-2x ${iconColor}`}></i>
                    <i className={`fa ${icon} fa-stack-1x fa-inverse`}></i>
                  </span>
                  <h4 className="service-heading">{title}</h4>
                  <p className="text-muted">{content}</p>
                </div>
              )
            )}
        </div>
      </div>
    </section>
  )
}

export default Section
