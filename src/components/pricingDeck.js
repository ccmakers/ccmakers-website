import React from 'react'
import { css } from '@emotion/core'
import Container from './container'

const style = css`

  .card-deck {
    display: flex;
    flex-direction: column;
    margin: 1rem auto;
    max-width: 800px;

    @media (min-width: 768px) {
      flex-flow: row wrap;
      justify-content: space-between;
    }

    @media (min-width: 992px) {
      max-width: 960px;
    }
  }
`

const PricingDeck = ({children}) => {
  return (
    <div css={style}>
      <Container>
        <div className="card-deck">
          {children}
        </div>
      </Container>
    </div>
  )
}

export default PricingDeck
