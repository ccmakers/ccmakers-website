import React, { Component } from 'react'
import { graphql } from 'gatsby';
import { css } from '@emotion/core'

import Layout from './layout';
import SEO from "./seo"
import Container from './container';

const style = css`
  max-width: 800px;
  margin: 1.5rem auto;

  header {
    text-align: center;

    h1 {
      font-weight: 300;
      margin: 0;
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
        />
        <Container>
          <article css={style}>
            <header>
              <h1>{frontmatter.title}</h1>
              <time dateTime={new Date(frontmatter.date).toISOString()}>{new Intl.DateTimeFormat('en-US', {
                year: 'numeric', month: 'long', day: 'numeric',
                timeZone: 'America/New_York'
              }).format(new Date(frontmatter.date))}</time>
            </header>
            <div dangerouslySetInnerHTML={{
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
        summary
        tags
        coverPicture {
          publicURL
          childImageSharp {
            sizes(maxWidth: 1240 ) {
              srcSet
            }
          }
        }
      }
    }
  }
`;