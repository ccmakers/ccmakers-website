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
    <PricingDeck>
      <PriceItem
        title="Supporting Member"
        yearlyPrice={100}
        monthlyPrice={10}
        benefits={[
          'Access to the LaunchPad when accompanied by a full-time member',
          'Full access to the Cape Cod Makers Slack group',
          'Early Access to Class & Event Registration',
          'Discounted Class & Event Fees',
        ]}
        link={<a href="#become-a-member">How do I become a member?</a>}
      />
    </PricingDeck>
    <Callout
      id="become-a-member"
      title="How do I become a member?"
      text="If you're interested, please visit us during one of our monthly open house events. We will give you a tour, answer your questions, and introduce you to some of our members. If you decide to pursue a membership, we'll give you a membership application form to take home and fill out."
      link={<Link to="/events">View Events</Link>}
    />
  </Layout>
)

export default MembershipPage
