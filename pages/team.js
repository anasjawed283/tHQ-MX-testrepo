import React from 'react'
import Head from 'next/head'

import Header from '../components/header'
import TestimonialCard1 from '../components/testimonial-card1'
import Footer from '../components/footer'

const Team = (props) => {
  return (
    <>
      <div className="team-container">
        <Head>
          <title>Team - cyberX</title>
          <meta property="og:title" content="Team - cyberX" />
        </Head>
        <Header></Header>
        <div className="team-testimonial">
          <div className="team-container1">
            <h1 className="team-text">
              <span>About The Developers</span>
              <br></br>
            </h1>
            <span className="team-text3">
              <span>
                We together build for the user and to provide them the
                beneficial
              </span>
              <br></br>
              <span>
                content they need and to provide the user a secure environment.
              </span>
              <br></br>
            </span>
            <div className="team-container2">
              <TestimonialCard1
                name="adsdsdsa"
                role="Machine Learning Engineer"
                quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                rootClassName="rootClassName2"
              ></TestimonialCard1>
              <TestimonialCard1
                name="ddsfdsf"
                role="BackEnd Developer"
                quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                rootClassName="rootClassName"
              ></TestimonialCard1>
              <TestimonialCard1
                name="fddsfdsd"
                role="FrontEnd Developer"
                quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'"
                rootClassName="rootClassName1"
              ></TestimonialCard1>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
      <style jsx>
        {`
          .team-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .team-testimonial {
            width: 100%;
            display: flex;
            justify-content: center;
            background-color: 232323;
          }
          .team-container1 {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .team-text {
            color: var(--dl-color-gray-white);
          }
          .team-text3 {
            color: var(--dl-color-gray-white);
            font-size: 0.75rem;
            max-width: 600px;
            margin-top: var(--dl-space-space-unit);
            text-align: center;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .team-container2 {
            width: 100%;
            display: grid;
            grid-gap: var(--dl-space-space-twounits);
            grid-template-columns: 1fr 1fr 1fr;
          }
          @media (max-width: 991px) {
            .team-text {
              text-align: center;
            }
            .team-text3 {
              text-align: center;
            }
            .team-container2 {
              grid-template-columns: 1fr;
            }
          }
          @media (max-width: 767px) {
            .team-container1 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
          }
          @media (max-width: 479px) {
            .team-container1 {
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

export default Team
