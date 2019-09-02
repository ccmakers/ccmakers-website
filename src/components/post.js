import React, { Component } from 'react'
import { graphql } from 'gatsby';
import { css } from '@emotion/core'

import Layout from './layout';
import SEO from "./seo"
import Container from './container';
import PostHeader from './postHeader';

const style = css`
  max-width: 800px;
  margin: 1.5rem auto;

  .cover-picture {
    img {
      max-width: 100%;
      margin: 1rem auto;
    }
  }

  .post-content {
    max-width: 740px;
    margin: 0 auto;

    font-size: 20px;

    p {
      margin: 25px 0;
    }

    img {
      max-width: 100%;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-family: "Open Sans";
      font-weight: 300;
      margin-bottom: 20px !important;
    }
  }

  .gatsby-highlight {
    pre {
      background-color: rgba(0, 147, 208, 0.2);

      code {
        background-color: transparent;
      }
    }
  }
`

class Post extends Component {
  render() {
    const { frontmatter, html } = this.props.data.markdownRemark;
    return (
      <Layout>
        <SEO
          title={frontmatter.title}
          keywords={[`blog`, `cape cod`, `makers`]}
          picture={`https://capecodmakers.org${frontmatter.coverPicture.childImageSharp.fixed.src}`}
        />
        <Container>
          <article css={style}>
            <PostHeader post={frontmatter} />

            {frontmatter.coverPicture !== null && (
              <picture className="cover-picture">
                <img src={frontmatter.coverPicture.childImageSharp.fixed.src} alt={`${frontmatter.title}`} />
              </picture>
            )}
            <div className="post-content" dangerouslySetInnerHTML={{
              __html: html
            }} />
          </article>
        </Container>
      </Layout>
    )
  }
}

export default Post

export const query = graphql`
  query PostQuery($slug: String!) {
    markdownRemark(frontmatter: {
      slug: {
        eq: $slug
      }
    }) {
      html
      frontmatter {
        title
        date
        slug
        author {
          id
          name
          github
          website
          pic {
            childImageSharp {
              fixed(width: 30, height: 30 ) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
        summary
        tags
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
`;