import React from 'react'

import PropTypes from 'prop-types'

const ViewStats = (props) => {
  return (
    <>
      <div className={`view-stats-container ${props.rootClassName} `}>
        <button className="view-stats-button button">
          <span className="view-stats-text">{props.text}</span>
          <svg
            viewBox="0 0 1170.2857142857142 1024"
            className="view-stats-icon"
          >
            <path d="M365.714 512v292.571h-146.286v-292.571h146.286zM585.143 219.429v585.143h-146.286v-585.143h146.286zM1170.286 877.714v73.143h-1170.286v-877.714h73.143v804.571h1097.143zM804.571 365.714v438.857h-146.286v-438.857h146.286zM1024 146.286v658.286h-146.286v-658.286h146.286z"></path>
          </svg>
        </button>
      </div>
      <style jsx>
        {`
          .view-stats-container {
            display: flex;
            position: relative;
            margin-top: 0px;
            margin-bottom: 0px;
          }
          .view-stats-button {
            width: 194px;
            height: 72px;
            display: flex;
            align-self: center;
            font-style: normal;
            margin-top: var(--dl-space-space-threeunits);
            text-align: center;
            transition: 0.3s;
            font-weight: 900;
            line-height: 2.2;
            padding-top: var(--dl-space-space-oneandhalfunits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-oneandhalfunits);
            text-transform: capitalize;
          }

          .view-stats-text {
            align-self: center;
            margin-left: var(--dl-space-space-halfunit);
            margin-right: var(--dl-space-space-halfunit);
          }
          .view-stats-icon {
            width: 24px;
            height: 24px;
            align-self: center;
            margin-left: var(--dl-space-space-halfunit);
            margin-right: var(--dl-space-space-halfunit);
          }
        `}
      </style>
    </>
  )
}

ViewStats.defaultProps = {
  text: 'View Stats',
  button: 'View Stats',
  rootClassName: '',
}

ViewStats.propTypes = {
  text: PropTypes.string,
  button: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default ViewStats
