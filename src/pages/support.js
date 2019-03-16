import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from "../components/container";
import IntroPageHero from "../components/introPageHero";
import RichText from "../components/richText";

const SupportPage = (props) => (
  <Layout>
    <SEO title="Support" keywords={[`support`, `donate`, `sponsor`, `cape cod`, `makers`]} />
    <IntroPageHero
      title="Support"
      introText="Please consider support our LaunchPad. We contribute to the community by encouraging entrepreneurship, providing training and support for educators and students, and also workforce development."
    />
    <Container>
      <RichText html={`
        <p>
          Cape Cod Makers is engaged in promoting the Maker and DIY culture on Cape Cod. We do this through meetups, connecting local makers, hosting classes, group activities, promoting shared resources and maker spaces. There is an enormous amount of artistic and technical talent on Cape Cod in a wide variety of areas. Also, there are many people who like to learn new things and improve themselves. We are excited about the possibilities of bringing all these people together on and connecting ideas to grow the maker movement on Cape Cod.
        </p>
      `}>
      </RichText>
    </Container>
  </Layout>
)

export default SupportPage