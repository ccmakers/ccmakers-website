import React from 'react'
import { css } from '@emotion/core'

const style = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 15px;

  .alert-msg {
    background-color: #ffc107;
    color: #343A40;
    padding: 16px 24px;
    line-height: 1;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
  }
`

const AlertBar = () => {
  return (
    <div css={style}>
      <div className="alert-msg">
        The LaunchPad will be closed on <strong>Tuesday, April 2nd</strong> and open <strong>Friday, April 5th, from 10am - 3pm</strong>
      </div>
    </div>
  )
}

export default AlertBar
