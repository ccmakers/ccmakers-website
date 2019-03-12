import React from "react"
import { StaticQuery, graphql } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"
import IntroPageHero from "../components/introPageHero";
import BlogGrid from "../components/blogGrid";


const BlogPage = () => (
  <Layout>
    <SEO title="Blog" keywords={[`blog`, `cape cod`, `makers`]} />
    <IntroPageHero
      title="Blog"
    />

    <StaticQuery
      query={postsQuery}
      render={({allMarkdownRemark}) => (
        <BlogGrid entries={allMarkdownRemark.edges} />
      )}
    />
  </Layout>
)

const postsQuery = graphql`
  query BlogPostListing {
    allMarkdownRemark(
      limit: 10,
      sort: {
        order: DESC,
        fields: [frontmatter___date]
      }
    ) {
      edges {
        node {
          excerpt
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            slug
            summary
            coverPicture {
              publicURL
              childImageSharp {
                fixed(width: 800, height: 600 ) {
                  src
                }
              }
            }
          }
        }
      }
    }
  }
`

export default BlogPage
