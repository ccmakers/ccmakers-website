import React, { Component } from 'react'
import { graphql } from 'gatsby';
import { css } from '@emotion/core'

import PortableText from "@sanity/block-content-to-react"
import clientConfig from '../../client-config'

import Layout from './layout';
import SEO from "./seo"
import Container from './container';
import PostHeader from './postHeader';

const style = css`
  max-width: 800px;
  margin: 1.5rem auto;

  .cover-picture {
    img {
      width: 100%;
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

class SanityPost extends Component {
  render() {
    const {
      title,
      mainImage,
      author,
      publishedAt,
      _rawBody
    } = this.props.data.sanityPost;


    return (
      <Layout>
        <SEO
          title={title}
          keywords={[`blog`, `cape cod`, `makers`]}
          picture={mainImage.asset.url}
        />
        <Container>
          <article css={style}>
            <PostHeader
              title={title}
              author={author}
              date={publishedAt}
            />

            {mainImage !== null && (
              <picture className="cover-picture">
                <img src={mainImage.asset.url} alt={`${title}`} />
              </picture>
            )}

            <div className="post-content">
              <PortableText
                serializers={{
                  types: {
                    code: ({ node }) => (
                      <pre data-language={node.language}>
                        <code>{node.code}</code>
                      </pre>
                    ),
                  },
                }}
                blocks={_rawBody}
                {...clientConfig.sanity}
              />
            </div>

          </article>
        </Container>
      </Layout>
    )
  }
}

export default SanityPost

export const query = graphql`
  query SanityPostQuery($slug: String!) {
    sanityPost(slug: {current: {eq: $slug }}) {
      id
      title
      slug {
        current
      }
      publishedAt
      mainImage {
        asset {
          url
        }
      }
      author {
        name
        image {
          asset {
            url
          }
        }
      }
      _rawBody
      body {
        _key
        _type
        style
        list
      }
    }
  }
`;