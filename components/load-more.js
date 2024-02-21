import React from 'react'

import PropTypes from 'prop-types'

const LoadMore = (props) => {
  return (
    <>
      <div className="load-more-container">
        <button className="load-more-button button">{props.button}</button>
      </div>
      <style jsx>
        {`
          .load-more-container {
            width: 100%;
            height: 400px;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .load-more-button {
            font-size: 20px;
            font-style: normal;
            margin-top: var(--dl-space-space-oneandhalfunits);
            font-weight: 900;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
            background-color: #4e70e4;
          }
        `}
      </style>
    </>
  )
}

LoadMore.defaultProps = {
  button: 'Load More ⬇️',
}

LoadMore.propTypes = {
  button: PropTypes.string,
}

export default LoadMore
