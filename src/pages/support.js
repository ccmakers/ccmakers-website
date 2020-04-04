import React from "react"
import { css } from '@emotion/core'
import { useQueryParam } from "gatsby-query-params";

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"
import IntroPageHero from "../components/introPageHero";
import Callout from "../components/callout";
import PricingDeck from "../components/pricingDeck";
import PriceItem from "../components/priceItem";

const style = css`
  border-top: 2px solid #0093D0;
  border-bottom: 2px solid #0093D0;
  background-color: #e8f7fe;
  padding: 3.5rem 0 4rem;
  text-align: center;
  margin-bottom: 3rem;

  .wrapper {
    max-width: 800px;
    margin: 0 auto;

    br {
      display: none;

      @media (min-width: 576px) {
        display: inline;
      }
    }
  }

  h2 {
    margin: 0;
    font-weight: 600;
    font-size: 1.6rem;

    @media (min-width: 576px) {
      font-size: 2rem;
    }
  }

  p {
    font-weight: 300;
    line-height: 1.6;
    @media (min-width: 576px) {
      font-size: 1.2rem;
    }

    strong {
      font-weight: 600;
    }
  }

  button {
    display: inline-block;
    padding: .5rem 1rem;
    font-size: 1.25rem;
    line-height: 1.5;
    border-radius: .3rem;
    background-color: #0093D0;
    color: #fff;
    font-family: "Open Sans";

    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;

    &:hover {
      text-decoration: none;
      background-color: #11a7ea;
      cursor: pointer;
    }
  }

  small {
    display: block;
  }
`

const SupportPage = (props) => {

  const isSSR = typeof window === "undefined"

  let success = false

  if (!isSSR) {
    success = useQueryParam('success', '');
  }


  return (
    <Layout>
      <SEO title="Support" keywords={[`support`, `donate`, `sponsor`, `cape cod`, `makers`]} />
      <IntroPageHero
        title="Support"
        introText="Please consider supporting our LaunchPad MakerSpace. We contribute to the community by encouraging entrepreneurship, providing training and support for educators and students, and also workforce development."
      />
      <div css={style}>
        <div className="wrapper">
          <h2>Donate</h2>
          <p><strong>Cape Cod Makers</strong> is a 501(c)(3) non-profit organization, and your donations are tax-deductible. Your investment in us will allow us to expand our offerings, both in equipment and training.</p>

          {success !== null && success ? (
            <h3>Thanks for your donation!</h3>
          ) : (
            <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
              <input type="hidden" name="cmd" value="_s-xclick" />
              <input type="hidden" name="hosted_button_id" value="VJMW2DNR7PHTA" />
              <button type="submit">Make A Donation</button>
              <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
              <small>Powered by Paypal</small>
            </form>
          )}
        </div>
      </div>
      <PricingDeck>
      <PriceItem
          id="supporter"
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
          id="premium-sponsor"
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
          id="gold-partner"
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
          id="platinum"
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
}

export default SupportPage