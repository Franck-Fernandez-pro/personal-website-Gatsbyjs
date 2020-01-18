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
import Footer from "../components/Footer"

// import Layout from "../components/layout"
// import Image from "../components/image"
// import SEO from "../components/seo"

const isDev = false

const IndexPage = () => (
  <>
    {isDev ? (
      <BuildingPage />
    ) : (
      <>
        <Nav
          headerBtnLeft={websiteContent.headerBtnLeft}
          headerBtns={websiteContent.headerBtns}
        />
        <HeaderSection content={websiteContent.sections.home} />
        <Section
          id={websiteContent.sections.atouts.id}
          title={websiteContent.sections.atouts.title}
          content={websiteContent.sections.atouts.content}
        />

        <SectionCircle
          bgLight
          id={websiteContent.sections.competences.id}
          title={websiteContent.sections.competences.title}
          content={websiteContent.sections.competences.content}
        />

        <Section
          bgLight
          id={websiteContent.sections.interet.id}
          title={websiteContent.sections.interet.title}
          content={websiteContent.sections.interet.content}
        />

        <Footer content={websiteContent.sections.footer.content} />
      </>
    )}
  </>
)

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
