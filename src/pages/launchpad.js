import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import IntroPageHero from "../components/introPageHero"
import CardGrid from "../components/cardGrid";

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
    title: "Kitchen",
    iconName: "refrigerator",
    description: "Being a Home Ec room has it's advantages: we have a functional kitchen, with sinks, refrigerator, oven and range."
  },
  {
    title: "Projects",
    iconName: "keyboard",
    description: "Our members are always working on a variaty of project, from simple to complex, from wood to eletronics."
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
      title="LaunchPad"
      introText="The Launchpad, at the Harwich Cultural Center is a makerspace and a collaborative workspace where people can learn to use computers and tools such as soldering irons, 3D printers, laser cutters and more to design and make almost anything."
    />
    <CardGrid gridItems={featurets} />
  </Layout>
)

export default LaunchPadPage
