import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import IntroPageHero from "../components/introPageHero"
import CardGrid from "../components/cardGrid";
import Callout from "../components/callout";
import { Link } from "gatsby"

const featurets = [
  {
    title: "Location",
    iconName: "location",
    description: "Located at the Harwich Cultural Center, our multipurpose room has everything needed for your projects."
  },
  {
    title: "Tools",
    iconName: "tools",
    description: "3D Printers, Soldering Station, X-Carve, Hand Tools and more! We have them and we can show you how to use'em!"
  },
   {
    title: "Projects",
    iconName: "keyboard",
    description: "Our members are always working on a variety of project, from simple to complex, from wood to electronics."
  },
  {
    title: "Membership",
    iconName: "user",
    description: "Our membership is really active, with a very diverse skill set. You can always find help in our Slack Room."
  },
  {
    title: "Events",
    iconName: "calendar",
    description: "We have regular social events, where members meet and talk about projects. Check our events calendar!"
  }
]

const LaunchPadPage = () => (
  <Layout>
    <SEO title="LaunchPad" keywords={[`launchpad`, `makerspace`, `cape cod`, `makers`]} />
    <IntroPageHero
      title="Create, Invent, Discover."
      introText="The Launchpad MakerSpace, at the Harwich Cultural Center is a makerspace and a collaborative workspace where people can learn to use computers and tools such as soldering irons, 3D printers, laser cutters and more to design and make almost anything."
    />
    <CardGrid gridItems={featurets} />
    <Callout
      title="Come and visit us!"
      text="If you're interested, please visit us during one of our monthly open house events. We will give you a tour, answer your questions, and introduce you to some of our members. If you decide to pursue a membership, we'll give you a membership application form to take home and fill out."
      link={<Link to="/events">Check out our events</Link>}
    />
  </Layout>
)

export default LaunchPadPage
