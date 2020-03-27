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
      title="Membership"
      introText="Want to get connected to our community and support our mission at the same time?<br><strong>Join the Cape Cod Makers today!</strong>"
    />
    <Callout
      id="become-a-member"
      title="What are the benefits of joining?"
      text="Membership in Cape Cod Makers opens you up to both the makerspace and a community of fellow makers eager to help you Create, Invent, and Discover! Join everyone during our bi-weekly project times or use the tools during any of the open hours."
      link={<Link to="/contact">MakerSpace Hours &amp; Location</Link>}
    />
    <PricingDeck>
      <PriceItem
        centered
        title="Supporting Member"
        yearlyPrice={100}
        monthlyPrice={10}
        benefits={[
          'Access to the LaunchPad MakerSpace during open hours',
          'Unlimited access to all MakerSpace tools',
          'Full access to the Cape Cod Makers Slack group',
          'Early Access to Class & Event Registration',
          'Discounted Class & Event Fees',
        ]}
        link={<a href="https://forms.gle/17vxbiTRy9YjvcFG7">Apply for Membership!</a>}
      />
    </PricingDeck>
  </Layout>
)

export default MembershipPage
