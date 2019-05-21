import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"
import IntroPageHero from "../components/introPageHero";
import Callout from "../components/callout";
import PricingDeck from "../components/pricingDeck";
import PriceItem from "../components/priceItem";

const SupportPage = (props) => (
  <Layout>
    <SEO title="Support" keywords={[`support`, `donate`, `sponsor`, `cape cod`, `makers`]} />
    <IntroPageHero
      title="Support"
      introText="Please consider supporting our LaunchPad MakerSpace. We contribute to the community by encouraging entrepreneurship, providing training and support for educators and students, and also workforce development."
    />
    <PricingDeck>
    <PriceItem
        title="Supporter"
        yearlyPrice="2,000"
        benefits={[
          'Company name and logo on our Wall of Gratitude',
          'Company logo with hyperlink on our website',
          'Mentions on social media',
          'Supporting membership for up to 5 employees',
        ]}
      />

      <PriceItem
        title="Premium Sponsor"
        yearlyPrice="5,000"
        benefits={[
          'Large company name and logo on our Wall of Gratitude',
          'Company logo with hyperlink on our website',
          'Mentions on social media',
          'Supporting membership for up to 10 employees',
        ]}
      />

      <PriceItem
        title="Gold Partner"
        yearlyPrice="10,000"
        benefits={[
          'Huge Company name and logo on our Wall of Gratitude ',
          'Company logo with hyperlink on Web Site ',
          'Company logo displayed at public events external to our facility',
          'Speaking opportunity at one of our public events',
          'Invitation to attend select members only events',
          'Supporting memberships for up to 10 employees',
          'Sponsor Maker class for kids 12+'
        ]}
      />

      <PriceItem
        title="Platinum"
        yearlyPrice="25,000"
        benefits={[
          'Name one of our shop areas. ie (ACME 3D Printing Lab)',
          'A complimentary customized private training, testing or team building program in our facility',
          'Huge Company name and logo on our Wall of Gratitude',
          'Company logo with hyperlink on Web Site',
          'Company logo displayed at public events external to our facility',
          'Speaking opportunity at one of our public events',
          'Invitation to attend select members only events',
          'Supporting memberships for up to 10 employees',
          'Sponsor Maker class for kids 12+'
        ]}
      />
    </PricingDeck>
    <Callout
      id="support-us"
      title="Support our effort to grow our makerspace."
      text="If you're interested, please reach out or visit one of our monthly open house events. We will give you a tour, answer your questions, and introduce you to some of our members. Contact us for more information."
      link={<Link to="/contact">Contact Us</Link>}
    />
  </Layout>
)

export default SupportPage