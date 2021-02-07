import React from "react"
import Img from 'gatsby-image'
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from "../components/container";
import IntroPageHero from "../components/introPageHero";
import { css } from '@emotion/core'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

const style = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 3rem;

  .map {
    flex: 1;

    img {
      width: 100%;
    }
  }

  dl {
    dt {
      font-weight: bold;
    }

    dd {
      margin: 0;

      & + dt {
        margin-top: 1rem;
      }
    }
  }

  @media (min-width: 576px) {
    flex-direction: row;

    .map {
      max-width: 50%;
      padding-left: 1rem;
    }

    .contact-content {
      background-color: #d8edf6;
      flex: 1;
      max-width: 50%;
      padding-left: 1rem;
    }
  }
`

const mapLink = `https://www.google.com/maps/place/204+Sisson+Rd,+Harwich,+MA+02645/@41.6840303,-70.0831844,14z/data=!4m5!3m4!1s0x89fb3e4c9353548d:0x856176f52c636de7!8m2!3d41.683197!4d-70.081854`

const ContactPage = (props) => (
  <Layout>
    <SEO title="Hours &amp; Location" keywords={[`contact`, `cape cod`, `makers`]} />
    <IntroPageHero
      title="Hours &amp; Location"
    />
    <Container>
      <div css={style}>
        <div className="map">
          <OutboundLink href={mapLink} target="_blank" rel="noopener noreferrer">
            <Img fluid={props.data.imageOne.childImageSharp.fluid} />
          </OutboundLink>
        </div>
        <div className="contact-content">
          <dl>
            <dt>Mailing Address:</dt>
            <dd>
              Cape Cod Makers<br />
              P.O. Box 266<br />
              Marstons Mills, MA 02648
            </dd>
            <dt>MakerSpace Address:</dt>
            <dd>
              Harwich Cultural Center<br />
              204 Sisson Rd, Room 110<br />
              Harwich, MA 02645
            </dd>
            <dt>Hours:<sup>*</sup></dt>
            <dd>
              <strong>Wednesday</strong> 7pm – 9pm (Project Time)<br />
              <strong>Saturday</strong> 6pm – 9pm (Project Time)
            </dd>
            <i><sup>*</sup>Members should check Slack for any changes in hours.</i><br />
            <dt>Questions? Send an email to:</dt>
            <dd>
              <a href="mailto:info@capecodmakers.org">info@capecodmakers.org</a>
            </dd>
          </dl>
        </div>
      </div>
    </Container>
  </Layout>
)

export default ContactPage

export const pageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "map.png" }) {
      childImageSharp {
        fluid(maxWidth: 700) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`