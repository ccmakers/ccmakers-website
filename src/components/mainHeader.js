import React from "react"
import { Link } from "gatsby"
import { css } from '@emotion/core'
import CCMakersLogo from './ccMakersLogo'

const style = css`
  display: block;

  .logo {
    display: block;
    margin: auto;
    padding: 1rem;
    width: 80%;

    @media (min-width: 576px) {
      max-width: 346px;
    }

    svg {
      margin-bottom: .2rem;
      width: 100%;
      path, polygon {
        fill: #000;
        transition: fill .4s ease;
      }

      #C1, #C2 {
        fill: #0093D0;
      }

      #Symbol {
        fill: #000;
      }
    }

    &:focus,
    &:hover {
      outline: none;

      svg {
        path, polygon {
          fill: #0093D0;
        }
        #Symbol {
          fill: #0093D0;
        }
      }
    }
  }

  nav {
    position: relative;
    z-index: 2;
    height: 2.75rem;
    overflow-y: hidden;
    background-color: #2780E3;

    ul {
      display: flex;
      flex-wrap: nowrap;
      padding-bottom: 1rem;
      margin-top: -1px;
      overflow-x: auto;
      color: rgba(255, 255, 255, .75);
      text-align: center;
      white-space: nowrap;
      -webkit-overflow-scrolling: touch;

      padding-left: 0;
      margin-bottom: 0;
      list-style: none;

      @media (min-width: 576px) {
        justify-content: center;
      }

      li {
        padding-top: .75rem;
        padding-bottom: .75rem;
        padding-right: 0.5rem;
        padding-left: 0.5rem;
        color: rgba(#fff, .8);
        transition: color .4s ease, background-color .4s ease;

        &:hover {
          color: #fff;
        }

        &:focus {
          outline: none;
          background-color: rgba(#fff, .1);
        }

        a {
          color: inherit;

          &:hover {
            text-decoration: none;
          }

          &.active {
            color: #fff;
          }
        }
      }
    }
  }
`

const MainHeader = () => {
  return (
    <header css={style}>
      <Link to='/' className="logo">
        <CCMakersLogo />
      </Link>
      <nav>
        <ul>
          <li>
            <Link to='/launchpad' activeClassName="active">LaunchPad</Link>
          </li>

          <li>
            <Link to='/events' activeClassName="active">Events</Link>
          </li>

          <li>
            <Link to='/membership' activeClassName="active">Membership</Link>
          </li>

          <li>
            <Link to='/support' activeClassName="active">Support</Link>
          </li>

          <li>
            <Link to='/blog' activeClassName="active">Blog</Link>
          </li>

          <li>
            <Link to='/about' activeClassName="active">About</Link>
          </li>

          <li>
            <Link to='/contact' activeClassName="active">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default MainHeader
