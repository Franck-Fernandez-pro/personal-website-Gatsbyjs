import React from "react"
import Nav from "../components/Nav"
import websiteContent from "../constants"
import HeaderSection from "../components/HeaderSection"
import Section from "../components/Section"
import BuildingPage from "./BuildingPage"

import "../css/font-awesome.min.css"
import "../css/bootstrap.min.css"
import "../css/agency.css"
import SectionCircle from "../components/SectionCircle"
import About from "../components/About"
import Footer from "../components/Footer"
import Contact from "../components/Contact"
import { useStaticQuery, graphql } from "gatsby"

// import Layout from "../components/layout"
// import Image from "../components/image"
// import SEO from "../components/seo"

const isDev = false

const IndexPage = (props) => {
  const {
    strengths,
    strengthsIndex,
    interests,
    interestsIndex,
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
    }
  `)

  return (
    <>
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
            content={strengths.nodes}
          />

          <SectionCircle
            bgLight
            id={websiteContent.sections.competences.id}
            title={websiteContent.sections.competences.title}
            content={websiteContent.sections.competences.content}
          />

          {/* NEED CONTENT BY CONST */}
          <About />

          <Section
            bgLight
            id={interestsIndex.frontmatter.sectionId}
            title={interestsIndex.frontmatter.title}
            content={interests.nodes}
          />

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
//     <SEO title="Home" />
//     <h1>Hi people</h1>
//     <p>Welcome to your new Gatsby site.</p>
//     <p>Now go build something great.</p>
//     <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
//       <Image />
//     </div>
//   </Layout>
// )

export default IndexPage
