import React from 'react'

import PropTypes from 'prop-types'

const EmailComp = (props) => {
  return (
    <>
      <div className="email-comp-container">
        <input
          type="text"
          placeholder={props.textinputPlaceholder}
          className="email-comp-textinput input"
        />
      </div>
      <style jsx>
        {`
          .email-comp-container {
            display: flex;
            position: relative;
          }
          .email-comp-textinput {
            height: 36px;
            font-size: 0.75rem;
            margin-top: var(--dl-space-space-halfunit);
            border-color: var(--dl-color-gray-500);
            margin-bottom: var(--dl-space-space-halfunit);
          }
        `}
      </style>
    </>
  )
}

EmailComp.defaultProps = {
  textinputPlaceholder: 'Email here...',
}

EmailComp.propTypes = {
  textinputPlaceholder: PropTypes.string,
}

export default EmailComp
