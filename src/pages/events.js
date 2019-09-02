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
    {/* <StaticQuery query={pageQuery} render={data => (
      <EventsGrid events={data.meetupGroup.MeetupGroup} />
    )} /> */}
  </Layout>
)

// const pageQuery = graphql`
//   query Events {
//     meetupGroup {
//       events {
//         id
//         name
//         status
//         time
//         featured_photo {
//           thumb_link
//           photo_link
//           highres_link
//         }
//         link
//         description
//         visibility
//         venue {
//           name
//           lat
//           lon
//           repinned
//           address_1
//           city
//           country
//           localized_country_name
//         }
//       }
//     }
//   }
// `

export default EventsPage
