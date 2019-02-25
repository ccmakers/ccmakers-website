import React from 'react'
import { css } from '@emotion/core'

const style = css`
  display: block;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;

  @media (min-width: 576px) {
    width: 100%;
    max-width: 540px;
  }

  @media (min-width: 768px) {
    max-width: 720px;
  }

  @media (min-width: 992px) {
    max-width: 960px;
  }

  @media (min-width: 1200px) {
    max-width: 1140px;
  }
`
const Container = ({children}) => {
  return (
    <div css={style}>{children}</div>
  )
}

export default Container
