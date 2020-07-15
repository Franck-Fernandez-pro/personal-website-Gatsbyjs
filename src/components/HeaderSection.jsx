import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const HeaderSection = (props) => {
  const {
    markdownRemark: { frontmatter },
  } = useStaticQuery(graphql`
    {
      markdownRemark(frontmatter: { path: { eq: "/home.md" } }) {
        frontmatter {
          path
          title
          content
          btnContent
        }
      }
    }
  `)

  return (
    <header className="masthead">
      <div className="container">
        <div className="intro-text">
          <div className="intro-lead-in">
            <h1>{frontmatter.title}</h1>
          </div>
          <div className="intro-heading text-uppercase">
            {frontmatter.content}
          </div>
          <a
            className="btn btn-primary btn-xl text-uppercase js-scroll-trigger"
            href="#atouts"
          >
            {frontmatter.btnContent}
          </a>
        </div>
      </div>
    </header>
  )
}

export default HeaderSection
