import React from "react"

const Footer = ({ content }) => (
  <footer>
    <div className="container">
      <div className="row">
        {content &&
          content.map(({ text }, key) => (
            <div key={key} className="col-md-6">
              <span className="copyright">{text}</span>
            </div>
          ))}
      </div>
    </div>
  </footer>
)

export default Footer
