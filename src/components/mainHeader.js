import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

import Container from './container'

const MainHeader = ({ siteTitle }) => {
  return (
    <header
      style={{
        background: `rebeccapurple`,
        marginBottom: `1.45rem`,
      }}
    >
      <Container>
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </h1>
      </Container>
    </header>
  )
}

MainHeader.propTypes = {
  siteTitle: PropTypes.string,
}

MainHeader.defaultProps = {
  siteTitle: ``,
}

export default MainHeader
