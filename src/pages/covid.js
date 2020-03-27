import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from 'gatsby-image'
import Container from "../components/container";
import IntroPageHero from "../components/introPageHero";
import { Link } from "gatsby"
import Callout from "../components/callout";
import { css } from '@emotion/core'

const style = css`

  margin-top: 4rem;
  display: flex;
  flex-direction: row;

  .item {
    width: 100%;
  }

`

const CovidPage = (props) => (
  <Layout>
    <SEO
      title="Covid-19 Call to Action"
      keywords={[`covid`, `cape cod`, `makers`, `visor`, `mask`, `3d printing`]}
      description="Cape Cod Hospital has requested that Cape Cod Makers work with the community to create face-shields to help keep those on the frontlines safe. "
      picture={`/images/covid-cover.jpg`} />
    <IntroPageHero
      title="Covid-19 Call to Action"
      introText="Humanity is currently engaged in a war with a virus and at the frontlines of that war are our healthcare providers. Cape Cod Hospital has requested that Cape Cod Makers work with the community to create face-shields to help keep those on the frontlines safe. Our members stepped up! A proto-type was designed, refined, and approved by the hospital. Our 3D printers are already cranking out parts, <strong>but we can't do it alone!</strong>"
    />
    <Container>
      <Img fluid={props.data.cchVisor.childImageSharp.fluid} style={{width: 450, margin: "0 auto"}} />
    </Container>
    <Callout
      id="print-visors"
      title="Ready to help out?"
      text="We need everyone with a 3D printer to help print the visor component of the face-shield. We have created STL files to print the visor as a single piece for large printers or as two pieces for smaller printers. The design takes about 1.5 - 2 hours to print and we are recommending people use PLA plastic (any color). Please do not modify the design. Once you have printed 20 or more visor components complete the form linked below and we will pickup the visors, complete the assembly, and bring them to the hospital. If you have any questions please contact us at <a href='mailto:info@capecodmakers.org'>info@capecodmakers.org</a>"
      link={<a href="/files/ShieldVisorSTL.zip">Visor STL Files</a>}
    />
    <Container>
      <div css={style}>
        <div className="item">
          <Img fluid={props.data.visorFront.childImageSharp.fluid} objectFit="cover" objectPosition="50% 50%" />
        </div>
        <div className="item">
          <Img fluid={props.data.visorSide.childImageSharp.fluid} objectFit="cover" objectPosition="50% 50%" />
        </div>
      </div>
    </Container>
    <Callout
      id="donate-visors"
      title="Ready for pickup?"
      text="When you have 20 or more visors printed, please complete the form below and we will contact you to arrange pick-up. We will be doing air-gap pickup, asking you to leave the visors outside."
      link={<a href="https://forms.gle/REySmgXtSLcCRL2A9">Visor Donation Form</a>}
    />
  </Layout>
)

export default CovidPage

export const pageQuery = graphql`
  query {
    cchVisor: file(relativePath: { eq: "CCH-Visor.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    visorFront: file(relativePath: { eq: "Visor-front.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
        fixed(width: 1200) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    visorSide: file(relativePath: { eq: "Visor-side.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`