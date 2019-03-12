import React from 'react'
import { css } from '@emotion/core'
import fallBackImage from '../images/cape-makers-things.png';

const style = css`
  margin-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
  background-color: rgba(0, 147, 208, 0.2);

  @media (min-width: 768px) {
    flex-direction: row;
  }

  .blog-cover {
    img {
      display: block;
      width: 100%;
    }

    @media (min-width: 768px) {
      flex: 0 0 25%;
    }

    @media (min-width: 992px) {
      flex: 0 0 33%;
    }
  }

  .blog-content {
    padding: 1rem;

    h3 {
      margin: 0;
    }

    @media (min-width: 768px) {
      flex: 1 1 auto;
    }

    @media (min-width: 992px) {
      font-size: 1.1rem;
    }

    time {
      display: block;
    }
  }
`

const BlogCard = ({
  slug,
  title,
  date,
  summary,
  coverPicture
}) => {
  console.log(coverPicture);
  return (
    <div css={style}>
      {coverPicture ? (
        <a className="blog-cover" href={`/blog${slug}`} target="_blank" rel="noopener noreferrer">
          <img src={coverPicture.childImageSharp.fixed.src} alt={`${title}`} />
        </a>
      ) : (
        <a className="blog-cover" href={`/blog${slug}`} target="_blank" rel="noopener noreferrer">
          <img src={fallBackImage} alt={`${title}`} />
        </a>
      )}
      <div className="blog-content">
        <a href={`/blog${slug}`} target="_blank" rel="noopener noreferrer"><h3>{title}</h3></a>
        <time>{date}</time>
        <p>{summary}</p>
        <a className="button" href={`/blog${slug}`} target="_blank" rel="noopener noreferrer">View More</a>
      </div>
    </div>
  )
}

export default BlogCard
