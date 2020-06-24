import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { css } from "@emotion/core"
import Layout from "../components/layout"
import SEO from "../components/seo"
import IntroPageHero from "../components/introPageHero"
import Container from "../components/container"

const style = css`
  margin-bottom: 3rem;

  .row {
    width: 100%;
    display: block;

    @media (min-width: 568px) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-auto-rows: auto;
      gap: 2rem 4rem;
    }

    @media (min-width: 768px) {
      grid-template-columns: 1fr 1fr 1fr;
    }

    @media (min-width: 992px) {
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }

    @media (min-width: 1100px) {
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    }
  }

  .profile {
    display: block;

    &--wrapper {
      picture {
        position: relative;
        border-radius: 50%;
        display: block;
        img {
          width: 100%;
          border-radius: 50%;
        }
      }
    }

    &--name {
      text-align: center;
      font-size: 1.4rem;
    }
  }
`;

const CovidVolunteersPage = () => (
  <Layout>
    <SEO title="COVID Volunteers" keywords={[`covid`, `volunteers`, `cape cod`, `makers`]} />
    <IntroPageHero
      title="COVID-19 Faceshield Maker Community"
      introText="Thanks to our community of volunteers, we printed and devilered over 7000 faceshields to Cape Cod Healthcare, Nursing Homes and Assisted Living Facilities, and others."
    />
    <Container>
      <div css={style}>
        <StaticQuery query={pageQuery} render={data => {

          const pictures = data.allFile.edges.map(edge => edge.node)
          const profiles = data.allGoogleVolunteersSheet.edges.filter(edge => edge.node.isAnonymous_ !== "Yes").map(edge => {
            return {
              ...edge.node,
              picture: pictures.find(pic => pic.email === edge.node.emailAddress)
            }
          })

          return (
            <div className="row">
              {profiles.map(profile => (
                <div className="profile" key={profile.id}>
                  <div className="profile--wrapper">
                    <picture>
                      {
                        profile.picture === undefined
                        ? <img src="/images/volunteer-avatar.png" alt="Volunteer Avatar"/>
                        : <img src={profile.picture.publicURL} alt="Volunteer Avatar"/>
                      }
                    </picture>
                    <div className="profile--name">
                      {`${profile.firstName} ${profile.lastName}`}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )
        }} />
      </div>
    </Container>
  </Layout>
)

export default CovidVolunteersPage

export const pageQuery = graphql`
  query {
    allGoogleVolunteersSheet {
      edges {
        node {
          id
          firstName
          lastName
          emailAddress
          isAnonymous_
        }
      }
    }
    allFile(filter: {relativeDirectory: {eq: "covid-volunteers"}}) {
      edges {
        node {
          email: name
          publicURL
        }
      }
    }
  }
`