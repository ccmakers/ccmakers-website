import React from 'react'
import { css } from '@emotion/core'

import Container from './container';
import MailchimpSubscribe from "react-mailchimp-subscribe"
import NewsletterForm from './NewsletterForm';

const url = "https://capecodmakers.us6.list-manage.com/subscribe/post?u=6926dc1ce11c58404c247c393&amp;id=86c3fe1a4b";

const style = css`

  border-top: 2px solid #0093D0;
  background-color: #e8f7fe;
  padding: 3.5rem 0 4rem;
  text-align: center;

  .wrapper {
    max-width: 800px;
    margin: 0 auto;

    br {
      display: none;

      @media (min-width: 576px) {
        display: inline;
      }
    }
  }

  h2 {
    margin: 0;
    font-weight: 300;
    font-size: 1.6rem;

    @media (min-width: 576px) {
      font-size: 2rem;
    }
  }

  p {
    font-weight: 300;
    @media (min-width: 576px) {
      font-size: 1.2rem;
    }
  }
`
const NewsletterCTA = () => {
  return (
    <div css={style}>
      <Container>
        <div className="wrapper">
          <h2>Get Our Newsletter</h2>
          <p>Join our newsletter bellow and recieve updates<br /> on events, classes and promotion.</p>
          <div className="newsletter">
            <MailchimpSubscribe
              url={url}
              render={({ subscribe, status, message }) => (
                <NewsletterForm
                  status={status}
                  message={message}
                  onValidated={formData => subscribe(formData)}
                />
              )}
            />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default NewsletterCTA
