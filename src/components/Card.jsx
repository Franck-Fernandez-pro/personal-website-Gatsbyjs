import React from "react"

const Card = ({ iconColor, icon, title, content }) => (
  <div className="col-md-4">
    <span className="fa-stack fa-4x">
      <i className={`fa fa-circle fa-stack-2x ${iconColor}`}></i>
      <i className={`fa ${icon} fa-stack-1x fa-inverse`}></i>
    </span>
    <h4 className="service-heading">{title}</h4>
    <p className="text-muted">{content}</p>
  </div>
)

export default Card
