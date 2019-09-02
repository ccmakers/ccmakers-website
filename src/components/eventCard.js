import React from 'react'
import { css } from '@emotion/core'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
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
  title,
  link,
  local_date,
  local_time,
  venue,
  featured_photo
}) => {
  console.log(venue);
  return (
    <div css={style}>
      {featured_photo ? (
        <OutboundLink className="event-cover" href={link} target="_blank" rel="noopener noreferrer">
          <img src={featured_photo.highres_link} alt={`${title} Event`} />
        </OutboundLink>
      ) : (
        <OutboundLink className="event-cover" href={link} target="_blank" rel="noopener noreferrer">
          <img src={fallBackImage} alt={`${title} Event`} />
        </OutboundLink>
      )}
      <div className="event-content">
        <OutboundLink href={link} target="_blank" rel="noopener noreferrer"><h3>{title}</h3></OutboundLink>
        <time>{new Intl.DateTimeFormat('en-US', {
          year: 'numeric', month: 'numeric', day: 'numeric',
          hour: 'numeric', minute: 'numeric',
          hour12: true,
          timeZone: 'America/New_York'
        }).format(new Date(local_date + ' ' + local_time))}</time>
        <OutboundLink className="button" href={link} target="_blank" rel="noopener noreferrer">View More</OutboundLink>
      </div>
    </div>
  )
}

export default EventCard
