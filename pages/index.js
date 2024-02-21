import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Header from '../components/header'
import Footer from '../components/footer'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>cyberX</title>
          <meta property="og:title" content="cyberX" />
        </Head>
        <Header></Header>
        <div className="home-hero">
          <h1 className="home-text">Secure Your Digital World</h1>
          <span className="home-text01">
            <span>
              Social media monitoring is a critical component of any effective
              cybersecurity strategy. With the rise of social media,
            </span>
            <br></br>
            <span>
              {' '}
              individuals and businesses are more vulnerable than ever to cyber
              attacks, phishing scams, and identity theft.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span>
              Our website provides a tool and resource to help you monitor your
              social media presence.
            </span>
          </span>
          <div className="home-btn-group">
            <Link href="/search1">
              <button className="home-button button">Get Started</button>
            </Link>
            <Link href="/docs">
              <a className="home-link button">Learn More</a>
            </Link>
          </div>
        </div>
        <div className="home-container1">
          <div className="home-features">
            <h1 className="home-text07">
              <span className="home-text08">
                The Ideal
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>Social Media Monitoring Tool</span>
              <br></br>
            </h1>
            <div className="home-container2">
              <div className="home-feature-card">
                <svg viewBox="0 0 1024 1024" className="home-icon">
                  <path d="M512 85.333c-212.096 0-384 171.904-384 384s171.904 384 384 384 384-171.904 384-384-171.904-384-384-384zM597.333 170.667c0 42.667-21.333 85.333-64 85.333s-64 42.667-64 85.333 0 128 0 128 42.667 0 42.667-128c0-23.595 19.072-42.667 42.667-42.667s42.667 19.072 42.667 42.667v128c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667c23.595 0 42.667-19.115 42.667-42.667h42.667v-85.333l42.667 42.667-42.667 42.667c0 128 0 128-85.333 170.667 0-42.667-42.667-42.667-128-42.667v-85.333l-85.333-85.333v-85.333c-42.667 0-42.667 42.667-42.667 42.667l-23.936-23.936-101.973-101.973c4.693-8.192 9.6-16.299 14.933-24.064l22.315-28.928c62.635-73.216 155.477-119.765 259.328-119.765 29.483 0 57.984 4.181 85.333 11.179v31.488z"></path>
                </svg>
                <h2 className="home-text11">Multi Language Tool</h2>
                <span className="home-text12">
                  Search and Get Results in multiple Indian Languages
                </span>
              </div>
              <div className="home-feature-card1">
                <svg viewBox="0 0 1024 1024" className="home-icon2">
                  <path d="M512 0c-282.77 0-512 229.23-512 512s229.23 512 512 512 512-229.23 512-512-229.23-512-512-512zM704 256c35.346 0 64 28.654 64 64s-28.654 64-64 64-64-28.654-64-64 28.654-64 64-64zM320 256c35.346 0 64 28.654 64 64s-28.654 64-64 64-64-28.654-64-64 28.654-64 64-64zM512 832c-116.51 0-218.464-62.274-274.426-155.344l82.328-49.396c39.174 65.148 110.542 108.74 192.098 108.74s152.924-43.592 192.098-108.74l82.328 49.396c-55.962 93.070-157.916 155.344-274.426 155.344z"></path>
                </svg>
                <h2 className="home-text13">Sentiment Analysis</h2>
                <span className="home-text14">
                  Get the negativity analysis as emoticons for a better
                  understanding
                </span>
              </div>
              <div className="home-feature-card2">
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="home-icon4"
                >
                  <path d="M438.857 438.857c172 0 344.571-30.857 438.857-97.143v97.143c0 80.571-196.571 146.286-438.857 146.286s-438.857-65.714-438.857-146.286v-97.143c94.286 66.286 266.857 97.143 438.857 97.143zM438.857 877.714c172 0 344.571-30.857 438.857-97.143v97.143c0 80.571-196.571 146.286-438.857 146.286s-438.857-65.714-438.857-146.286v-97.143c94.286 66.286 266.857 97.143 438.857 97.143zM438.857 658.286c172 0 344.571-30.857 438.857-97.143v97.143c0 80.571-196.571 146.286-438.857 146.286s-438.857-65.714-438.857-146.286v-97.143c94.286 66.286 266.857 97.143 438.857 97.143zM438.857 0c242.286 0 438.857 65.714 438.857 146.286v73.143c0 80.571-196.571 146.286-438.857 146.286s-438.857-65.714-438.857-146.286v-73.143c0-80.571 196.571-146.286 438.857-146.286z"></path>
                </svg>
                <h2 className="home-text15">Data Integration</h2>
                <span className="home-text16">
                  <span>
                    With best User Interface, Quick Backend and Secure data
                    maintainence
                  </span>
                  <br></br>
                  <br></br>
                </span>
              </div>
              <div className="home-feature-card3">
                <svg viewBox="0 0 1024 1024" className="home-icon6">
                  <path d="M512 810q58 0 126-33t106-79l112 66q-128 174-344 174-176 0-301-125t-125-301q0-166 111-287t273-137v128q-108 16-182 100t-74 196q0 124 87 211t211 87zM554 88q162 16 273 137t111 287q0 96-36 174l-112-66q20-56 20-108 0-112-74-196t-182-100v-128z"></path>
                </svg>
                <h2 className="home-text20">Negativity Graph</h2>
                <span className="home-text21">
                  Get a better understanding of the output using graphs.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="home-hero1">
          <h1 className="home-text22">Read The Documentation</h1>
          <span className="home-text23">
            <br></br>
            <span>
              Welcome to our social media monitoring tool website, where we are
              dedicated to helping you safeguard your online presence. Our team
              of cybersecurity experts has developed a range of advanced tools
              and resources to help you monitor your social media activity and
              stay protected against cyber threats.
            </span>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </span>
          <div className="home-btn-group1">
            <Link href="/docs">
              <a className="home-link1 button">Learn More</a>
            </Link>
          </div>
        </div>
        <Footer></Footer>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-hero {
            width: 100%;
            height: 701px;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            position: relative;
            min-height: 80vh;
            align-items: center;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            flex-direction: column;
            background-size: cover;
            justify-content: center;
            background-image: linear-gradient(
                90deg,
                rgba(252, 0, 255, 0.43) 0%,
                rgba(0, 219, 222, 0.47) 100%
              ),
              url('https://wallpaperaccess.com/full/6383572.jpg');
          }
          .home-text {
            color: var(--dl-color-gray-white);
            z-index: 100;
            font-size: 3rem;
            font-style: normal;
            transition: 0.3s;
            font-weight: 900;
            margin-bottom: var(--dl-space-space-threeunits);
          }
          .home-text:hover {
            color: var(--dl-color-gray-black);
            font-size: 3.5rem;
            font-style: normal;
            font-weight: 800;
          }
          .home-text01 {
            color: var(--dl-color-gray-white);
            z-index: 100;
            font-size: 20px;
            font-style: normal;
            margin-top: var(--dl-space-space-twounits);
            text-align: center;
            transition: 0.3s;
            font-weight: 300;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .home-text01:hover {
            font-size: 20px;
            font-style: normal;
            text-align: center;
            font-weight: 700;
          }
          .home-btn-group {
            display: flex;
            z-index: 100;
            align-items: center;
            flex-direction: row;
          }
          .home-button {
            font-size: 0.75rem;
            transition: 0.3s;
            padding-top: var(--dl-space-space-unit);
            border-width: 0px;
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-unit);
            text-transform: uppercase;
          }
          .home-button:hover {
            color: #ffffff;
            border: none;
            font-style: normal;
            font-weight: 800;
            border-color: #0d2571;
            border-width: 5px;
            background-color: #26b1c6;
          }
          .home-link {
            color: var(--dl-color-gray-white);
            font-size: 0.75rem;
            transition: 0.3s;
            margin-left: var(--dl-space-space-unit);
            padding-top: var(--dl-space-space-unit);
            border-color: var(--dl-color-gray-white);
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-unit);
            text-transform: uppercase;
            text-decoration: none;
            background-color: transparent;
          }
          .home-link:hover {
            color: #000000;
            transform: scale(1.02);
            font-style: normal;
            font-weight: 700;
            border-width: 1px;
            background-color: var(--dl-color-gray-white);
          }
          .home-container1 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: flex-start;
          }
          .home-features {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            flex-direction: column;
          }
          .home-text07 {
            font-size: 3rem;
            transition: 0.3s;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .home-text07:hover {
            font-size: 3.2rem;
          }
          .home-text08 {
            color: var(--dl-color-primary-100);
          }
          .home-container2 {
            width: 100%;
            display: grid;
            grid-gap: var(--dl-space-space-twounits);
            margin-top: var(--dl-space-space-fourunits);
            grid-template-columns: 1fr 1fr 1fr 1fr;
          }
          .home-feature-card {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-twounits);
            transition: 0.3s;
            align-items: center;
            flex-direction: column;
          }
          .home-feature-card:hover {
            background-color: #d9d9d9;
          }
          .home-icon {
            fill: var(--dl-color-gray-black);
            width: 64px;
            height: 47px;
          }
          .home-text11 {
            font-style: normal;
            margin-top: var(--dl-space-space-unit);
            text-align: center;
            font-weight: 500;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text12 {
            color: var(--dl-color-gray-700);
            text-align: center;
          }
          .home-feature-card1 {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-twounits);
            transition: 0.3s;
            align-items: center;
            padding-top: 32px;
            flex-direction: column;
          }
          .home-feature-card1:hover {
            background-color: #d9d9d9;
          }
          .home-icon2 {
            width: 40px;
            height: 40px;
          }
          .home-text13 {
            font-style: normal;
            margin-top: var(--dl-space-space-unit);
            text-align: center;
            font-weight: 500;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text14 {
            color: var(--dl-color-gray-700);
            text-align: center;
          }
          .home-feature-card2 {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-twounits);
            transition: 0.3s;
            align-items: center;
            flex-direction: column;
          }
          .home-feature-card2:hover {
            background-color: #d9d9d9;
          }
          .home-icon4 {
            width: 40px;
            height: 40px;
          }
          .home-text15 {
            font-style: normal;
            margin-top: var(--dl-space-space-unit);
            text-align: center;
            font-weight: 500;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text16 {
            color: var(--dl-color-gray-700);
            text-align: center;
          }
          .home-feature-card3 {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-twounits);
            transition: 0.3s;
            align-items: center;
            flex-direction: column;
          }
          .home-feature-card3:hover {
            background-color: #d9d9d9;
          }
          .home-icon6 {
            width: 40px;
            height: 40px;
          }
          .home-text20 {
            font-style: normal;
            margin-top: var(--dl-space-space-unit);
            text-align: center;
            font-weight: 500;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text21 {
            color: var(--dl-color-gray-700);
            text-align: center;
          }
          .home-hero1 {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            position: relative;
            min-height: 80vh;
            transition: 0.3s;
            align-items: center;
            flex-direction: column;
            background-size: cover;
            justify-content: center;
            background-image: linear-gradient(
                113deg,
                rgba(255, 76, 92, 0.8) 7%,
                rgba(41, 160, 161, 0.8) 94%
              ),
              url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIzfHx3b3JrJTIwbGFwdG9wfGVufDB8fHx8MTYyNjE3NjkzMA&ixlib=rb-1.2.1&w=1500');
          }
          .home-hero1:hover {
            align-items: center;
            justify-content: center;
            background-image: linear-gradient(
                113deg,
                rgba(132, 16, 26, 0.8) 9%,
                rgba(10, 84, 85, 0.8) 94%
              ),
              url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIzfHx3b3JrJTIwbGFwdG9wfGVufDB8fHx8MTYyNjE3NjkzMA&ixlib=rb-1.2.1&w=1500');
          }
          .home-text22 {
            color: var(--dl-color-gray-white);
            font-size: 3rem;
          }
          .home-text23 {
            color: var(--dl-color-gray-white);
            margin-top: var(--dl-space-space-twounits);
            margin-bottom: var(--dl-space-space-twounits);
          }
          .home-btn-group1 {
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-link1 {
            color: var(--dl-color-gray-white);
            font-size: 0.75rem;
            transition: 0.3s;
            margin-left: var(--dl-space-space-unit);
            padding-top: var(--dl-space-space-unit);
            border-color: var(--dl-color-gray-white);
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-unit);
            text-transform: uppercase;
            text-decoration: none;
            background-color: transparent;
          }
          .home-link1:hover {
            transform: scale(1.02);
          }
          @media (max-width: 991px) {
            .home-hero {
              flex-direction: column;
            }
            .home-text {
              text-align: center;
            }
            .home-text01 {
              text-align: center;
            }
            .home-text07 {
              text-align: center;
            }
            .home-container2 {
              grid-template-columns: 1fr 1fr;
            }
            .home-hero1 {
              flex-direction: column;
            }
            .home-text22 {
              text-align: center;
            }
            .home-text23 {
              text-align: center;
            }
          }
          @media (max-width: 767px) {
            .home-hero {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-features {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-text07 {
              text-align: center;
            }
            .home-hero1 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
          }
          @media (max-width: 479px) {
            .home-hero {
              width: 100%;
              padding: var(--dl-space-space-twounits);
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .home-btn-group {
              flex-direction: column;
            }
            .home-link {
              margin-top: var(--dl-space-space-unit);
              margin-left: 0px;
            }
            .home-features {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-container2 {
              grid-template-columns: 1fr;
            }
            .home-hero1 {
              width: 100%;
              padding: var(--dl-space-space-twounits);
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .home-btn-group1 {
              flex-direction: column;
            }
            .home-link1 {
              margin-top: var(--dl-space-space-unit);
              margin-left: 0px;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
