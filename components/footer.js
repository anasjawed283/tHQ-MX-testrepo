import React from 'react'

import PropTypes from 'prop-types'

const Footer = (props) => {
  return (
    <>
      <footer className="footer-footer">
        <img
          alt={props.imageAlt}
          src={props.imageSrc}
          className="footer-image"
        />
        <span className="footer-text">{props.text}</span>
      </footer>
      <style jsx>
        {`
          .footer-footer {
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            max-width: 100%;
            min-width: 100%;
            align-items: center;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: space-between;
            background-color: #d2cdcd;
          }
          .footer-image {
            width: 259px;
            height: 81px;
            align-self: flex-end;
            object-fit: cover;
          }
          .footer-text {
            align-self: flex-end;
          }
          @media (max-width: 767px) {
            .footer-footer {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .footer-text {
              text-align: center;
              margin-left: var(--dl-space-space-unit);
              margin-right: var(--dl-space-space-unit);
            }
          }
          @media (max-width: 479px) {
            .footer-footer {
              padding: var(--dl-space-space-unit);
              flex-direction: column;
            }
            .footer-image {
              margin-bottom: var(--dl-space-space-unit);
            }
            .footer-text {
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

Footer.defaultProps = {
  imageSrc: '/img_20230516_115045-removebg-preview-200h.png',
  text: '© 2023 PixelPioneers, All Rights Reserved.',
  imageAlt: 'logo',
}

Footer.propTypes = {
  imageSrc: PropTypes.string,
  text: PropTypes.string,
  imageAlt: PropTypes.string,
}

export default Footer
