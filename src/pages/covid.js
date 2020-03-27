import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import IntroPageHero from "../components/introPageHero";
import PricingDeck from "../components/pricingDeck";
import PriceItem from "../components/priceItem";
import { Link } from "gatsby"
import Callout from "../components/callout";

const MembershipPage = () => (
  <Layout>
    <SEO title="Membership" keywords={[`membership`, `cape cod`, `makers`]} />
    <IntroPageHero
      title="Covid-19 Call to Action"
      introText="Humanity is currently engaged in a war with a virus and at the frontlines of that war are our healthcare providers. Cape Cod Hospital has requested that Cape Cod Makers work with the community to create face-shield to help keep those on the frontlines safe. Our members stepped up! A proto-type was designed, refined, and approved by the hospital. Our 3D printers are already cranking out parts, <strong>but we can't do it alone!</strong>"
    />
    <Container><img align="center" src="../images/CCH-Visor.jpg"></img></Container>
    <Callout
      id="print-visors"
      title="Ready to help out?"
      text="We need everyone with a 3D printer to help print the visor component of the face-shield. We have created STL files to print the visor as a single piece for large printers or as two pieces for smaller printers. The design takes about 1.5 - 2 hours to print and we are recommending people use PLA plastic (any color). Please do not modify the design. Once you have printed 20 or more visor components complete the form linked below and we will pickup the visors, complete the assembly, and bring them to the hospital. If you have any questions please contact us at <a href='mailto:info@capecodmakers.org'>info@capecodmakers.org</a>"
      link={<Link to="../images/ShieldVisorSTL.zip">Visor STL Files</Link>}
    />
    <Container><img align="center" src="../images/Visor-front.jpg"></img><img align="center" src="../images/Visor-side.jpg"></img></Container>
    <Callout
      id="donate-visors"
      title="Ready for pickup?"
      text="When you have 20 or more visors printed, please complete the form below and we will contact you to arrange pick-up. We will be doing air-gap pickup, asking you to leave the visors outside."
      link={<Link to="https://forms.gle/REySmgXtSLcCRL2A9">Visor Donation Form</Link>}
    />
  </Layout>
)

export default MembershipPage
