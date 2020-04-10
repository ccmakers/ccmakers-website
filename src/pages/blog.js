import React from "react"
import { StaticQuery, graphql } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"
import IntroPageHero from "../components/introPageHero";
import BlogGrid from "../components/blogGrid";

const sortPosts =  (localPosts, sanityPosts) => {
  const lPosts = localPosts.map( n => {
    const node = {
      sortDate: new Date(n.node.frontmatter.sortDate),
      type: "local",
      node: {
        ...n.node
      }
    }
    return node;
  })

  const sPosts = sanityPosts.map( n => {

    const node = {
      sortDate: new Date(n.node.sortDate),
      type: "sanity",
      node: {
        ...n.node
      }
    }
    return node;
  })

  const mergedPosts = lPosts.concat(sPosts).sort((a, b) => b.sortDate - a.sortDate)

  return mergedPosts;
}


const BlogPage = () => (
  <Layout>
    <SEO title="Blog" keywords={[`blog`, `cape cod`, `makers`]} />
    <IntroPageHero
      title="Blog"
    />

    <StaticQuery
      query={postsQuery}
      render={({allMarkdownRemark, allSanityPost}) => {

        const sortedPosts = sortPosts(allMarkdownRemark.edges, allSanityPost.edges);

        console.log(sortedPosts);


        return <BlogGrid entries={sortedPosts} />
      }}
    />
  </Layout>
)

const postsQuery = graphql`
  query BlogPostListing {
    allSanityPost {
      edges {
        node {
          sortDate: publishedAt
          __typename
          slug {
            current
          }
          publishedAt(formatString: "YYYY-MM-DD")
          date: publishedAt(formatString: "MMMM DD, YYYY")
          title
          excerpt
          mainImage {
            asset {
              url
            }
          }
        }
      }
    }
    allMarkdownRemark {
      edges {
        node {
          __typename
          frontmatter {
            sortDate: date
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
