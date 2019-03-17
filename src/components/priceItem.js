import React from 'react'
import { css } from '@emotion/core'

const style = css`
  position: relative;
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  margin: 0 auto 2rem;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid #0093D0;
  border-radius: .25rem;
  box-shadow: 0 .125rem .25rem rgba(0,0,0,.075);
  text-align: center;

  @media (min-width: 768px) {
    flex: 0 1 auto;
    margin: 0 0 2rem;
    width: 350px;
  }

  @media (min-width: 992px) {
    width: 450px;
  }

  &.centered {
    margin: 0 auto 2rem;
  }

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
    background-color: #e8f7fe;

    h2 {
      font-size: 2.5rem;
      margin-bottom: 0;
      margin-top: 0;
      padding: 1.25rem;
      background-color: #fff;

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
`

const PriceItem = ({
  title,
  yearlyPrice,
  monthlyPrice,
  benefits,
  link,
  centered
}) => {
  return (
    <div css={style} className={ centered && `centered`}>
      {title && (
        <header>
          <h4>{title}</h4>
        </header>
      )}
      <div className="card-body">
        { yearlyPrice && (
          <h2>
            ${yearlyPrice} <small>/ year</small>
            {monthlyPrice && (
              <span>or ${monthlyPrice} / month</span>
            )}
          </h2>
        )}
        {benefits && benefits.length > 0 && (
          <ul>
            {benefits.map( benefit => (
              <li>{benefit}</li>
            ))}
          </ul>
        )}
        {link}
      </div>
    </div>
  )
}

export default PriceItem
