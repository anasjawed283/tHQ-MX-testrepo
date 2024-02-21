import React from 'react'

import PropTypes from 'prop-types'

const EmailComp1 = (props) => {
  return (
    <>
      <div className="email-comp1-container">
        <input
          type="text"
          placeholder={props.textinputPlaceholder}
          className="email-comp1-textinput input"
        />
      </div>
      <style jsx>
        {`
          .email-comp1-container {
            display: flex;
            position: relative;
          }
          .email-comp1-textinput {
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

EmailComp1.defaultProps = {
  textinputPlaceholder: 'Email here...',
}

EmailComp1.propTypes = {
  textinputPlaceholder: PropTypes.string,
}

export default EmailComp1
