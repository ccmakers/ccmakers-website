import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
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
const ThankYouPage = (props) => (
  <Layout>
    <SEO title="Thank You" keywords={[`thank you`, `cape cod`, `makers`]} />
    <IntroPageHero
      title="Thank you for your support!"
      introText="Please stop by the MakerSpace during one of our events to see all the great projects you're contributing to."
    />
  </Layout>
)

export default ThankYouPage
