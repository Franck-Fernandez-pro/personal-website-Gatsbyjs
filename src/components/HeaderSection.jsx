import React from "react"

const HeaderSection = ({ content: { title, content, btnContent } }) => (
  <header className="masthead">
    <div className="container">
      <div className="intro-text">
        <div className="intro-lead-in">
          <h1>{title}</h1>
        </div>
        <div className="intro-heading text-uppercase">{content}</div>
        <a
          className="btn btn-primary btn-xl text-uppercase js-scroll-trigger"
          href="#atouts"
        >
          {btnContent}
        </a>
      </div>
    </div>
  </header>
)

export default HeaderSection
