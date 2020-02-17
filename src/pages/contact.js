import React from "react"
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from "../components/Reusable/HeroSection"
import Infoblock from "../components/Reusable/Infoblock"
import Dualinfoblock from "../components/Reusable/Dualinfoblock"
import Teamphotosection from "../components/About/Teamphotosection"

const About = ({data}) => (
  <Layout>
    <SEO title="Home" />
    
      
    <HeroSection
    img={ data.img.childImageSharp.fluid}
    title="About  the  lco - Learn code online"
    subtitle=""
    heroclass="hero-background"
    ></HeroSection>
    <Dualinfoblock heading="A message from CEO"/>
    <Infoblock heading="About our vision"/>
    <Teamphotosection></Teamphotosection>
  </Layout>
)

export const query = graphql`
{
  img: file(relativePath: { eq: "about.png" }) {
  childImageSharp {
    fluid(maxWidth: 400, maxHeight: 250) {
      ...GatsbyImageSharpFluid_tracedSVG
    }
  }
}
}

`
export default About
