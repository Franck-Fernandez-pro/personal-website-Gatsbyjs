import React from "react"
import Nav from "../components/Nav"
import websiteContent from "../constants"
import HeaderSection from "../components/HeaderSection"
import Section from "../components/Section"

import "../css/bootstrap.min.css"
import "../css/agency.css"

// import Layout from "../components/layout"
// import Image from "../components/image"
// import SEO from "../components/seo"

const IndexPage = () => (
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

    {/*
    Section
    Section
    Section
    Section
    Footer */}
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
