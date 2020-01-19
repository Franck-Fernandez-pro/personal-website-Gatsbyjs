import React, { Fragment } from "react"

const SectionCircle = ({ id, bgLight, title, content }) => {
  const renderText = ({ title, content }) => (
    <div className="col-md-6 col-sm-12 mt-5 pt-4">
      <h4 className="service-heading text-center">{title}</h4>
      <p className="text-muted text-center">{content}</p>
    </div>
  )

  const renderCircles = circles =>
    circles.map((circle, key) => (
      <div key={key} className={circle.col}>
        <div className={circle.style}>
          <span className="progress-left">
            <span className="progress-bar"></span>
          </span>
          <span className="progress-right">
            <span className="progress-bar"></span>
          </span>
          <div className="progress-value">{circle.title}</div>
        </div>
      </div>
    ))

  return (
    <section id={id} className={bgLight && "bg-light"}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center mb-5">
            <h2 className="section-heading text-uppercase">{title}</h2>
            <br />
            <br />
          </div>
        </div>

        <div className="row">
          {content &&
            content.map((item, key) => {
              if (!item.revert) {
                return (
                  <Fragment key={key}>
                    {renderText(item)}
                    <div className="col-md-6 mb-5 d-none d-md-block">
                      <div className="row">{renderCircles(item.circles)}</div>
                    </div>
                  </Fragment>
                )
              } else {
                return (
                  <Fragment key={key}>
                    <div className="col-md-6 mb-5 d-none d-md-block">
                      <div className="row">{renderCircles(item.circles)}</div>
                    </div>
                    {renderText(item)}
                  </Fragment>
                )
              }
            })}
        </div>
      </div>
    </section>
  )
}

export default SectionCircle
