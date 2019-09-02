import React from 'react'
import { css } from '@emotion/core'

import Container from './container'
import EventCard from './eventCard';

const style = css`
  margin-top: 1.5rem;
  margin-bottom: 3rem;
  display: flex;
  flex-direction: column;
`

const EventsGrid = ({events}) => {
  return (
    <Container>
      <div css={style}>
        {events && events.map( event => {
          const { node } = event;
          return (
            <EventCard key={node.id} {...node} />
          )
        })}
      </div>
    </Container>
  )
}


export default EventsGrid