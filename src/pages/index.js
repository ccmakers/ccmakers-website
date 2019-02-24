import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`cape cod`, `makers`, `3d printing`]} />
    <p>homepage</p>
  </Layout>
)

export default IndexPage
