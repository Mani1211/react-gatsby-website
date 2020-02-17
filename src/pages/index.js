import React from "react"
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from "../components/Reusable/HeroSection"
import Infoblock from "../components/Reusable/Infoblock"
import Dualinfoblock from "../components/Reusable/Dualinfoblock"
import Coursecart from "../components/Cart/coursecart"
const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
  
    <HeroSection
    img={ data.img.childImageSharp.fluid}
    title="About  Learn code online"
    subtitle=""
    heroclass="hero-background"
    ></HeroSection>
    <Infoblock heading="About us"/>
    <Coursecart courses={data.Courses.edges}/>
    <Dualinfoblock heading="Our Team"/>
  </Layout>
)

export const query = graphql`
{
  img: file(relativePath: { eq: "heromain.png" }) {
  childImageSharp {
    fluid(maxWidth: 400, maxHeight: 250) {
      ...GatsbyImageSharpFluid_tracedSVG
    }
  }
}
Courses: allContentfulCourses{
  edges{
    node{
      id
      title
      price
      category
      description{
        description
      }
      image{
        fixed(width:200,height:200){
          ...GatsbyContentfulFixed_tracedSVG
        }
      }
    }
  }
}
}

`
export default IndexPage
