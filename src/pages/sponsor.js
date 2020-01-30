import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from 'gatsby-image'
import { Link } from "gatsby"
import Container from "../components/container";
import IntroPageHero from "../components/introPageHero";
import RichText from "../components/richText";
import Callout from "../components/callout";
import { graphql } from 'gatsby'

const SponsorPage = (props) => (
  <Layout>
    <SEO title="Sponsor" keywords={[`sponsor`, `donate`, `money`]} />
    <IntroPageHero
      title="Thank you to our sponsors!"
      introText=""
    />
    <Container>
    <Img fluid={props.data.imageOne.childImageSharp.fluid} />
      <RichText html={`
        <p>
          Cape Cod Makers is engaged in promoting the Maker and DIY culture on Cape Cod. We do this through meetups, connecting local makers, hosting classes, group activities, promoting shared resources and maker spaces. There is an enormous amount of artistic and technical talent on Cape Cod in a wide variety of areas. Also, there are many people who like to learn new things and improve themselves. We are excited about the possibilities of bringing all these people together on and connecting ideas to grow the maker movement on Cape Cod.
        </p>
      `}>
      </RichText>
    </Container>

    

  </Layout>
)

export default SponsorPage

export const pageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "harwich_cultural_council.PNG"}) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`