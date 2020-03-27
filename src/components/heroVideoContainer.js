import React from 'react'
import { css } from '@emotion/core'

const style = css`
  position: relative;
  width: 100vw;
  height: 56.25vw;
  overflow: hidden;

  @media (min-width: 576px) {
    height: 40vw;
  }

  @media (min-width: 992px) {
    height: 30vw;
  }

  video {
    position: absolute;
    top: 0;
    width: 100vw;
    height: 56.25vw;
    z-index: 1;

    @media (min-width: 576px) {
      top: -10vw;
    }
  }

  .video-overlay {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 2;

    h1 {
      font-size: 4vw;
      font-weight: bold;
      color: #1862b5;
      background-color: rgba(223, 240, 255, .8);
      border: .5vw solid #2780E3;
      padding: 2vw 4vw;
      line-height: 1;
    }
  }
`

const HeroVideoContainer = ({ title }) => {
  return (
    <div css={style}>
      <video
        loop
        autoPlay
        poster="/videos/3d-print-loop.jpg"
        controls="muted"
        ariaHidden="true"
      >
          <source src="/videos/3d-print-loop.m4v" type="video/mp4" />
          <source src="/videos/3d-print-loop.ogg" type="video/ogg" />
          <source src="/videos/3d-print-loop.webm" type="video/webm" />
      </video>
      <div className="video-overlay">
        { title && (<h1>{title}</h1>)}
      </div>
    </div>
  )
}

export default HeroVideoContainer