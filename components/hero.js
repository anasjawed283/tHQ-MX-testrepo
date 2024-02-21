import React from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'

const Hero = (props) => {
  return (
    <>
      <div className="hero-hero">
        <div className="hero-container">
          <h1 className="hero-text">{props.heading}</h1>
          <h2 className="hero-text1">{props.heading1}</h2>
          <span className="hero-text2">{props.text}</span>
          <div className="hero-btn-group">
            <Link href="/about">
              <a className="hero-link button">{props.button}</a>
            </Link>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .hero-hero {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-twounits);
            position: relative;
            max-width: var(--dl-size-size-maxwidth);
            min-height: 80vh;
            align-items: center;
            padding-right: 32px;
            flex-direction: row;
            justify-content: space-between;
          }
          .hero-container {
            height: 346px;
            display: flex;
            margin-left: var(--dl-space-space-twounits);
            flex-direction: column;
          }
          .hero-text {
            font-size: 3rem;
          }
          .hero-text1 {
            margin-top: var(--dl-space-space-unit);
            font-weight: 600;
            margin-bottom: var(--dl-space-space-unit);
          }
          .hero-text2 {
            align-self: center;
            margin-top: 0px;
            padding-top: -20px;
            padding-left: 0px;
            margin-bottom: 0px;
            padding-right: 0px;
            padding-bottom: -20px;
          }
          .hero-btn-group {
            height: 73px;
            display: flex;
            position: relative;
            margin-top: 5px;
            align-items: center;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
          }
          .hero-link {
            width: 161px;
            margin-top: 5px;
            transition: 0.3s;
            margin-left: var(--dl-space-space-halfunit);
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .hero-link:hover {
            transform: scale(1.02);
          }
          @media (max-width: 991px) {
            .hero-hero {
              padding: var(--dl-space-space-threeunits);
              flex-direction: column;
            }
            .hero-container {
              align-items: center;
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .hero-text {
              text-align: center;
            }
            .hero-text1 {
              text-align: center;
            }
            .hero-text2 {
              text-align: center;
              padding-left: var(--dl-space-space-fourunits);
            }
          }
          @media (max-width: 767px) {
            .hero-hero {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
          }
          @media (max-width: 479px) {
            .hero-hero {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .hero-container {
              margin-bottom: var(--dl-space-space-unit);
            }
            .hero-text2 {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .hero-btn-group {
              flex-direction: column;
            }
            .hero-link {
              margin-top: var(--dl-space-space-unit);
              margin-left: 0px;
            }
          }
        `}
      </style>
    </>
  )
}

Hero.defaultProps = {
  text: 'Welcome to our social media monitoring tool website, where we are dedicated to helping you safeguard your online presence. Our team of cybersecurity experts has developed a range of advanced tools and resources to help you monitor your social media activity and stay protected against cyber threats.\n',
  imageSrc:
    'https://uploads-ssl.webflow.com/6304f407692989e8cf58e801/634877da464816e92ccb3998_photo%20(1).gif',
  imageAlt: 'image',
  heading1: 'Who we are? Why PostPatrol?',
  heading: 'About Us',
  button: 'Read More',
}

Hero.propTypes = {
  text: PropTypes.string,
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
  heading1: PropTypes.string,
  heading: PropTypes.string,
  button: PropTypes.string,
}

export default Hero
