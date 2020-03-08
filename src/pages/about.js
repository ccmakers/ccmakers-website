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

const AboutPage = (props) => (
  <Layout>
    <SEO title="About" keywords={[`about`, `cape cod`, `makers`]} />
    <IntroPageHero
      title="Meet The Makers"
      introText="Cape Cod Makers seeks to promote a community where people can collaborate and encourage one another in bringing their ideas into existence."
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

    <Callout
      id="join-the movement"
      title="Ready to join the movement?"
      text="Stop by during one of our monthly open house events, or if you are ready to join please complete our online membership application."
      link={<Link to="/membership">Join Now!</Link>}
    />

  </Layout>
)

export default AboutPage

export const pageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "membership-picture.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`