import React from 'react'
import { css } from '@emotion/core'
import Img from 'gatsby-image'
const style = css`

  margin: 0 auto 2rem;
  max-width: 740px;

  h1 {
    font-weight: 300;
    margin: 0;
    margin-bottom: 1rem;
  }

  .post-meta {
    display: flex;
    justify-content: flex-start;
    align-items: center;

    &--details {
      a {
        text-decoration: none;
        font-family: "Open Sans";
        color: #2780E3;
        transition: all 100ms cubic-bezier(0.4, 0, 0.2, 1);

        &:hover {
          color: #005dc5;
        }
      }
    }
  }

  .gatsby-image-wrapper {
    border-radius: 50%;
    margin-right: .5rem;
  }
`
const PostHeader = ({ post }) => {
  return (
    <header css={style}>
      <h1>{post.title}</h1>
      <div className="post-meta">
        {post.author && post.author.pic !== null &&(
          <Img fixed={post.author.pic.childImageSharp.fixed} />
        )}
        <div className="post-meta--details">

          {post.author && (
            <a href={post.author.website || `#` } target="_blank" rel="noopener noreferrer">
              {post.author.name}
            </a>
          )}

          {post.author && ` on `}
          <time dateTime={new Date(post.date).toISOString()}>{new Intl.DateTimeFormat('en-US', {
            year: 'numeric', month: 'long', day: 'numeric',
            timeZone: 'America/New_York'
          }).format(new Date(post.date))}</time>
        </div>
      </div>
    </header>
  )
}

export default PostHeader
