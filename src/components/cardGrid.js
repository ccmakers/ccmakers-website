import React from 'react'
import { css } from '@emotion/core'
import IcomoonReact from 'icomoon-react'

import Container from './container'
import iconSet from '../selection.json'

const style = css`

  margin-top: 1.5rem;
  margin-bottom: 3rem;
  display: flex;

  @media (min-width: 576px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 3rem;
  }

  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 3rem;
  }

  .item {
    margin-top: 1.5rem;
    margin-bottom: 3rem;
    display: flex;

    .card {
      position: relative;
      display: flex;
      flex-direction: column;
      min-width: 0;
      word-wrap: break-word;
      background-color: #fff;
      background-clip: border-box;
      border-radius: .5rem;
      background-color: rgba(0, 147, 208, 0.2);
      text-align: center;

      .card-body {
        flex: 1 1 auto;
        padding: 1.25rem;

        .card-icon {
          display: block;
          position: absolute;
          top: -1.5rem;
          left: 0;
          width: 100%;
          text-align: center;

          &--bg {
            display: inline-flex;
            background-color: #0093D0;
            width: 3rem;
            height: 3rem;
            border-radius: 50%;
            justify-content: center;
            align-items: center;
          }
        }

        .card-title {
          margin-top: 1rem;
          margin-bottom: .75rem;
          font-size: 1.5rem;
          font-weight: bold;
          color: #0093D0;
        }
      }
    }

    @media (min-width: 576px) {
      margin-bottom: 1.5rem;
    }
  }
`

const CardGrid = ({ gridItems }) => {
  return (
    <Container>
      <div css={style}>
        {gridItems && gridItems.length > 0 && gridItems.map( item => (
          <div className="item">
            <div className="card">
              <div className="card-body">
                {item.iconName && (
                  <div className="card-icon">
                    <div className="card-icon--bg">
                      <IcomoonReact
                        iconSet={iconSet}
                        color="#FFF"
                        size={24}
                        icon={item.iconName}
                      />
                    </div>
                  </div>
                )}
                {item.title && (
                  <h5 className="card-title">{item.title}</h5>
                )}
                {item.description && (
                  <p className="card-text">{item.description}</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  )
}

export default CardGrid
