import React from 'react'
import { css } from '@emotion/core'
import Container from './container'
const thisYear = new Date().getFullYear();

const style = css`
  padding: 1rem 0;
  border-top: 2px solid #0093D0;

  .wrapper {
    display: flex;
    flex-direction: column-reverse;
  }

  .copy {
    text-align: center;
    padding: 1rem 0 0;
  }

  .social {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: row;
    justify-content: center;

    li {
      flex: 0 0 auto;
      margin: 0 1rem;
    }
  }
`

const MainFooter = ({ socialMediaLinks }) => {
  return (
    <footer css={style}>
      <Container>
        <div className="wrapper">
          <div className="copy">
            Copyright &copy; {thisYear} Cape Cod Makers, Inc.
          </div>
          <ul className="social">
            { socialMediaLinks && socialMediaLinks.map( link => (
              <li key={link.name}>
                <a href={link.url} target="_blank" rel="noopener noreferrer">{link.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  )
}

export default MainFooter
