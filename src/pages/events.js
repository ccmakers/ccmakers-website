import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { StaticQuery, graphql } from 'gatsby'
import IntroPageHero from "../components/introPageHero";
import EventsGrid from "../components/eventsGrid";

const EventsPage = () => (
  <Layout>
    <SEO title="Events" keywords={[`events`, `cape cod`, `makers`]} />
    <IntroPageHero
      title="Events"
      introText="Cape Cod Makers is engaged in promoting the Maker and DIY culture on Cape Cod. We do this through meetups, connecting local makers, hosting classes, group activities."
    />
    <StaticQuery query={pageQuery} render={data => (
      <EventsGrid events={data.allMeetupEvent.edges} />
    )} />
  </Layout>
)

const pageQuery = graphql`
  query Events {
    allMeetupEvent {
      edges {
        node {
          id
          title
          summary
          local_date
          local_time
          visibility
          link
          how_to_find_us
          featured_photo {
            id
            highres_link
            photo_link
            thumb_link
            type
            base_url
          }
          venue {
            id
            name
            lat
            lon
            repinned
            address_1
            address_2
            city
            country
            localized_country_name
            zip
            state
          }
        }
      }
    }
  }
`

export default EventsPage
