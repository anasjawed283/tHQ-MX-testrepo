import React from 'react'

import PropTypes from 'prop-types'

import Input from './input'

const Component3 = (props) => {
  return (
    <>
      <div className={`component3-container ${props.rootClassName} `}>
        <Input rootClassName="input-root-class-name"></Input>
      </div>
      <style jsx>
        {`
          .component3-container {
            width: 100%;
            display: flex;
            position: relative;
          }
          .component3-root-class-name {
            width: 100%;
          }
          .component3-root-class-name1 {
            width: 100%;
          }
        `}
      </style>
    </>
  )
}

Component3.defaultProps = {
  rootClassName: '',
}

Component3.propTypes = {
  rootClassName: PropTypes.string,
}

export default Component3
