import React from 'react'
import Head from 'next/head'

import Header from '../components/header'
import UsernameComp from '../components/username-comp'
import EmailComp1 from '../components/email-comp1'
import Footer from '../components/footer'

const Login = (props) => {
  return (
    <>
      <div className="login-container">
        <Head>
          <title>Login - cyberX</title>
          <meta property="og:title" content="Login - cyberX" />
        </Head>
        <Header></Header>
        <div className="login-hero">
          <div className="login-banner">
            <span className="login-text">WELCOME USER</span>
            <div className="login-container1">
              <img
                alt="image"
                src="https://t4.ftcdn.net/jpg/00/97/00/09/360_F_97000908_wwH2goIihwrMoeV9QF3BW6HtpsVFaNVM.jpg"
                className="login-image"
              />
            </div>
            <h1 className="login-text1">Login</h1>
            <div className="login-container2">
              <div className="login-container3">
                <UsernameComp
                  rootClassName="username-comp-root-class-name1"
                  inputPlaceholder="Usename"
                ></UsernameComp>
              </div>
              <div className="login-container4">
                <EmailComp1 textinputPlaceholder="Password"></EmailComp1>
              </div>
            </div>
            <div className="login-container5">
              <button className="login-button button">SignIn</button>
            </div>
            <div className="login-container6">
              <span className="login-text2">Login using</span>
              <svg viewBox="0 0 1024 1024" className="login-icon">
                <path d="M512 0c-282.8 0-512 229.2-512 512s229.2 512 512 512 512-229.2 512-512-229.2-512-512-512zM519.6 896c-212.2 0-384-171.8-384-384s171.8-384 384-384c103.6 0 190.4 37.8 257.2 100.4l-104.2 100.4c-28.6-27.4-78.4-59.2-153-59.2-131.2 0-238 108.6-238 242.4s107 242.4 238 242.4c152 0 209-109.2 217.8-165.6h-217.8v-131.6h362.6c3.2 19.2 6 38.4 6 63.6 0.2 219.4-146.8 375.2-368.6 375.2z"></path>
              </svg>
              <svg viewBox="0 0 1024 1024" className="login-icon2">
                <path d="M704 640c-64 64-64 128-128 128s-128-64-192-128-128-128-128-192 64-64 128-128-128-256-192-256-192 192-192 192c0 128 131.5 387.5 256 512s384 256 512 256c0 0 192-128 192-192s-192-256-256-192z"></path>
              </svg>
              <svg viewBox="0 0 1024 1024" className="login-icon4">
                <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
              </svg>
            </div>
          </div>
          <img
            alt="help?"
            src="/erer-200h.png"
            loading="lazy"
            className="login-image1"
          />
          <span className="login-text3">help?</span>
        </div>
        <Footer></Footer>
      </div>
      <style jsx>
        {`
          .login-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .login-hero {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            position: relative;
            min-height: 80vh;
            align-items: center;
            flex-direction: column;
            background-size: cover;
            justify-content: center;
            background-image: linear-gradient(
                113.8deg,
                rgba(255, 76, 92, 0.8) 7.5%,
                rgba(255, 177, 70, 0.8) 94.47%
              ),
              url('https://wallpaperaccess.com/full/6926315.jpg');
          }
          .login-banner {
            width: 579px;
            height: 658px;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-oneandhalfunits);
            border-color: #ffffff;
            border-width: 2px;
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-oneandhalfunits);
            background-size: cover;
            justify-content: space-between;
            background-image: url('https://images.unsplash.com/photo-1485628390555-1a7bd503f9fe?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE3fHxhcmNoaXRlY3R1cmUlMjBtaW5pbWFsfGVufDB8fHx8MTYyNjE4NDA0Mg&ixlib=rb-1.2.1&h=700');
            background-position: center;
          }
          .login-text {
            color: var(--dl-color-gray-white);
            font-size: 0.75rem;
            text-align: center;
            font-weight: 600;
            margin-bottom: var(--dl-space-space-twounits);
            letter-spacing: 2px;
            text-transform: uppercase;
          }
          .login-container1 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .login-image {
            width: 179px;
            height: 173px;
            object-fit: cover;
            transition: 0.3s;
            border-radius: var(--dl-radius-radius-round);
          }
          .login-image:hover {
            width: 204px;
            height: 199px;
          }
          .login-text1 {
            color: #ffffff;
            font-size: 3rem;
            text-align: center;
            margin-bottom: var(--dl-space-space-unit);
          }
          .login-container2 {
            width: 100%;
            height: 146px;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
            justify-content: flex-start;
          }
          .login-container3 {
            width: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            justify-content: center;
          }
          .login-container4 {
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            justify-content: center;
          }
          .login-container5 {
            width: 100%;
            height: 56px;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
          }
          .login-button {
            color: var(--dl-color-gray-white);
            height: 36px;
            font-size: 0.75rem;
            margin-top: var(--dl-space-space-halfunit);
            transition: 0.3s;
            margin-left: var(--dl-space-space-unit);
            margin-bottom: var(--dl-space-space-halfunit);
            background-color: var(--dl-color-gray-black);
          }
          .login-button:hover {
            color: var(--dl-color-gray-black);
            background-color: transparent;
          }
          .login-container6 {
            flex: 0 0 auto;
            width: 100%;
            height: 100px;
            display: flex;
            margin-top: var(--dl-space-space-twounits);
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .login-text2 {
            color: var(--dl-color-gray-white);
            font-size: 20px;
            font-style: normal;
            font-weight: 900;
            margin-left: var(--dl-space-space-unit);
            margin-right: var(--dl-space-space-unit);
          }
          .login-icon {
            width: 30px;
            height: 30px;
            margin-left: var(--dl-space-space-unit);
            margin-right: var(--dl-space-space-unit);
          }
          .login-icon2 {
            width: 30px;
            height: 30px;
            margin-left: var(--dl-space-space-unit);
            margin-right: var(--dl-space-space-unit);
          }
          .login-icon4 {
            width: 30px;
            height: 30px;
          }
          .login-image1 {
            top: 0px;
            right: 0px;
            width: 100px;
            margin: var(--dl-space-space-halfunit);
            position: absolute;
            object-fit: cover;
            transition: 0.3s;
            border-radius: var(--dl-radius-radius-round);
            text-decoration: none;
          }
          .login-image1:hover {
            width: 112px;
            height: 122px;
          }
          .login-text3 {
            top: 32px;
            color: rgba(0, 0, 0, 0);
            right: 32px;
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            position: absolute;
            transition: 0.3s;
            text-decoration: none;
          }
          .login-text3:hover {
            color: var(--dl-color-gray-white);
          }
          @media (max-width: 991px) {
            .login-hero {
              flex-direction: column;
            }
          }
          @media (max-width: 767px) {
            .login-hero {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .login-banner {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
          }
          @media (max-width: 479px) {
            .login-hero {
              width: 100%;
              padding: var(--dl-space-space-twounits);
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .login-banner {
              padding-top: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .login-container5 {
              align-items: center;
              flex-direction: column;
            }
            .login-button {
              margin-top: var(--dl-space-space-unit);
              margin-left: 0px;
            }
          }
        `}
      </style>
    </>
  )
}

export default Login
