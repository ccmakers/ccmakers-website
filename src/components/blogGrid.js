import React, { Component } from 'react'
import { css } from '@emotion/core'

import Container from './container'
import BlogCard from './blogCard';

const style = css`
  margin-top: 1.5rem;
  margin-bottom: 3rem;
  display: flex;
  flex-direction: column;
`

class BlogGrid extends Component {
  render() {
    const {entries} = this.props
    return (
      <Container>
        <div css={style}>
          {entries.map(entry => (
            entry.type === 'local'
            ? <BlogCard
                key={entry.node.frontmatter.slug}
                uri={`/blog${entry.node.frontmatter.slug}`}
                title={entry.node.frontmatter.title}
                date={entry.node.frontmatter.date}
                summary={entry.node.frontmatter.summary}
                coverPicture={entry.node.frontmatter.coverPicture.childImageSharp.fixed.src}
              />
            : <BlogCard
                key={entry.node.slug.current}
                uri={`/blog/${entry.node.publishedAt}-${entry.node.slug.current}`}
                title={entry.node.title}
                date={entry.node.date}
                summary={entry.node.excerpt}
                coverPicture={entry.node.mainImage.asset.url}
              />
          ))}
        </div>
      </Container>
    )
  }
}

export default BlogGrid
