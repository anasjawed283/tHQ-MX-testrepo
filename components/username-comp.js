import React from 'react'

import PropTypes from 'prop-types'

const UsernameComp = (props) => {
  return (
    <>
      <div className={`username-comp-container ${props.rootClassName} `}>
        <input
          type="text"
          placeholder={props.inputPlaceholder}
          className="username-comp-input input"
        />
      </div>
      <style jsx>
        {`
          .username-comp-container {
            display: flex;
            position: relative;
          }
          .username-comp-input {
            width: 281px;
            height: 36px;
            font-size: 0.75rem;
            margin-top: var(--dl-space-space-unit);
            border-color: var(--dl-color-gray-500);
            margin-bottom: var(--dl-space-space-unit);
          }
          .username-comp-root-class-name {
            align-self: center;
          }
        `}
      </style>
    </>
  )
}

UsernameComp.defaultProps = {
  rootClassName: '',
  inputPlaceholder: 'Email here...',
}

UsernameComp.propTypes = {
  rootClassName: PropTypes.string,
  inputPlaceholder: PropTypes.string,
}

export default UsernameComp
