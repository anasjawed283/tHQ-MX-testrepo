import React from 'react'
import Head from 'next/head'

import Header from '../components/header'
import FeatureCard4 from '../components/feature-card4'
import Footer from '../components/footer'

const About = (props) => {
  return (
    <>
      <div className="about-container">
        <Head>
          <title>About - cyberX</title>
          <meta property="og:title" content="About - cyberX" />
        </Head>
        <div className="about-testimonial"></div>
        <Header></Header>
        <div className="about-features">
          <h1 className="about-text">
            <span>Learn More</span>
            <br></br>
            <span>About Us</span>
            <br></br>
          </h1>
          <div className="about-separator"></div>
          <div className="about-container1">
            <div className="about-container2">
              <FeatureCard4
                title="Why Us?"
                description="Welcome to our social media monitoring tool website, where we are dedicated to helping you safeguard your online presence. Our team of cybersecurity experts has developed a range of advanced tools and resources to help you monitor your social media activity and stay protected against cyber threats."
                rootClassName="rootClassName1"
              ></FeatureCard4>
              <FeatureCard4
                title="How it will help?"
                description="We understand that social media is a powerful tool for individuals and businesses to connect with customers, build brand awareness, and drive engagement. However, with the rise of cyber attacks, it's essential to have a proactive strategy in place to protect your online reputation and sensitive data."
                rootClassName="rootClassName4"
              ></FeatureCard4>
              <FeatureCard4
                title="How to manage?"
                description="Our social media monitoring tools are designed to provide real-time alerts, advanced analytics, and proactive threat detection, enabling you to stay one step ahead of cyber criminals. With our comprehensive monitoring solutions, you can monitor your social media profiles, track mentions of your brand or products, and detect potential threats before they become a problem."
                rootClassName="rootClassName5"
              ></FeatureCard4>
              <FeatureCard4
                title="Safety with US"
                description="Whether you're an individual, small business owner, or enterprise-level organization, our social media monitoring tools provide the peace of mind you need to stay protected in today's digital landscape."
                rootClassName="rootClassName3"
              ></FeatureCard4>
              <FeatureCard4
                title="Ease of Access"
                description="Our tools help you monitor multiple social media platforms, including Facebook, Twitter, Instagram, and LinkedIn. We provide a customizable dashboard that enables you to track the metrics that matter most to your business, such as engagement rates, sentiment analysis, and follower growth."
                rootClassName="rootClassName6"
              ></FeatureCard4>
              <FeatureCard4
                title="Support"
                description="Our social media monitoring tools are user-friendly and easy to navigate, with intuitive interfaces that require minimal training. We offer 24/7 support to ensure that you always have access to the help and guidance you need. Our tools are scalable and can be customized to meet the needs of any business, from small startups to large corporations."
                rootClassName="rootClassName2"
              ></FeatureCard4>
            </div>
            <img alt="image" src="/erer-500h.png" className="about-image" />
          </div>
        </div>
        <Footer></Footer>
      </div>
      <style jsx>
        {`
          .about-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .about-testimonial {
            width: 100%;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            justify-content: center;
            background-color: 232323;
          }
          .about-features {
            width: 100%;
            height: 1254px;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: 100%;
            min-width: 100%;
            flex-direction: column;
            background-size: cover;
            background-image: url('https://c4.wallpaperflare.com/wallpaper/489/533/138/artwork-low-poly-lines-geometry-wallpaper-preview.jpg');
          }
          .about-text {
            color: var(--dl-color-gray-white);
            font-size: 3rem;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .about-separator {
            width: 100px;
            height: 2px;
            background-color: var(--dl-color-gray-500);
          }
          .about-container1 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            margin-top: var(--dl-space-space-twounits);
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .about-container2 {
            display: grid;
            grid-template-columns: 1fr 1fr;
          }
          .about-image {
            width: 450px;
            height: 450px;
            object-fit: cover;
            flex-shrink: 0;
            margin-left: var(--dl-space-space-fourunits);
            border-radius: var(--dl-radius-radius-round);
            object-position: left;
          }
          @media (max-width: 991px) {
            .about-features {
              align-items: center;
            }
            .about-container1 {
              flex-direction: column;
            }
            .about-image {
              width: 300px;
              height: 300px;
              margin-top: var(--dl-space-space-twounits);
              margin-left: 0px;
            }
          }
          @media (max-width: 767px) {
            .about-features {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .about-text {
              text-align: center;
            }
            .about-container1 {
              flex-direction: column;
            }
          }
          @media (max-width: 479px) {
            .about-features {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .about-container2 {
              grid-template-columns: 1fr;
            }
            .about-image {
              width: 250px;
              height: 250px;
            }
          }
        `}
      </style>
    </>
  )
}

export default About
