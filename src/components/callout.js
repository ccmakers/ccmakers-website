import React from 'react'
import { css } from '@emotion/core'
import Container from './container';

const style = css`
  background-color: #e8f7fe;
  padding: 3.5rem 0 4rem;
  margin-top: 4rem;
  text-align: center;

  .wrapper {
    max-width: 800px;
    margin: 0 auto;
  }

  h2 {
    margin: 0;
    font-weight: 300;
    font-size: 1.6rem;

    @media (min-width: 576px) {
      font-size: 2rem;
    }
  }

  p {
    font-weight: 300;
    @media (min-width: 576px) {
      font-size: 1.2rem;
    }
  }

  footer {
    a {
      display: inline-block;
      padding: .5rem 1rem;
      font-size: 1.25rem;
      line-height: 1.5;
      border-radius: .3rem;
      background-color: #0093D0;
      color: #fff;
      font-family: "Open Sans";

      transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;

      &:hover {
        text-decoration: none;
        background-color: #11a7ea;
      }
    }
  }
`

const Callout = ({ id, title, text, link }) => {
  return (
    <div css={style}>
      <Container>
        <div className="wrapper">
          <h2 id={id}>{title}</h2>
          <p dangerouslySetInnerHTML={{__html: text}} />
          <footer>
            {link}
          </footer>
        </div>
      </Container>
    </div>
  )
}

export default Callout
