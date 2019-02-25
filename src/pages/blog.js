import React from "react"
import { Link, StaticQuery, graphql } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"


const BlogPage = () => (
  <Layout>
    <SEO title="Blog" keywords={[`blog`, `cape cod`, `makers`]} />
    <StaticQuery
      query={postsQuery}
      render={({allMarkdownRemark}) => (
        allMarkdownRemark.edges.map(({node}) => {
          const {
            slug,
            title,
            date,
            summary
          } = node.frontmatter;
          return (
            <div
              key={slug}
              className="post">
              <Link to={`/blog${slug}`}>
                <h2>{title}</h2>
              </Link>
              <p>{date}</p>
              {
                summary && summary.length > 0
                ? <p>{summary}</p>
                : <p>{node.excerpt}</p>
              }
              <Link class="read-more" to={`/blog${slug}`}>Read More</Link>
            </div>
          );
        })
      )}
    />
  </Layout>
)

const postsQuery = graphql`
  query BlogPostListing {
    allMarkdownRemark(limit: 10, sort: {
    order: DESC,
    fields: [frontmatter___date]
  }) {
      edges {
        node {
          excerpt
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            slug
            summary
          }
        }
      }
    }
  }
`

export default BlogPage
