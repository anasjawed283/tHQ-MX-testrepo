import React from 'react'

import PropTypes from 'prop-types'

import EmailComp from './email-comp'

const LoginPassword = (props) => {
  return (
    <>
      <div className={`login-password-container ${props.rootClassName} `}>
        <EmailComp textinputPlaceholder="Password"></EmailComp>
      </div>
      <style jsx>
        {`
          .login-password-container {
            display: flex;
            position: relative;
          }
        `}
      </style>
    </>
  )
}

LoginPassword.defaultProps = {
  rootClassName: '',
}

LoginPassword.propTypes = {
  rootClassName: PropTypes.string,
}

export default LoginPassword
