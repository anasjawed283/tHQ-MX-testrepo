import React from 'react'

import PropTypes from 'prop-types'

const Component2 = (props) => {
  return (
    <>
      <div className="component2-container">
        <h1 className="component2-text">{props.heading}</h1>
        <div
          data-thq="thq-dropdown"
          className="component2-thq-dropdown list-item"
        >
          <ul data-thq="thq-dropdown-list" className="component2-dropdown-list">
            <li
              data-thq="thq-dropdown"
              className="component2-dropdown list-item"
            >
              <div
                data-thq="thq-dropdown-toggle"
                className="component2-dropdown-toggle"
              >
                <span className="component2-text1">{props.text4}</span>
              </div>
            </li>
            <li
              data-thq="thq-dropdown"
              className="component2-dropdown1 list-item"
            >
              <div
                data-thq="thq-dropdown-toggle"
                className="component2-dropdown-toggle1"
              >
                <span className="component2-text2">{props.text5}</span>
              </div>
            </li>
            <li
              data-thq="thq-dropdown"
              className="component2-dropdown2 list-item"
            >
              <div
                data-thq="thq-dropdown-toggle"
                className="component2-dropdown-toggle2"
              >
                <span className="component2-text3">{props.text6}</span>
              </div>
            </li>
          </ul>
        </div>
        <div className="component2-container1">
          <div className="component2-container2">
            <svg viewBox="0 0 1024 1024" className="component2-icon">
              <path d="M512 92.2c136.8 0 153 0.6 206.8 3 50 2.2 77 10.6 95 17.6 23.8 9.2 41 20.4 58.8 38.2 18 18 29 35 38.4 58.8 7 18 15.4 45.2 17.6 95 2.4 54 3 70.2 3 206.8s-0.6 153-3 206.8c-2.2 50-10.6 77-17.6 95-9.2 23.8-20.4 41-38.2 58.8-18 18-35 29-58.8 38.4-18 7-45.2 15.4-95 17.6-54 2.4-70.2 3-206.8 3s-153-0.6-206.8-3c-50-2.2-77-10.6-95-17.6-23.8-9.2-41-20.4-58.8-38.2-18-18-29-35-38.4-58.8-7-18-15.4-45.2-17.6-95-2.4-54-3-70.2-3-206.8s0.6-153 3-206.8c2.2-50 10.6-77 17.6-95 9.2-23.8 20.4-41 38.2-58.8 18-18 35-29 58.8-38.4 18-7 45.2-15.4 95-17.6 53.8-2.4 70-3 206.8-3zM512 0c-139 0-156.4 0.6-211 3-54.4 2.4-91.8 11.2-124.2 23.8-33.8 13.2-62.4 30.6-90.8 59.2-28.6 28.4-46 57-59.2 90.6-12.6 32.6-21.4 69.8-23.8 124.2-2.4 54.8-3 72.2-3 211.2s0.6 156.4 3 211c2.4 54.4 11.2 91.8 23.8 124.2 13.2 33.8 30.6 62.4 59.2 90.8 28.4 28.4 57 46 90.6 59 32.6 12.6 69.8 21.4 124.2 23.8 54.6 2.4 72 3 211 3s156.4-0.6 211-3c54.4-2.4 91.8-11.2 124.2-23.8 33.6-13 62.2-30.6 90.6-59s46-57 59-90.6c12.6-32.6 21.4-69.8 23.8-124.2 2.4-54.6 3-72 3-211s-0.6-156.4-3-211c-2.4-54.4-11.2-91.8-23.8-124.2-12.6-34-30-62.6-58.6-91-28.4-28.4-57-46-90.6-59-32.6-12.6-69.8-21.4-124.2-23.8-54.8-2.6-72.2-3.2-211.2-3.2v0z"></path>
              <path d="M512 249c-145.2 0-263 117.8-263 263s117.8 263 263 263 263-117.8 263-263c0-145.2-117.8-263-263-263zM512 682.6c-94.2 0-170.6-76.4-170.6-170.6s76.4-170.6 170.6-170.6c94.2 0 170.6 76.4 170.6 170.6s-76.4 170.6-170.6 170.6z"></path>
              <path d="M846.8 238.6c0 33.91-27.49 61.4-61.4 61.4s-61.4-27.49-61.4-61.4c0-33.91 27.49-61.4 61.4-61.4s61.4 27.49 61.4 61.4z"></path>
            </svg>
            <span className="component2-text4">{props.text}</span>
          </div>
          <div className="component2-container3">
            <svg viewBox="0 0 1024 1024" className="component2-icon04">
              <path d="M1013.8 307.2c0 0-10-70.6-40.8-101.6-39-40.8-82.6-41-102.6-43.4-143.2-10.4-358.2-10.4-358.2-10.4h-0.4c0 0-215 0-358.2 10.4-20 2.4-63.6 2.6-102.6 43.4-30.8 31-40.6 101.6-40.6 101.6s-10.2 82.8-10.2 165.8v77.6c0 82.8 10.2 165.8 10.2 165.8s10 70.6 40.6 101.6c39 40.8 90.2 39.4 113 43.8 82 7.8 348.2 10.2 348.2 10.2s215.2-0.4 358.4-10.6c20-2.4 63.6-2.6 102.6-43.4 30.8-31 40.8-101.6 40.8-101.6s10.2-82.8 10.2-165.8v-77.6c-0.2-82.8-10.4-165.8-10.4-165.8zM406.2 644.8v-287.8l276.6 144.4-276.6 143.4z"></path>
            </svg>
            <span className="component2-text5">{props.text1}</span>
          </div>
          <div className="component2-container4">
            <svg viewBox="0 0 1024 1024" className="component2-icon06">
              <path d="M1024 226.4c-37.6 16.8-78.2 28-120.6 33 43.4-26 76.6-67.2 92.4-116.2-40.6 24-85.6 41.6-133.4 51-38.4-40.8-93-66.2-153.4-66.2-116 0-210 94-210 210 0 16.4 1.8 32.4 5.4 47.8-174.6-8.8-329.4-92.4-433-219.6-18 31-28.4 67.2-28.4 105.6 0 72.8 37 137.2 93.4 174.8-34.4-1-66.8-10.6-95.2-26.2 0 0.8 0 1.8 0 2.6 0 101.8 72.4 186.8 168.6 206-17.6 4.8-36.2 7.4-55.4 7.4-13.6 0-26.6-1.4-39.6-3.8 26.8 83.4 104.4 144.2 196.2 146-72 56.4-162.4 90-261 90-17 0-33.6-1-50.2-3 93.2 59.8 203.6 94.4 322.2 94.4 386.4 0 597.8-320.2 597.8-597.8 0-9.2-0.2-18.2-0.6-27.2 41-29.4 76.6-66.4 104.8-108.6z"></path>
            </svg>
            <span className="component2-text6">{props.text2}</span>
          </div>
          <div className="component2-container5">
            <svg
              viewBox="0 0 1027.4377142857143 1024"
              className="component2-icon08"
            >
              <path d="M717.143 449.714c0-238.286-74.286-360.571-248.571-360.571-171.429 0-245.714 122.286-245.714 360.571 0 237.143 74.286 358.286 245.714 358.286 27.429 0 52-2.857 74.857-9.714v0c-35.429-69.714-77.143-140-158.286-140-15.429 0-30.857 2.286-45.143 9.143l-28-55.429c33.714-29.143 88-52 157.714-52 109.143 0 164.571 52.571 209.143 119.429 25.714-57.143 38.286-134.286 38.286-229.714zM940 810.857h66.857c4 41.143-16.571 213.143-203.429 213.143-113.143 0-172.571-65.714-217.714-142.286v0c-37.143 10.286-77.143 15.429-117.143 15.429-228.571 0-452-182.286-452-447.429 0-267.429 224-449.714 452-449.714 232.571 0 453.714 181.143 453.714 449.714 0 149.714-69.714 271.429-170.857 349.714 32.571 49.143 66.286 81.714 113.143 81.714 51.429 0 72-39.429 75.429-70.286z"></path>
            </svg>
            <span className="component2-text7">{props.text3}</span>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .component2-container {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            position: relative;
            align-self: center;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .component2-text {
            padding: var(--dl-space-space-threeunits);
            align-self: center;
            margin-top: var(--dl-space-space-unit);
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-unit);
            margin-bottom: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-unit);
          }
          .component2-thq-dropdown {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .component2-dropdown-list {
            left: 0%;
            width: max-content;
            display: none;
            z-index: 100;
            position: absolute;
            min-width: 100%;
            transition: 0.3s;
            align-items: stretch;
            border-color: #d9d9d9;
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius4);
            flex-direction: column;
            list-style-type: none;
            background-color: var(--dl-color-gray-white);
            list-style-position: inside;
          }
          .component2-dropdown {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .component2-dropdown-toggle {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .component2-dropdown-toggle:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .component2-text1 {
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
          }
          .component2-dropdown1 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .component2-dropdown-toggle1 {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .component2-dropdown-toggle1:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .component2-text2 {
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
          }
          .component2-dropdown2 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .component2-dropdown-toggle2 {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .component2-dropdown-toggle2:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .component2-text3 {
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
          }
          .component2-container1 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
          }
          .component2-container2 {
            flex: 0 0 auto;
            width: 270px;
            height: 55px;
            display: flex;
            flex-wrap: wrap;
            align-items: flex-start;
            margin-left: var(--dl-space-space-unit);
            border-color: var(--dl-color-gray-black);
            border-style: solid;
            border-width: 3px;
            margin-right: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            flex-direction: row;
            justify-content: flex-start;
            text-decoration: none;
            background-color: rgba(214, 208, 208, 0);
          }
          .component2-icon {
            fill: rgba(202, 92, 36, 0.9);
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            margin-left: var(--dl-space-space-halfunit);
          }
          .component2-text4 {
            color: rgba(202, 92, 36, 0.9);
            font-size: 30px;
            font-style: normal;
            font-weight: 900;
            margin-left: var(--dl-space-space-unit);
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-halfunit);
            padding-right: var(--dl-space-space-halfunit);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .component2-container3 {
            flex: 0 0 auto;
            width: 270px;
            height: 55px;
            display: flex;
            flex-wrap: wrap;
            align-items: flex-start;
            margin-left: var(--dl-space-space-unit);
            border-color: var(--dl-color-gray-black);
            border-style: solid;
            border-width: 3px;
            margin-right: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            flex-direction: row;
            justify-content: flex-start;
            text-decoration: none;
            background-color: rgba(175, 175, 175, 0.52);
          }
          .component2-icon04 {
            fill: #c82c2c;
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            align-self: center;
            margin-left: var(--dl-space-space-halfunit);
          }
          .component2-text5 {
            color: #c82c2c;
            font-size: 30px;
            font-style: normal;
            font-weight: 900;
            margin-left: var(--dl-space-space-unit);
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-halfunit);
            padding-right: var(--dl-space-space-halfunit);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .component2-container4 {
            flex: 0 0 auto;
            width: 270px;
            height: 55px;
            display: flex;
            flex-wrap: wrap;
            align-items: flex-start;
            margin-left: var(--dl-space-space-unit);
            border-color: var(--dl-color-gray-black);
            border-style: solid;
            border-width: 3px;
            margin-right: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            flex-direction: row;
            justify-content: flex-start;
            text-decoration: none;
            background-color: rgba(175, 175, 175, 0);
          }
          .component2-icon06 {
            fill: #2259c0;
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            align-self: center;
            margin-left: var(--dl-space-space-halfunit);
          }
          .component2-text6 {
            color: #2259c0;
            font-size: 30px;
            font-style: normal;
            font-weight: 900;
            margin-left: var(--dl-space-space-unit);
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-halfunit);
            padding-right: var(--dl-space-space-halfunit);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .component2-container5 {
            flex: 0 0 auto;
            width: 270px;
            height: 55px;
            display: flex;
            flex-wrap: wrap;
            align-items: flex-start;
            margin-left: var(--dl-space-space-unit);
            border-color: var(--dl-color-gray-black);
            border-style: solid;
            border-width: 3px;
            margin-right: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            flex-direction: row;
            justify-content: flex-start;
            background-color: rgba(26, 36, 185, 0);
          }
          .component2-icon08 {
            fill: #9d1010;
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            align-self: center;
            margin-left: var(--dl-space-space-halfunit);
          }
          .component2-text7 {
            color: #9d1010;
            font-size: 30px;
            font-style: normal;
            font-weight: 900;
            margin-left: var(--dl-space-space-unit);
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-halfunit);
            padding-right: var(--dl-space-space-halfunit);
            padding-bottom: var(--dl-space-space-halfunit);
          }
        `}
      </style>
    </>
  )
}

Component2.defaultProps = {
  text: 'Instagram',
  heading: 'Posts and Media',
  text1: 'YouTube',
  text5: 'Sub-menu Item',
  text6: 'Sub-menu Item',
  text4: 'Sub-menu Item',
  text3: 'Quora',
  text2: 'Twitter',
}

Component2.propTypes = {
  text: PropTypes.string,
  heading: PropTypes.string,
  text1: PropTypes.string,
  text5: PropTypes.string,
  text6: PropTypes.string,
  text4: PropTypes.string,
  text3: PropTypes.string,
  text2: PropTypes.string,
}

export default Component2
