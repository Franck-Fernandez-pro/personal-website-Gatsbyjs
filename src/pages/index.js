import React from "react"
import Nav from "../components/Nav"
import websiteContent from "../constants"
import HeaderSection from "../components/HeaderSection"
import Section from "../components/Section"
import BuildingPage from "./BuildingPage"

import "../css/font-awesome.min.css"
import "../css/bootstrap.min.css"
import "../css/agency.css"
import About from "../components/About"
import Footer from "../components/Footer"
import Contact from "../components/Contact"
import Card from "../components/Card"
import { useStaticQuery, graphql } from "gatsby"

// import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

const isDev = true

const IndexPage = (props) => {
  const {
    strengths,
    strengthsIndex,
    interests,
    interestsIndex,
    skillsIndex,
    frontIndex,
    frontItems,
    graphic_designIndex,
    graphic_designItems,
  } = useStaticQuery(graphql`
    {
      strengths: allMarkdownRemark(
        filter: {
          frontmatter: {
            path: {
              regex: "/(strengths)/.*\\\\.md$/"
              ne: "/strengths/_strengths.md"
            }
          }
        }
        sort: { fields: frontmatter___order }
      ) {
        nodes {
          frontmatter {
            path
            title
            content
            icon
            iconColor
          }
        }
      }
      strengthsIndex: markdownRemark(
        frontmatter: { path: { eq: "/strengths/_strengths.md" } }
      ) {
        frontmatter {
          path
          title
          sectionId
        }
      }
      interests: allMarkdownRemark(
        filter: {
          frontmatter: {
            path: {
              regex: "/(interests)/.*\\\\.md$/"
              ne: "/interests/_interests.md"
            }
          }
        }
        sort: { fields: frontmatter___order }
      ) {
        nodes {
          frontmatter {
            path
            title
            content
            icon
            iconColor
          }
          html
        }
      }
      interestsIndex: markdownRemark(
        frontmatter: { path: { eq: "/interests/_interests.md" } }
      ) {
        frontmatter {
          path
          title
          sectionId
        }
      }

      skillsIndex: markdownRemark(
        frontmatter: { path: { eq: "/skills/_skills.md" } }
      ) {
        frontmatter {
          path
          title
          sectionId
        }
      }
      frontIndex: markdownRemark(
        frontmatter: { path: { eq: "/skills/front/_front.md" } }
      ) {
        frontmatter {
          path
          title
          active
          revert
        }
        html
      }
      frontItems: allMarkdownRemark(
        filter: {
          frontmatter: {
            path: {
              regex: "/(front)/.*\\\\.md$/"
              ne: "/skills/front/_front.md"
            }
          }
        }
        sort: { fields: frontmatter___order }
      ) {
        nodes {
          frontmatter {
            path
            title
            col
            style
          }
        }
      }

      graphic_designIndex: markdownRemark(
        frontmatter: {
          path: { eq: "/skills/graphic_design/_graphic_design.md" }
        }
      ) {
        frontmatter {
          title
          active
          revert
        }
        html
      }
      graphic_designItems: allMarkdownRemark(
        filter: {
          frontmatter: {
            path: {
              regex: "/(graphic_design)/.*\\\\.md$/"
              ne: "/skills/graphic_design/_graphic_design.md"
            }
          }
        }
        sort: { fields: frontmatter___order }
      ) {
        nodes {
          frontmatter {
            title
            col
            style
          }
        }
      }
    }
  `)

  // ! NEED TO CLEAN
  const renderText = (title, html) => (
    <div className="col-md-6 col-sm-12">
      <h4 className="service-heading text-center">{title}</h4>
      <div
        className="text-muted text-center"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  )
  // ! NEED TO CLEAN
  const renderCircles = (nodes) =>
    nodes.map(({ frontmatter: { title, col, style } }, key) => (
      <div key={key} className={col}>
        <div className={style}>
          <span className="progress-left">
            <span className="progress-bar"></span>
          </span>
          <span className="progress-right">
            <span className="progress-bar"></span>
          </span>
          <div className="progress-value">{title}</div>
        </div>
      </div>
    ))

  return (
    <>
      <SEO />
      {isDev ? (
        <BuildingPage />
      ) : (
        <>
          <Nav
            headerBtnLeft={websiteContent.headerBtnLeft}
            headerBtns={websiteContent.headerBtns}
          />
          <HeaderSection />
          <Section
            id={strengthsIndex.frontmatter.sectionId}
            title={strengthsIndex.frontmatter.title}
          >
            {strengths.nodes &&
              strengths.nodes.map(
                ({ frontmatter: { iconColor, icon, title, content } }, key) => (
                  <Card
                    key={key}
                    iconColor={iconColor}
                    icon={icon}
                    title={title}
                    content={content}
                  />
                )
              )}
          </Section>

          {/* <SectionCircle
            bgLight
            id={websiteContent.sections.competences.id}
            title={websiteContent.sections.competences.title}
            content={websiteContent.sections.competences.content}
          /> */}

          {/* CIRCLE SECTION */}
          {/* // ! NEED TO CLEAN */}
          <Section
            bgLight
            id={skillsIndex.frontmatter.sectionId}
            title={skillsIndex.frontmatter.title}
          >
            {renderText(frontIndex.frontmatter.title, frontIndex.html)}
            <div className="col-md-6 mb-5">
              <div className="row justify-content-center">
                {renderCircles(frontItems.nodes)}
              </div>
            </div>

            <div className="col-md-6 mb-5">
              <div className="row justify-content-center">
                {renderCircles(graphic_designItems.nodes)}
              </div>
            </div>
            {renderText(
              graphic_designIndex.frontmatter.title,
              graphic_designIndex.html
            )}
          </Section>

          {/* NEED CONTENT BY CONST */}
          <About />

          <Section
            bgLight
            id={interestsIndex.frontmatter.sectionId}
            title={interestsIndex.frontmatter.title}
          >
            {interests.nodes &&
              interests.nodes.map(
                (
                  { frontmatter: { iconColor, icon, title, content }, html },
                  key
                ) => (
                  <Card
                    key={key}
                    iconColor={iconColor}
                    icon={icon}
                    title={title}
                    content={content}
                    html={html}
                  />
                )
              )}
          </Section>

          {/* NEED CONTENT BY CONST */}
          <Contact />

          <Footer content={websiteContent.sections.footer.content} />
        </>
      )}
    </>
  )
}

// const IndexPage = () => (
//   <Layout>
//     <h1>Hi people</h1>
//     <p>Welcome to your new Gatsby site.</p>
//     <p>Now go build something great.</p>
//     <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
//       <Image />
//     </div>
//   </Layout>
// )

export default IndexPage
