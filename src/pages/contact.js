import React from "react"
import Img from 'gatsby-image'
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from "../components/container";
import IntroPageHero from "../components/introPageHero";
import { css } from '@emotion/core'

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
    <SEO title="Contact" keywords={[`contact`, `cape cod`, `makers`]} />
    <IntroPageHero
      title="Contact"
    />
    <Container>
      <div css={style}>
        <div className="map">
          <a href={mapLink} target="_blank" rel="noopener noreferrer">
            <Img fluid={props.data.imageOne.childImageSharp.fluid} />
          </a>
        </div>
        <div className="contact-content">
          <dl>
            <dt>Address:</dt>
            <dd>
              Harwich Cultural Center<br />
              204 Sisson Rd, Room 110<br />
              Harwich, MA 02645
            </dd>
            <dt>Hours:</dt>
            <dd>
              <strong>Tuesday</strong> 10am – 3pm<br />
              <strong>Wednesday</strong> 7pm – 9pm<br />
              <strong>Saturday</strong> 6pm – 9pm
            </dd>
            <dt>Email:</dt>
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