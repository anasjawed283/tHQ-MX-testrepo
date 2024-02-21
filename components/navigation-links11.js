import React from 'react'

import PropTypes from 'prop-types'

const NavigationLinks11 = (props) => {
  return (
    <>
      <nav className={`navigation-links11-nav ${props.rootClassName} `}>
        <span className="navigation-links11-text">{props.text}</span>
        <span className="navigation-links11-text1">{props.text1}</span>
        <span className="navigation-links11-text2">{props.text3}</span>
        <span className="navigation-links11-text3">{props.text31}</span>
      </nav>
      <style jsx>
        {`
          .navigation-links11-nav {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .navigation-links11-text {
            text-decoration: none;
          }
          .navigation-links11-text1 {
            margin-left: var(--dl-space-space-twounits);
          }
          .navigation-links11-text2 {
            margin-left: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .navigation-links11-text3 {
            margin-left: var(--dl-space-space-twounits);
            text-decoration: none;
          }

          @media (max-width: 767px) {
            .navigation-links11-nav {
              align-items: flex-start;
              flex-direction: column;
            }
            .navigation-links11-text {
              margin-bottom: var(--dl-space-space-unit);
            }
            .navigation-links11-text1 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .navigation-links11-text2 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .navigation-links11-text3 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

NavigationLinks11.defaultProps = {
  text: 'About',
  text1: 'Docx',
  rootClassName: '',
  text2: 'Pricing',
  text31: 'Team',
  text4: 'Blog',
  text3: 'Tool',
}

NavigationLinks11.propTypes = {
  text: PropTypes.string,
  text1: PropTypes.string,
  rootClassName: PropTypes.string,
  text2: PropTypes.string,
  text31: PropTypes.string,
  text4: PropTypes.string,
  text3: PropTypes.string,
}

export default NavigationLinks11
