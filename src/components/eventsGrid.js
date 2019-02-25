import React, { Component } from 'react'
import { css } from '@emotion/core'

import Container from './container'
import EventCard from './eventCard';

const style = css`
  margin-top: 1.5rem;
  margin-bottom: 3rem;
  display: flex;
  flex-direction: column;
`

class EventsGrid extends Component {
  render() {
    const {events} = this.props
    return (
      <Container>
        <div css={style}>
          {events && events.map( event => (
            <EventCard key={event.id} {...event} />
          ))}
        </div>
      </Container>
    )
  }
}

export default EventsGrid
