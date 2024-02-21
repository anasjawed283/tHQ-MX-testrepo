import React from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'

const BtnGroup = (props) => {
  return (
    <>
      <div className="btn-group-btn-group">
        <Link href="/output-insta1">
          <a className="btn-group-link button">
            <span className="btn-group-text">{props.text}</span>
            <svg viewBox="0 0 1024 1024" className="btn-group-icon">
              <path d="M512 92.2c136.8 0 153 0.6 206.8 3 50 2.2 77 10.6 95 17.6 23.8 9.2 41 20.4 58.8 38.2 18 18 29 35 38.4 58.8 7 18 15.4 45.2 17.6 95 2.4 54 3 70.2 3 206.8s-0.6 153-3 206.8c-2.2 50-10.6 77-17.6 95-9.2 23.8-20.4 41-38.2 58.8-18 18-35 29-58.8 38.4-18 7-45.2 15.4-95 17.6-54 2.4-70.2 3-206.8 3s-153-0.6-206.8-3c-50-2.2-77-10.6-95-17.6-23.8-9.2-41-20.4-58.8-38.2-18-18-29-35-38.4-58.8-7-18-15.4-45.2-17.6-95-2.4-54-3-70.2-3-206.8s0.6-153 3-206.8c2.2-50 10.6-77 17.6-95 9.2-23.8 20.4-41 38.2-58.8 18-18 35-29 58.8-38.4 18-7 45.2-15.4 95-17.6 53.8-2.4 70-3 206.8-3zM512 0c-139 0-156.4 0.6-211 3-54.4 2.4-91.8 11.2-124.2 23.8-33.8 13.2-62.4 30.6-90.8 59.2-28.6 28.4-46 57-59.2 90.6-12.6 32.6-21.4 69.8-23.8 124.2-2.4 54.8-3 72.2-3 211.2s0.6 156.4 3 211c2.4 54.4 11.2 91.8 23.8 124.2 13.2 33.8 30.6 62.4 59.2 90.8 28.4 28.4 57 46 90.6 59 32.6 12.6 69.8 21.4 124.2 23.8 54.6 2.4 72 3 211 3s156.4-0.6 211-3c54.4-2.4 91.8-11.2 124.2-23.8 33.6-13 62.2-30.6 90.6-59s46-57 59-90.6c12.6-32.6 21.4-69.8 23.8-124.2 2.4-54.6 3-72 3-211s-0.6-156.4-3-211c-2.4-54.4-11.2-91.8-23.8-124.2-12.6-34-30-62.6-58.6-91-28.4-28.4-57-46-90.6-59-32.6-12.6-69.8-21.4-124.2-23.8-54.8-2.6-72.2-3.2-211.2-3.2v0z"></path>
              <path d="M512 249c-145.2 0-263 117.8-263 263s117.8 263 263 263 263-117.8 263-263c0-145.2-117.8-263-263-263zM512 682.6c-94.2 0-170.6-76.4-170.6-170.6s76.4-170.6 170.6-170.6c94.2 0 170.6 76.4 170.6 170.6s-76.4 170.6-170.6 170.6z"></path>
              <path d="M846.8 238.6c0 33.91-27.49 61.4-61.4 61.4s-61.4-27.49-61.4-61.4c0-33.91 27.49-61.4 61.4-61.4s61.4 27.49 61.4 61.4z"></path>
            </svg>
          </a>
        </Link>
        <Link href="/output-t1">
          <a className="btn-group-link1 button">
            <span className="btn-group-text1">{props.text1}</span>
            <svg viewBox="0 0 1024 1024" className="btn-group-icon4">
              <path d="M1024 226.4c-37.6 16.8-78.2 28-120.6 33 43.4-26 76.6-67.2 92.4-116.2-40.6 24-85.6 41.6-133.4 51-38.4-40.8-93-66.2-153.4-66.2-116 0-210 94-210 210 0 16.4 1.8 32.4 5.4 47.8-174.6-8.8-329.4-92.4-433-219.6-18 31-28.4 67.2-28.4 105.6 0 72.8 37 137.2 93.4 174.8-34.4-1-66.8-10.6-95.2-26.2 0 0.8 0 1.8 0 2.6 0 101.8 72.4 186.8 168.6 206-17.6 4.8-36.2 7.4-55.4 7.4-13.6 0-26.6-1.4-39.6-3.8 26.8 83.4 104.4 144.2 196.2 146-72 56.4-162.4 90-261 90-17 0-33.6-1-50.2-3 93.2 59.8 203.6 94.4 322.2 94.4 386.4 0 597.8-320.2 597.8-597.8 0-9.2-0.2-18.2-0.6-27.2 41-29.4 76.6-66.4 104.8-108.6z"></path>
            </svg>
          </a>
        </Link>
        <Link href="/output-y1">
          <a className="btn-group-link2 button">
            <span className="btn-group-text2">{props.text2}</span>
            <svg viewBox="0 0 1024 1024" className="btn-group-icon6">
              <path d="M1013.8 307.2c0 0-10-70.6-40.8-101.6-39-40.8-82.6-41-102.6-43.4-143.2-10.4-358.2-10.4-358.2-10.4h-0.4c0 0-215 0-358.2 10.4-20 2.4-63.6 2.6-102.6 43.4-30.8 31-40.6 101.6-40.6 101.6s-10.2 82.8-10.2 165.8v77.6c0 82.8 10.2 165.8 10.2 165.8s10 70.6 40.6 101.6c39 40.8 90.2 39.4 113 43.8 82 7.8 348.2 10.2 348.2 10.2s215.2-0.4 358.4-10.6c20-2.4 63.6-2.6 102.6-43.4 30.8-31 40.8-101.6 40.8-101.6s10.2-82.8 10.2-165.8v-77.6c-0.2-82.8-10.4-165.8-10.4-165.8zM406.2 644.8v-287.8l276.6 144.4-276.6 143.4z"></path>
            </svg>
          </a>
        </Link>
      </div>
      <style jsx>
        {`
          .btn-group-btn-group {
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: row;
          }
          .btn-group-link {
            margin: var(--dl-space-space-oneandhalfunits);
            display: flex;
            font-size: 0.75rem;
            font-style: normal;
            transition: 0.3s;
            font-weight: 600;
            padding-top: var(--dl-space-space-unit);
            border-width: 1px;
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-unit);
            text-transform: uppercase;
            text-decoration: none;
          }
          .btn-group-link:hover {
            color: #fffefe;
            transform: scale(1.02);
            background-image: linear-gradient(
              90deg,
              rgb(204, 33, 135) 24%,
              rgb(151, 21, 98) 42%,
              rgb(221, 81, 41) 84%
            );
          }
          .btn-group-text {
            align-self: center;
          }
          .btn-group-icon {
            width: 20px;
            height: 20px;
            margin-top: 0px;
            transition: 0.3s;
            margin-left: var(--dl-space-space-halfunit);
            margin-right: var(--dl-space-space-halfunit);
            margin-bottom: 0px;
          }
          .btn-group-icon:hover {
            fill: #d9d9d9;
          }
          .btn-group-link1 {
            margin: var(--dl-space-space-oneandhalfunits);
            display: flex;
            font-size: 0.75rem;
            font-style: normal;
            transition: 0.3s;
            font-weight: 600;
            padding-top: var(--dl-space-space-unit);
            border-width: 1px;
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-unit);
            text-transform: uppercase;
            text-decoration: none;
          }
          .btn-group-link1:hover {
            color: #ffffff;
            transform: scale(1.02);
            background-color: #0c7aad;
          }
          .btn-group-text1 {
            align-self: center;
          }
          .btn-group-icon4 {
            width: 20px;
            height: 20px;
            transition: 0.3s;
            margin-left: var(--dl-space-space-halfunit);
            margin-right: var(--dl-space-space-halfunit);
          }
          .btn-group-icon4:hover {
            fill: #fdfdfd;
          }
          .btn-group-link2 {
            margin: var(--dl-space-space-oneandhalfunits);
            display: flex;
            font-size: 0.75rem;
            font-style: normal;
            transition: 0.3s;
            font-weight: 600;
            padding-top: var(--dl-space-space-unit);
            border-width: 1px;
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-unit);
            text-transform: uppercase;
            text-decoration: none;
          }
          .btn-group-link2:hover {
            color: #fffcfc;
            transform: scale(1.02);
            background-color: #c01212;
          }
          .btn-group-text2 {
            align-self: center;
          }
          .btn-group-icon6 {
            width: 20px;
            height: 20px;
            transition: 0.3s;
            margin-left: var(--dl-space-space-halfunit);
            margin-right: var(--dl-space-space-halfunit);
          }
          .btn-group-icon6:hover {
            fill: #d9d9d9;
          }
          @media (max-width: 479px) {
            .btn-group-btn-group {
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  )
}

BtnGroup.defaultProps = {
  text2: 'Youtubeㅤ',
  text: 'Instagram',
  text1: 'twitterㅤ',
}

BtnGroup.propTypes = {
  text2: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
}

export default BtnGroup
