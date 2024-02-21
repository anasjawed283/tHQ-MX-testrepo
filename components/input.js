import React from 'react'

import PropTypes from 'prop-types'

const Input = (props) => {
  return (
    <>
      <div className={`input-container ${props.rootClassName} `}>
        <input
          type="text"
          placeholder={props.textinputPlaceholder}
          className="input-textinput input"
        />
      </div>
      <style jsx>
        {`
          .input-container {
            display: flex;
            position: relative;
          }
          .input-textinput {
            font-size: 0.75rem;
            border-color: var(--dl-color-gray-500);
            border-radius: var(--dl-radius-radius-radius4);
          }
          .input-root-class-name {
            width: 100%;
          }
          .input-root-class-name1 {
            width: 100%;
            align-self: center;
          }
        `}
      </style>
    </>
  )
}

Input.defaultProps = {
  textinputPlaceholder: 'Email here...',
  inputPlaceholder: 'Email here...',
  rootClassName: '',
}

Input.propTypes = {
  textinputPlaceholder: PropTypes.string,
  inputPlaceholder: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Input
