const path = require('path')
const axios = require('axios')
const crypto = require('crypto')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise((resolve) => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                slug
              }
            }
          }
        }

        allSanityPost {
          edges {
            node {
              slug {
                current
              }
              publishedAt(formatString: "YYYY-MM-DD")
            }
          }
        }
      }
    `).then(results => {

      results.data.allMarkdownRemark.edges.forEach(({node}) => {
        const { slug } = node.frontmatter
        createPage({
          path: `/blog${slug}`,
          component: path.resolve('./src/components/post.js'),
          context: {
            slug: slug,
          }
        });
      })

      results.data.allSanityPost.edges.forEach(({node}) => {
        const { slug, publishedAt } = node
        createPage({
          path: `/blog/${publishedAt}-${slug.current}`,
          component: path.resolve('./src/components/sanityPost.js'),
          context: {
            slug: slug.current,
          }
        });
      })

      resolve();
    })
  });
}