import React from 'react'

import Component3 from './component3'

const Search = (props) => {
  return (
    <>
      <div className="search-container">
        <Component3 rootClassName="component3-root-class-name"></Component3>
      </div>
      <style jsx>
        {`
          .search-container {
            width: 652px;
            height: 70px;
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

export default Search
