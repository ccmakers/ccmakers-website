import React from 'react'
import { css } from '@emotion/core'
import Container from './container'

const style = css`
  text-align: center;
  margin: 3rem auto 3rem;
  display: block;

  @media (min-width: 768px) {
    max-width: 83.333333%;
  }

  @media (min-width: 992px) {
    max-width: 66.666667%;
  }

  h1 {
    margin-top: 0;
    margin-bottom: 0.5rem;
    font-weight: 300;
    line-height: 1.2;

    @media (min-width: 992px) {
      font-size: 4.5rem;
      font-weight: 300;
      line-height: 1;
    }
  }

  p {
    font-size: 1.171875rem;
    font-weight: 300;

    @media (min-width: 992px) {
      font-size: 1.2rem;
    }
  }
`

const IntroPageHero = ({ title, introText}) => {
  return (
    <Container>
      <div css={style}>
        <h1>{title}</h1>
        <p>{introText}</p>
      </div>
    </Container>
  )
}

export default IntroPageHero