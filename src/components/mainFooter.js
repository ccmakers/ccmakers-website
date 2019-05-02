import React from 'react'
import { css } from '@emotion/core'
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import Container from './container'

import MailchimpSubscribe from "react-mailchimp-subscribe"

const url = "https://capecodmakers.us6.list-manage.com/subscribe/post?u=6926dc1ce11c58404c247c393&amp;id=86c3fe1a4b";

const style = css`
  padding: 2rem 0;
  border-top: 2px solid #0093D0;
  font-family: 'Open Sans', sans-serif;
  .wrapper {
    display: flex;
    flex-direction: column-reverse;
  }

  .copy {
    text-align: center;
    padding: 1rem 0 0;

    .newsletter {
      padding: 1rem 0;

      > div > div {
        background-color: #dfeff5;
        padding: 1rem;
        max-width: 500px;
        margin: auto;
        font-family: "Open Sans",sans-serif;

        a {
          font-family: "Open Sans",sans-serif;
        }
      }

      input {
        margin-top: 1rem;
        padding: 8px 4px;
        border: 1px solid #0093D0;
        border-right: 0;
        &:focus {
          outline: none;
        }
      }

      button {
        margin-top: 1rem;
        padding: 8px;
        border: 1px solid #0093D0;
        background-color: #0093D0;
        color: #fff;
        border-left: 0;

        &:hover {
          background-color: #80c6e6;
          cursor: pointer;
        }
      }
    }
  }

  .social {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: row;
    justify-content: center;

    li {
      flex: 0 0 auto;
      margin: 0 .5rem;

      a {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        font-size: 20px;
        width: 40px;
        height: 40px;
        border-radius: 50%;

        background: #55ACEE;
        color: white;

        &.sm-Facebook {
          background-color: #3B5998;
        }

        &.sm-Twitter {
          background-color: #55ACEE;
        }

        &.sm-LinkedIn {
          background-color: #007bb5;
        }

        &:hover {
          opacity: 0.8;
        }
      }
    }
  }
`

const MainFooter = ({ socialMediaLinks }) => {
  return (
    <footer css={style}>
      <Container>
        <div className="wrapper">
          <div className="copy">
            Copyright &copy; {new Date().getFullYear()} Cape Cod Makers, Inc.

            <div className="newsletter">
              <MailchimpSubscribe url={url} />
            </div>
          </div>
          <ul className="social">
            { socialMediaLinks && socialMediaLinks.map( link => (
              <li key={link.name}>
                <OutboundLink className={`sm-${link.name}`} href={link.url} target="_blank" rel="noopener noreferrer">
                  {link.name === 'Facebook' && <FaFacebookF />}
                  {link.name === 'LinkedIn' && <FaLinkedinIn />}
                  {link.name === 'Twitter' && <FaTwitter />}
                </OutboundLink>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  )
}

export default MainFooter
