import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import IntroPageHero from "../components/introPageHero";

const ThankYouPage = () => (
  <Layout>
    <SEO title="Thank You" keywords={[`thank you`, `cape cod`, `makers`]} />
    <IntroPageHero
      title="Thank you for your support!"
      introText="Please stop by the MakerSpace during one of our events to see all the great projects you're contributing to."
    />
  </Layout>
)

export default ThankYouPage
