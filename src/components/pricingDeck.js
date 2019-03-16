import React from 'react'
import { css } from '@emotion/core'
import Container from './container'
import PriceItem from './priceItem'

const style = css`

  .card-deck {
    display: flex;
    flex-direction: column;
    margin: 1rem auto;


    @media (min-width: 576px) {
      flex-flow: row wrap;
      justify-content: center;
    }

    .card {
      position: relative;
      display: flex;
      flex-direction: column;
      min-width: 0;
      margin: 0 auto;
      word-wrap: break-word;
      background-color: #fff;
      background-clip: border-box;
      border: 1px solid #0093D0;
      border-radius: .25rem;
      box-shadow: 0 .125rem .25rem rgba(0,0,0,.075);
      text-align: center;

      header {
        padding: .75rem 1.25rem;
        margin-bottom: 0;
        background-color: #0093D0;
        border-bottom: 1px solid #0093D0;
        border-radius: calc(.25rem - 1px) calc(.25rem - 1px) 0 0;

        h4 {
          color: #fff;
          font-size: 1.5rem;
          font-weight: 400;
          margin: 0;
        }
      }

      .card-body {
        flex: 1 1 auto;

        h2 {
          font-size: 2.5rem;
          margin-bottom: .75rem;
          margin-top: 0;
          padding: 1.25rem;

          small {
            font-size: 80%;
            font-weight: 400;
            color: #6c757d;
          }

          span {
            display: block;
            font-size: 40%;
            font-weight: 500;
            color: #ccc;
          }
        }

        ul {
          list-style: none;
          margin: 0;
          padding: 0;

          li {
            padding: 1rem;
            background-color: #d7f2ff;

            &:nth-child(even) {
              background-color: #e8f7fe;
            }
          }
        }

        a {
          margin: 1rem;
          display: block;
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
