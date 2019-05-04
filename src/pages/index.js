import React from "react"

import Layout from "../components/layout"
import HeroVideoContainer from "../components/heroVideoContainer"
import SEO from "../components/seo"
import NewsletterCTA from "../components/NewsletterCTA";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`cape cod`, `makers`, `3d printing`]} />
    <HeroVideoContainer title="Making The Future" />
    <NewsletterCTA />
  </Layout>
)

export default IndexPage
