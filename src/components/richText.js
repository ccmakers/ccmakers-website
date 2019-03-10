import React from 'react'
import { css } from '@emotion/core'

const style = css`
  p {
    font-size: 1.2rem;
  }
`

const RichText = ({html}) => {
  return (
    <div css={style} dangerouslySetInnerHTML={{__html: html}} />
  )
}

export default RichText
