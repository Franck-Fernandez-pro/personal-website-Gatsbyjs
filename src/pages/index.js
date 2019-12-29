import React from "react"
import Nav from "../components/Nav"
import websiteContent from "../constants"
import "../components/bootstrap.min.css"
import "../components/agency.css"

// import Layout from "../components/layout"
// import Image from "../components/image"
// import SEO from "../components/seo"

const IndexPage = () => (
  <>
    <Nav
      headerBtnLeft={websiteContent.headerBtnLeft}
      headerBtns={websiteContent.headerBtns}
    />

    {/* Nav
    Header
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
