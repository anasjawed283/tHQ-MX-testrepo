import React from 'react'

import PropTypes from 'prop-types'

const BarOfPie = (props) => {
  return (
    <>
      <div className="bar-of-pie-container">
        <div className="bar-of-pie-container1">
          <h1 className="bar-of-pie-text">{props.heading}</h1>
          <div className="bar-of-pie-container2">
            <img
              alt={props.imageAlt}
              src={props.imageSrc}
              className="bar-of-pie-image"
            />
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .bar-of-pie-container {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            position: relative;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            background-size: cover;
            justify-content: center;
            background-image: url('https://images.unsplash.com/photo-1528819027803-5473f2bf7633?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8OXx8fGVufDB8fHx8&w=1500&q=80');
          }
          .bar-of-pie-container1 {
            flex: 0 0 auto;
            width: 728px;
            height: 583px;
            display: flex;
            align-items: center;
            border-color: #787878;
            border-style: solid;
            border-width: 3px;
            flex-direction: column;
            justify-content: flex-start;
            background-color: #ffffff;
          }
          .bar-of-pie-text {
            font-size: 3em;
            font-style: normal;
            text-align: center;
            font-weight: 700;
          }
          .bar-of-pie-container2 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .bar-of-pie-image {
            width: 100%;
            height: 445px;
            object-fit: cover;
          }
          @media (max-width: 767px) {
            .bar-of-pie-container {
              flex-flow: column;
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
          }
          @media (max-width: 479px) {
            .bar-of-pie-container {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
          }
        `}
      </style>
    </>
  )
}

BarOfPie.defaultProps = {
  imageSrc: '/whatsapp%20image%202023-05-01%20at%2022.42.54-500h.jpg',
  imageAlt: 'image',
  heading: 'Bar of Pie',
}

BarOfPie.propTypes = {
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
  heading: PropTypes.string,
}

export default BarOfPie
