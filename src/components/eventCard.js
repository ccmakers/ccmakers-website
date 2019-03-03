import React from 'react'
import { css } from '@emotion/core'

import fallBackImage from '../images/cape-makers-things.png';

const style = css`
  margin-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
  background-color: rgba(0, 147, 208, 0.2);

  @media (min-width: 768px) {
    flex-direction: row;
  }

  .event-cover {
    img {
      display: block;
      width: 100%;
    }

    @media (min-width: 768px) {
      flex: 0 0 33%;
    }
  }

  .event-content {
    padding: 1rem;

    h3 {
      margin: 0;
    }

    @media (min-width: 768px) {
      flex: 1 1 auto;
    }

    @media (min-width: 992px) {
      font-size: 1.1rem;
    }

    time {
      display: block;
    }
  }
`

const EventCard = ({
  name,
  link,
  status,
  time,
  venue,
  visibility,
  featured_photo
}) => {
  console.log(venue);
  return (
    <div css={style}>
      {featured_photo ? (
        <a className="event-cover" href={link} target="_blank" rel="noopener noreferrer">
          <img src={featured_photo.photo_link} alt={`${name} Event`} />
        </a>
      ) : (
        <a className="event-cover" href={link} target="_blank" rel="noopener noreferrer">
          <img src={fallBackImage} alt={`${name} Event`} />
        </a>
      )}
      <div className="event-content">
        <a href={link} target="_blank" rel="noopener noreferrer"><h3>{name}</h3></a>
        <time>{new Intl.DateTimeFormat('en-US', {
          year: 'numeric', month: 'numeric', day: 'numeric',
          hour: 'numeric', minute: 'numeric',
          hour12: true,
          timeZone: 'America/New_York'
        }).format(new Date(time))}</time>
        <a className="button" href={link} target="_blank" rel="noopener noreferrer">View More</a>
      </div>
    </div>
  )
}

export default EventCard
