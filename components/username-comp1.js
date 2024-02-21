import React from 'react'

import PropTypes from 'prop-types'

const UsernameComp1 = (props) => {
  return (
    <>
      <div className={`username-comp1-container ${props.rootClassName} `}>
        <input
          type="text"
          placeholder={props.inputPlaceholder}
          className="username-comp1-input input"
        />
      </div>
      <style jsx>
        {`
          .username-comp1-container {
            display: flex;
            position: relative;
          }
          .username-comp1-input {
            width: 281px;
            height: 36px;
            font-size: 0.75rem;
            margin-top: var(--dl-space-space-unit);
            border-color: var(--dl-color-gray-500);
            margin-bottom: var(--dl-space-space-unit);
          }
          .username-comp1-root-class-name {
            align-self: center;
          }
        `}
      </style>
    </>
  )
}

UsernameComp1.defaultProps = {
  rootClassName: '',
  inputPlaceholder: 'Email here...',
}

UsernameComp1.propTypes = {
  rootClassName: PropTypes.string,
  inputPlaceholder: PropTypes.string,
}

export default UsernameComp1
