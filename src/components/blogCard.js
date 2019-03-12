import React from 'react'
import { Link } from "gatsby"
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
  console.log(slug);
  return (
    <div css={style}>
      {coverPicture ? (
        <Link className="blog-cover" to={`/blog${slug}`}>
          <img src={coverPicture.childImageSharp.fixed.src} alt={`${title}`} />
        </Link>
      ) : (
        <Link className="blog-cover" to={`/blog${slug}`}>
          <img src={fallBackImage} alt={`${title}`} />
        </Link>
      )}
      <div className="blog-content">
        <Link to={`/blog${slug}`}><h3>{title}</h3></Link>
        <time>{date}</time>
        <p>{summary}</p>
        <Link className="button" to={`/blog${slug}`}>View More</Link>
      </div>
    </div>
  )
}

export default BlogCard
