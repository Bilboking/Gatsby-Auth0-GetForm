//** Home page */

import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from "../components/HeroSection"
import { useAuth0 } from "@auth0/auth0-react"
import { graphql } from "gatsby"

const CTA = () => {
  const { isLoading, isAuthenticated, loginWithRedirect } = useAuth0()

  if (isLoading || isAuthenticated) return null 
  return (
  <div className="cta">
    <button onClick={loginWithRedirect} className="button">Login or Register</button>
  </div>
  )
}

const  IndexPage = ({ data }) => {
    console.log(data)
    const { title, description } = data.site.siteMetadata

  return (
    <Layout>
      <SEO title="Home" />
      <HeroSection />
      <CTA />
     
      <p>{ title } -  { description }</p>

    </Layout>
  )
}

//** Standard graphQL page query */
export const query = graphql`
  query SiteInfo {
  site {
    siteMetadata {
      author
      description
      title
    }
  }
}
`

export default IndexPage
