const path = require('path');

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

      resolve();
    })
  });
}