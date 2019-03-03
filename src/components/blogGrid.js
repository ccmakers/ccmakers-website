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
          {entries.map(({node}) => (
            <BlogCard key={node.frontmatter.slug}
              {...node.frontmatter }
            />
          ))}
        </div>
      </Container>
    )
  }
}

export default BlogGrid
