import React from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'

const NavigationLinks1 = (props) => {
  return (
    <>
      <nav className={`navigation-links1-nav ${props.rootClassName} `}>
        <Link href="/about">
          <a className="navigation-links1-link">{props.text}</a>
        </Link>
        <Link href="/docs">
          <a className="navigation-links1-link1">{props.text1}</a>
        </Link>
        <span className="navigation-links1-text">{props.text3}</span>
        <Link href="/team">
          <a className="navigation-links1-link2">{props.text31}</a>
        </Link>
      </nav>
      <style jsx>
        {`
          .navigation-links1-nav {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .navigation-links1-link {
            font-size: 20px;
            transition: 0.3s;
            text-decoration: none;
          }
          .navigation-links1-link:hover {
            color: #1557be;
            font-size: 22px;
            font-style: normal;
            font-weight: 700;
            text-decoration: line-through none;
          }
          .navigation-links1-link1 {
            font-size: 20px;
            transition: 0.3s;
            margin-left: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .navigation-links1-link1:hover {
            color: #1137b1;
            font-size: 22px;
            font-style: normal;
            font-weight: 700;
          }
          .navigation-links1-text {
            font-size: 20px;
            transition: 0.3s;
            margin-left: var(--dl-space-space-twounits);
          }
          .navigation-links1-text:hover {
            color: #1825b7;
            font-size: 22px;
            font-style: normal;
            font-weight: 700;
          }
          .navigation-links1-link2 {
            font-size: 20px;
            transition: 0.3s;
            margin-left: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .navigation-links1-link2:hover {
            color: #1719b1;
            font-size: 22px;
            font-style: normal;
            font-weight: 700;
          }

          .navigation-links1-root-class-name10 {
            align-self: center;
            margin-right: var(--dl-space-space-threeunits);
          }

          @media (max-width: 767px) {
            .navigation-links1-nav {
              align-items: flex-start;
              flex-direction: column;
            }
            .navigation-links1-link {
              margin-bottom: var(--dl-space-space-unit);
            }
            .navigation-links1-link1 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .navigation-links1-text {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .navigation-links1-link2 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

NavigationLinks1.defaultProps = {
  text31: 'Team',
  text2: 'Pricing',
  text3: 'Tool',
  rootClassName: '',
  text: 'About',
  text1: 'Docs',
  text4: 'Blog',
}

NavigationLinks1.propTypes = {
  text31: PropTypes.string,
  text2: PropTypes.string,
  text3: PropTypes.string,
  rootClassName: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
  text4: PropTypes.string,
}

export default NavigationLinks1
