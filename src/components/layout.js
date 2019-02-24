import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import GlobalStyles from './globalStyles'
import MainHeader from "./mainHeader"
import MainFooter from './mainFooter';

const Layout = ({ children }) => (
  <StaticQuery
    query={pageQuery}
    render={data => (
      <>
        <GlobalStyles />
        <MainHeader />
        <main>{children}</main>
        <MainFooter socialMediaLinks={data.site.siteMetadata.socialMediaLinks} />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

const pageQuery = graphql`
  query LayoutIndexQuery {
    site {
      siteMetadata {
        title,
        socialMediaLinks {
          name
          url
        }
      }
    }
  }
`

export default Layout
