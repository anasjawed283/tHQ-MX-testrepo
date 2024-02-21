import React from 'react'

import Component10 from './component10'

const Component9 = (props) => {
  return (
    <>
      <div className="component9-container">
        <Component10 rootClassName="component10-root-class-name1"></Component10>
      </div>
      <style jsx>
        {`
          .component9-container {
            width: 100%;
            height: 400px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
        `}
      </style>
    </>
  )
}

export default Component9
