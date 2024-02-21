import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Header from '../components/header'
import Footer from '../components/footer'

const Search1 = (props) => {
  return (
    <>
      <div className="search1-container">
        <Head>
          <title>search1 - cyberX</title>
          <meta property="og:title" content="search1 - cyberX" />
        </Head>
        <Header></Header>
        <div className="search1-hero">
          <span className="search1-text">The Post Patrol Search Window</span>
          <h1 className="search1-text01">Get Started With a Keyword</h1>
          <img
            alt="help?"
            src="/erer-200h.png"
            loading="lazy"
            className="search1-image"
          />
          <div className="search1-steps">
            <div className="search1-container01">
              <div className="search1-step">
                <div className="search1-container02">
                  <div className="search1-line"></div>
                  <div className="search1-container03">
                    <svg viewBox="0 0 1152 1024" className="search1-icon">
                      <path d="M1088 128h-1024c-35.2 0-64 28.8-64 64v640c0 35.2 28.8 64 64 64h1024c35.2 0 64-28.8 64-64v-640c0-35.2-28.8-64-64-64zM640 256h128v128h-128v-128zM832 448v128h-128v-128h128zM448 256h128v128h-128v-128zM640 448v128h-128v-128h128zM256 256h128v128h-128v-128zM448 448v128h-128v-128h128zM128 256h64v128h-64v-128zM128 448h128v128h-128v-128zM192 768h-64v-128h64v128zM768 768h-512v-128h512v128zM1024 768h-192v-128h192v128zM1024 576h-128v-128h128v128zM1024 384h-192v-128h192v128z"></path>
                    </svg>
                  </div>
                  <div className="search1-line1"></div>
                </div>
                <div className="search1-container04">
                  <h1 className="search1-text02">
                    <span>Enter</span>
                    <br></br>
                    <span>Keyword</span>
                    <br></br>
                  </h1>
                  <span className="search1-text07">
                    Enter a keyword that is to be searched.
                  </span>
                </div>
              </div>
              <div className="search1-step1">
                <div className="search1-container05">
                  <div className="search1-line2"></div>
                  <div className="search1-container06">
                    <svg viewBox="0 0 1024 1024" className="search1-icon02">
                      <path d="M512 92.2c136.8 0 153 0.6 206.8 3 50 2.2 77 10.6 95 17.6 23.8 9.2 41 20.4 58.8 38.2 18 18 29 35 38.4 58.8 7 18 15.4 45.2 17.6 95 2.4 54 3 70.2 3 206.8s-0.6 153-3 206.8c-2.2 50-10.6 77-17.6 95-9.2 23.8-20.4 41-38.2 58.8-18 18-35 29-58.8 38.4-18 7-45.2 15.4-95 17.6-54 2.4-70.2 3-206.8 3s-153-0.6-206.8-3c-50-2.2-77-10.6-95-17.6-23.8-9.2-41-20.4-58.8-38.2-18-18-29-35-38.4-58.8-7-18-15.4-45.2-17.6-95-2.4-54-3-70.2-3-206.8s0.6-153 3-206.8c2.2-50 10.6-77 17.6-95 9.2-23.8 20.4-41 38.2-58.8 18-18 35-29 58.8-38.4 18-7 45.2-15.4 95-17.6 53.8-2.4 70-3 206.8-3zM512 0c-139 0-156.4 0.6-211 3-54.4 2.4-91.8 11.2-124.2 23.8-33.8 13.2-62.4 30.6-90.8 59.2-28.6 28.4-46 57-59.2 90.6-12.6 32.6-21.4 69.8-23.8 124.2-2.4 54.8-3 72.2-3 211.2s0.6 156.4 3 211c2.4 54.4 11.2 91.8 23.8 124.2 13.2 33.8 30.6 62.4 59.2 90.8 28.4 28.4 57 46 90.6 59 32.6 12.6 69.8 21.4 124.2 23.8 54.6 2.4 72 3 211 3s156.4-0.6 211-3c54.4-2.4 91.8-11.2 124.2-23.8 33.6-13 62.2-30.6 90.6-59s46-57 59-90.6c12.6-32.6 21.4-69.8 23.8-124.2 2.4-54.6 3-72 3-211s-0.6-156.4-3-211c-2.4-54.4-11.2-91.8-23.8-124.2-12.6-34-30-62.6-58.6-91-28.4-28.4-57-46-90.6-59-32.6-12.6-69.8-21.4-124.2-23.8-54.8-2.6-72.2-3.2-211.2-3.2v0z"></path>
                      <path d="M512 249c-145.2 0-263 117.8-263 263s117.8 263 263 263 263-117.8 263-263c0-145.2-117.8-263-263-263zM512 682.6c-94.2 0-170.6-76.4-170.6-170.6s76.4-170.6 170.6-170.6c94.2 0 170.6 76.4 170.6 170.6s-76.4 170.6-170.6 170.6z"></path>
                      <path d="M846.8 238.6c0 33.91-27.49 61.4-61.4 61.4s-61.4-27.49-61.4-61.4c0-33.91 27.49-61.4 61.4-61.4s61.4 27.49 61.4 61.4z"></path>
                    </svg>
                  </div>
                  <div className="search1-line3"></div>
                </div>
                <div className="search1-container07">
                  <h1 className="search1-text08">
                    <span>Choose</span>
                    <br></br>
                    <span>Media</span>
                    <br></br>
                  </h1>
                  <span className="search1-text13">
                    <span>Choose the media button to get results on.</span>
                    <br></br>
                  </span>
                </div>
              </div>
              <div className="search1-step2">
                <div className="search1-container08">
                  <div className="search1-line4"></div>
                  <div className="search1-container09">
                    <svg viewBox="0 0 1024 1024" className="search1-icon06">
                      <path d="M576 736l96 96 320-320-320-320-96 96 224 224z"></path>
                      <path d="M448 288l-96-96-320 320 320 320 96-96-224-224z"></path>
                    </svg>
                  </div>
                  <div className="search1-line5"></div>
                </div>
                <div className="search1-container10">
                  <h1 className="search1-text16">
                    <span>Get</span>
                    <br></br>
                    <span>Results</span>
                    <br></br>
                  </h1>
                  <span className="search1-text21">
                    Output containing list of media posts will be generated
                  </span>
                </div>
              </div>
              <div className="search1-step3">
                <div className="search1-container11">
                  <div className="search1-line6"></div>
                  <div className="search1-container12">
                    <svg viewBox="0 0 1024 1024" className="search1-icon09">
                      <path d="M480 64c-265.096 0-480 214.904-480 480 0 265.098 214.904 480 480 480 265.098 0 480-214.902 480-480 0-265.096-214.902-480-480-480zM751.59 704c8.58-40.454 13.996-83.392 15.758-128h127.446c-3.336 44.196-13.624 87.114-30.68 128h-112.524zM208.41 384c-8.58 40.454-13.996 83.392-15.758 128h-127.444c3.336-44.194 13.622-87.114 30.678-128h112.524zM686.036 384c9.614 40.962 15.398 83.854 17.28 128h-191.316v-128h174.036zM512 320v-187.338c14.59 4.246 29.044 11.37 43.228 21.37 26.582 18.74 52.012 47.608 73.54 83.486 14.882 24.802 27.752 52.416 38.496 82.484h-155.264zM331.232 237.516c21.528-35.878 46.956-64.748 73.54-83.486 14.182-10 28.638-17.124 43.228-21.37v187.34h-155.264c10.746-30.066 23.616-57.68 38.496-82.484zM448 384v128h-191.314c1.88-44.146 7.666-87.038 17.278-128h174.036zM95.888 704c-17.056-40.886-27.342-83.804-30.678-128h127.444c1.762 44.608 7.178 87.546 15.758 128h-112.524zM256.686 576h191.314v128h-174.036c-9.612-40.96-15.398-83.854-17.278-128zM448 768v187.34c-14.588-4.246-29.044-11.372-43.228-21.37-26.584-18.74-52.014-47.61-73.54-83.486-14.882-24.804-27.75-52.418-38.498-82.484h155.266zM628.768 850.484c-21.528 35.876-46.958 64.746-73.54 83.486-14.184 9.998-28.638 17.124-43.228 21.37v-187.34h155.266c-10.746 30.066-23.616 57.68-38.498 82.484zM512 704v-128h191.314c-1.88 44.146-7.666 87.040-17.28 128h-174.034zM767.348 512c-1.762-44.608-7.178-87.546-15.758-128h112.524c17.056 40.886 27.344 83.806 30.68 128h-127.446zM830.658 320h-95.9c-18.638-58.762-44.376-110.294-75.316-151.428 42.536 20.34 81.058 47.616 114.714 81.272 21.48 21.478 40.362 44.938 56.502 70.156zM185.844 249.844c33.658-33.658 72.18-60.932 114.714-81.272-30.942 41.134-56.676 92.666-75.316 151.428h-95.898c16.138-25.218 35.022-48.678 56.5-70.156zM129.344 768h95.898c18.64 58.762 44.376 110.294 75.318 151.43-42.536-20.34-81.058-47.616-114.714-81.274-21.48-21.478-40.364-44.938-56.502-70.156zM774.156 838.156c-33.656 33.658-72.18 60.934-114.714 81.274 30.942-41.134 56.678-92.668 75.316-151.43h95.9c-16.14 25.218-35.022 48.678-56.502 70.156z"></path>
                    </svg>
                  </div>
                  <div className="search1-line7"></div>
                </div>
                <div className="search1-container13">
                  <h1 className="search1-text22">
                    <span>Generate</span>
                    <br></br>
                    <span>Analysis</span>
                    <br></br>
                  </h1>
                  <span className="search1-text27">
                    Get the graphical results indicating negativity.
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="search1-container14">
            <input
              type="text"
              required
              placeholder="Enter Keyword"
              className="search1-textinput input"
            />
          </div>
          <div className="search1-btn-group">
            <Link href="/final-output">
              <a className="search1-link button">
                <span className="search1-text28">Search</span>
                <svg viewBox="0 0 1024 1024" className="search1-icon11">
                  <path d="M992.262 871.396l-242.552-206.294c-25.074-22.566-51.89-32.926-73.552-31.926 57.256-67.068 91.842-154.078 91.842-249.176 0-212.078-171.922-384-384-384-212.076 0-384 171.922-384 384s171.922 384 384 384c95.098 0 182.108-34.586 249.176-91.844-1 21.662 9.36 48.478 31.926 73.552l206.294 242.552c35.322 39.246 93.022 42.554 128.22 7.356s31.892-92.898-7.354-128.22zM384 640c-141.384 0-256-114.616-256-256s114.616-256 256-256 256 114.616 256 256-114.614 256-256 256z"></path>
                </svg>
              </a>
            </Link>
          </div>
          <span className="search1-text29">help?</span>
          <div className="search1-container15">
            <h1 className="search1-text30">Trending Searches</h1>
            <div className="search1-container16">
              <svg viewBox="0 0 1024 1024" className="search1-icon13">
                <path d="M725.333 298.667h153.003l-302.336 302.336-183.168-183.168c-16.683-16.683-43.691-16.683-60.331 0l-320 320c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l289.835-289.835 183.168 183.168c16.683 16.683 43.691 16.683 60.331 0l332.501-332.501v153.003c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256c0-5.803-1.152-11.307-3.243-16.341s-5.163-9.728-9.216-13.781c-0.043-0.043-0.043-0.043-0.085-0.085-3.925-3.925-8.619-7.083-13.781-9.216-5.035-2.091-10.539-3.243-16.341-3.243h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
              <span className="search1-text31">
                सौरव गांगुली
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </div>
            <div className="search1-container17">
              <svg viewBox="0 0 1024 1024" className="search1-icon15">
                <path d="M725.333 298.667h153.003l-302.336 302.336-183.168-183.168c-16.683-16.683-43.691-16.683-60.331 0l-320 320c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l289.835-289.835 183.168 183.168c16.683 16.683 43.691 16.683 60.331 0l332.501-332.501v153.003c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256c0-5.803-1.152-11.307-3.243-16.341s-5.163-9.728-9.216-13.781c-0.043-0.043-0.043-0.043-0.085-0.085-3.925-3.925-8.619-7.083-13.781-9.216-5.035-2.091-10.539-3.243-16.341-3.243h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
              <span className="search1-text32">World Hypertension Day</span>
            </div>
            <div className="search1-container18">
              <svg viewBox="0 0 1024 1024" className="search1-icon17">
                <path d="M725.333 298.667h153.003l-302.336 302.336-183.168-183.168c-16.683-16.683-43.691-16.683-60.331 0l-320 320c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l289.835-289.835 183.168 183.168c16.683 16.683 43.691 16.683 60.331 0l332.501-332.501v153.003c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256c0-5.803-1.152-11.307-3.243-16.341s-5.163-9.728-9.216-13.781c-0.043-0.043-0.043-0.043-0.085-0.085-3.925-3.925-8.619-7.083-13.781-9.216-5.035-2.091-10.539-3.243-16.341-3.243h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
              <span className="search1-text33">Cyber X</span>
            </div>
            <div className="search1-container19">
              <svg viewBox="0 0 1024 1024" className="search1-icon19">
                <path d="M725.333 298.667h153.003l-302.336 302.336-183.168-183.168c-16.683-16.683-43.691-16.683-60.331 0l-320 320c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l289.835-289.835 183.168 183.168c16.683 16.683 43.691 16.683 60.331 0l332.501-332.501v153.003c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256c0-5.803-1.152-11.307-3.243-16.341s-5.163-9.728-9.216-13.781c-0.043-0.043-0.043-0.043-0.085-0.085-3.925-3.925-8.619-7.083-13.781-9.216-5.035-2.091-10.539-3.243-16.341-3.243h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
              <span className="search1-text34">Atamanirbhar Bharat</span>
            </div>
            <div className="search1-container20">
              <svg viewBox="0 0 1024 1024" className="search1-icon21">
                <path d="M725.333 298.667h153.003l-302.336 302.336-183.168-183.168c-16.683-16.683-43.691-16.683-60.331 0l-320 320c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l289.835-289.835 183.168 183.168c16.683 16.683 43.691 16.683 60.331 0l332.501-332.501v153.003c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256c0-5.803-1.152-11.307-3.243-16.341s-5.163-9.728-9.216-13.781c-0.043-0.043-0.043-0.043-0.085-0.085-3.925-3.925-8.619-7.083-13.781-9.216-5.035-2.091-10.539-3.243-16.341-3.243h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
              <span className="search1-text35"> வந்தே பாரே்</span>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
      <style jsx>
        {`
          .search1-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .search1-hero {
            width: 100%;
            height: 100%;
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
                113deg,
                rgba(7, 70, 96, 0.8) 6%,
                rgba(5, 104, 78, 0.8) 94%
              ),
              url('https://cdn.dribbble.com/users/4143097/screenshots/9133710/media/63ecbf3046d4520d2c5e4b329ab86bb2.gif');
          }
          .search1-text {
            color: var(--dl-color-gray-white);
            margin-top: var(--dl-space-space-threeunits);
            margin-bottom: var(--dl-space-space-twounits);
          }
          .search1-text01 {
            color: var(--dl-color-gray-white);
            font-size: 3rem;
            transition: 0.3s;
          }
          .search1-text01:hover {
            color: var(--dl-color-gray-white);
            font-size: 3.2rem;
            font-style: normal;
            font-weight: 800;
            border-color: var(--dl-color-gray-black);
            border-width: 0px;
          }
          .search1-image {
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
          .search1-image:hover {
            width: 112px;
            height: 122px;
          }
          .search1-steps {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            flex-direction: column;
          }
          .search1-container01 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .search1-step {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .search1-container02 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            padding-left: 2px;
            padding-right: 2px;
            flex-direction: row;
            justify-content: center;
          }
          .search1-line {
            flex: 1;
            height: 0px;
            display: flex;
            align-items: flex-start;
            border-color: transparent;
            border-style: dashed;
            border-width: 2px;
            flex-direction: row;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .search1-container03 {
            flex: 0 0 auto;
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            display: flex;
            transition: 0.3s;
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: row;
            justify-content: center;
            background-color: #f5f5f5ff;
          }
          .search1-container03:hover {
            background-color: #3a4ba6;
          }
          .search1-icon {
            width: 24px;
            height: 24px;
          }
          .search1-line1 {
            flex: 1;
            height: 0px;
            display: flex;
            align-items: flex-start;
            border-color: var(--dl-color-gray-900);
            border-style: dashed;
            border-width: 2px;
            flex-direction: row;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .search1-container04 {
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
          }
          .search1-text02 {
            color: var(--dl-color-gray-white);
            font-size: 1.5rem;
            text-align: center;
            font-weight: 500;
            margin-bottom: var(--dl-space-space-unit);
          }
          .search1-text07 {
            color: var(--dl-color-gray-white);
            font-size: 0.75rem;
            text-align: center;
          }
          .search1-step1 {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .search1-container05 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            padding-left: 2px;
            padding-right: 2px;
            flex-direction: row;
            justify-content: center;
          }
          .search1-line2 {
            flex: 1;
            height: 0px;
            display: flex;
            align-items: flex-start;
            border-color: var(--dl-color-gray-900);
            border-style: dashed;
            border-width: 2px;
            flex-direction: row;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .search1-container06 {
            flex: 0 0 auto;
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            display: flex;
            transition: 0.3s;
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: row;
            justify-content: center;
            background-color: #f5f5f5ff;
          }
          .search1-container06:hover {
            background-color: #c62727;
          }
          .search1-icon02 {
            width: 24px;
            height: 24px;
          }
          .search1-line3 {
            flex: 1;
            height: 0px;
            display: flex;
            align-items: flex-start;
            border-color: var(--dl-color-gray-900);
            border-style: dashed;
            border-width: 2px;
            flex-direction: row;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .search1-container07 {
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
          }
          .search1-text08 {
            color: var(--dl-color-gray-white);
            font-size: 1.5rem;
            text-align: center;
            font-weight: 500;
            margin-bottom: var(--dl-space-space-unit);
          }
          .search1-text13 {
            color: var(--dl-color-gray-white);
            font-size: 0.75rem;
            text-align: center;
          }
          .search1-step2 {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .search1-container08 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            padding-left: 2px;
            padding-right: 2px;
            flex-direction: row;
            justify-content: center;
          }
          .search1-line4 {
            flex: 1;
            height: 0px;
            display: flex;
            align-items: flex-start;
            border-color: var(--dl-color-gray-900);
            border-style: dashed;
            border-width: 2px;
            flex-direction: row;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .search1-container09 {
            flex: 0 0 auto;
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            display: flex;
            transition: 0.3s;
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: row;
            justify-content: center;
            background-color: #f5f5f5ff;
          }
          .search1-container09:hover {
            background-color: #4a9228;
          }
          .search1-icon06 {
            fill: var(--dl-color-gray-black);
            width: 24px;
            height: 24px;
          }
          .search1-line5 {
            flex: 1;
            height: 0px;
            display: flex;
            align-items: flex-start;
            border-color: var(--dl-color-gray-900);
            border-style: dashed;
            border-width: 2px;
            flex-direction: row;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .search1-container10 {
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
          }
          .search1-text16 {
            color: var(--dl-color-gray-white);
            font-size: 1.5rem;
            text-align: center;
            font-weight: 500;
            margin-bottom: var(--dl-space-space-unit);
          }
          .search1-text21 {
            color: var(--dl-color-gray-white);
            font-size: 0.75rem;
            text-align: center;
          }
          .search1-step3 {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .search1-container11 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            padding-left: 2px;
            padding-right: 2px;
            flex-direction: row;
            justify-content: center;
          }
          .search1-line6 {
            flex: 1;
            height: 0px;
            display: flex;
            align-items: flex-start;
            border-color: var(--dl-color-gray-900);
            border-style: dashed;
            border-width: 2px;
            flex-direction: row;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .search1-container12 {
            flex: 0 0 auto;
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            display: flex;
            transition: 0.3s;
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: row;
            justify-content: center;
            background-color: #f5f5f5ff;
          }
          .search1-container12:hover {
            background-color: #b03ad2;
          }
          .search1-icon09 {
            fill: var(--dl-color-gray-black);
            width: 24px;
            height: 24px;
          }
          .search1-line7 {
            flex: 1;
            height: 0px;
            display: flex;
            align-items: flex-start;
            border-color: transparent;
            border-style: dashed;
            border-width: 2px;
            flex-direction: row;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .search1-container13 {
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
          }
          .search1-text22 {
            color: var(--dl-color-gray-white);
            font-size: 1.5rem;
            text-align: center;
            font-weight: 500;
            margin-bottom: var(--dl-space-space-unit);
          }
          .search1-text27 {
            color: var(--dl-color-gray-white);
            font-size: 0.75rem;
            text-align: center;
          }
          .search1-container14 {
            flex: 0 0 auto;
            width: 100%;
            height: 100px;
            margin: var(--dl-space-space-oneandhalfunits);
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: flex-start;
          }
          .search1-textinput {
            width: 100%;
            font-size: 0.75rem;
            transition: 0.3s;
            border-color: #060606;
            border-radius: var(--dl-radius-radius-radius4);
          }
          .search1-textinput:focus {
            color: #ffffff;
            font-size: 0.8rem;
            background-color: #c6c6c6;
          }
          .search1-btn-group {
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: row;
          }
          .search1-link {
            margin: var(--dl-space-space-unit);
            display: flex;
            font-size: 0.75rem;
            font-style: normal;
            transition: 0.3s;
            font-weight: 600;
            padding-top: var(--dl-space-space-unit);
            border-width: 1px;
            padding-left: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-unit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-unit);
            text-transform: uppercase;
            text-decoration: none;
          }
          .search1-link:hover {
            color: #ffffff;
            transform: scale(1.02);
            background-color: #0c7aad;
          }
          .search1-text28 {
            align-self: center;
          }
          .search1-icon11 {
            width: 24px;
            height: 24px;
            margin-top: 0px;
            margin-left: var(--dl-space-space-halfunit);
            margin-right: var(--dl-space-space-halfunit);
            margin-bottom: 0px;
          }
          .search1-text29 {
            top: 32px;
            color: rgba(0, 0, 0, 0);
            right: 32px;
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            position: absolute;
            transition: 0.3s;
            text-decoration: none;
          }
          .search1-text29:hover {
            color: var(--dl-color-gray-white);
          }
          .search1-container15 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
            background-color: rgba(89, 89, 89, 0.49);
          }
          .search1-text30 {
            color: var(--dl-color-gray-white);
            margin: var(--dl-space-space-halfunit);
            font-size: 1.5em;
          }
          .search1-container16 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
          }
          .search1-icon13 {
            width: 32px;
            height: 32px;
            margin-left: var(--dl-space-space-halfunit);
          }
          .search1-text31 {
            margin: var(--dl-space-space-halfunit);
            transition: 0.3s;
          }
          .search1-text31:hover {
            font-size: 18px;
          }
          .search1-container17 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
          }
          .search1-icon15 {
            width: 32px;
            height: 32px;
            margin-left: var(--dl-space-space-halfunit);
          }
          .search1-text32 {
            margin: var(--dl-space-space-halfunit);
            transition: 0.3s;
          }
          .search1-text32:hover {
            font-size: 18px;
          }
          .search1-container18 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
          }
          .search1-icon17 {
            width: 32px;
            height: 32px;
            margin-left: var(--dl-space-space-halfunit);
          }
          .search1-text33 {
            margin: var(--dl-space-space-halfunit);
            transition: 0.3s;
          }
          .search1-text33:hover {
            font-size: 18px;
          }
          .search1-container19 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
          }
          .search1-icon19 {
            width: 32px;
            height: 32px;
            margin-left: var(--dl-space-space-halfunit);
          }
          .search1-text34 {
            margin: var(--dl-space-space-halfunit);
            transition: 0.3s;
          }
          .search1-text34:hover {
            font-size: 18px;
          }
          .search1-container20 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
          }
          .search1-icon21 {
            width: 32px;
            height: 32px;
            margin-left: var(--dl-space-space-halfunit);
          }
          .search1-text35 {
            margin: var(--dl-space-space-halfunit);
            transition: 0.3s;
          }
          .search1-text35:hover {
            font-size: 18px;
          }
          @media (max-width: 991px) {
            .search1-hero {
              flex-direction: column;
            }
            .search1-text {
              text-align: center;
            }
            .search1-text01 {
              text-align: center;
            }
          }
          @media (max-width: 767px) {
            .search1-hero {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .search1-steps {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .search1-container01 {
              align-items: flex-start;
              padding-left: var(--dl-space-space-fiveunits);
              flex-direction: column;
            }
            .search1-step {
              width: 100%;
              height: auto;
              flex-direction: row;
              justify-content: center;
            }
            .search1-container02 {
              width: var(--dl-size-size-small);
              height: auto;
              align-self: stretch;
              padding-top: 0px;
              padding-left: 0px;
              padding-right: 0px;
              flex-direction: column;
              padding-bottom: 2px;
              justify-content: space-between;
            }
            .search1-line1 {
              border-color: var(--dl-color-gray-900);
              border-style: dashed;
              border-top-width: 0px;
              border-left-width: 2px;
            }
            .search1-container04 {
              width: 100%;
              align-items: flex-start;
              padding-top: var(--dl-space-space-twounits);
              flex-direction: column;
              padding-bottom: var(--dl-space-space-twounits);
              justify-content: space-between;
            }
            .search1-text02 {
              margin-top: var(--dl-space-space-twounits);
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-unit);
            }
            .search1-text07 {
              text-align: left;
            }
            .search1-step1 {
              width: 100%;
              height: auto;
              flex-direction: row;
              justify-content: center;
            }
            .search1-container05 {
              width: var(--dl-size-size-small);
              height: auto;
              align-self: stretch;
              padding-top: 0px;
              padding-left: 0px;
              padding-right: 0px;
              flex-direction: column;
              padding-bottom: 2px;
              justify-content: space-between;
            }
            .search1-line2 {
              border-top-width: 0px;
              border-left-width: 2px;
            }
            .search1-line3 {
              border-color: var(--dl-color-gray-900);
              border-style: dashed;
              border-top-width: 0px;
              border-left-width: 2px;
            }
            .search1-container07 {
              width: 100%;
              align-items: flex-start;
              padding-top: var(--dl-space-space-twounits);
              flex-direction: column;
              padding-bottom: var(--dl-space-space-twounits);
              justify-content: space-between;
            }
            .search1-text08 {
              margin-top: var(--dl-space-space-twounits);
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-unit);
            }
            .search1-text13 {
              text-align: left;
            }
            .search1-step2 {
              width: 100%;
              height: auto;
              flex-direction: row;
              justify-content: center;
            }
            .search1-container08 {
              width: var(--dl-size-size-small);
              height: auto;
              align-self: stretch;
              padding-top: 0px;
              padding-left: 0px;
              padding-right: 0px;
              flex-direction: column;
              padding-bottom: 2px;
              justify-content: space-between;
            }
            .search1-line4 {
              border-top-width: 0px;
              border-left-width: 2px;
            }
            .search1-line5 {
              border-color: var(--dl-color-gray-900);
              border-style: dashed;
              border-top-width: 0px;
              border-left-width: 2px;
            }
            .search1-container10 {
              width: 100%;
              align-items: flex-start;
              padding-top: var(--dl-space-space-twounits);
              flex-direction: column;
              padding-bottom: var(--dl-space-space-twounits);
              justify-content: space-between;
            }
            .search1-text16 {
              margin-top: var(--dl-space-space-twounits);
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-unit);
            }
            .search1-text21 {
              text-align: left;
            }
            .search1-step3 {
              width: 100%;
              height: auto;
              flex-direction: row;
              justify-content: center;
            }
            .search1-container11 {
              width: var(--dl-size-size-small);
              height: auto;
              align-self: stretch;
              padding-top: 0px;
              padding-left: 0px;
              padding-right: 0px;
              flex-direction: column;
              padding-bottom: 2px;
              justify-content: space-between;
            }
            .search1-line6 {
              border-top-width: 0px;
              border-left-width: 2px;
            }
            .search1-line7 {
              border-color: transparent;
              border-style: dashed;
              border-top-width: 0px;
              border-left-width: 2px;
            }
            .search1-container13 {
              width: 100%;
              align-items: flex-start;
              padding-top: var(--dl-space-space-twounits);
              flex-direction: column;
              padding-bottom: var(--dl-space-space-twounits);
              justify-content: space-between;
            }
            .search1-text22 {
              margin-top: var(--dl-space-space-twounits);
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-unit);
            }
            .search1-text27 {
              text-align: left;
            }
          }
          @media (max-width: 479px) {
            .search1-hero {
              width: 100%;
              padding: var(--dl-space-space-twounits);
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .search1-steps {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .search1-container01 {
              padding-left: 0px;
            }
            .search1-container04 {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: 0px;
              padding-bottom: var(--dl-space-space-twounits);
            }
            .search1-text02 {
              margin-left: 0px;
              margin-right: var(--dl-space-space-twounits);
            }
            .search1-container07 {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: 0px;
              padding-bottom: var(--dl-space-space-twounits);
            }
            .search1-text08 {
              margin-left: 0px;
              margin-right: var(--dl-space-space-twounits);
            }
            .search1-container10 {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: 0px;
              padding-bottom: var(--dl-space-space-twounits);
            }
            .search1-text16 {
              margin-left: 0px;
              margin-right: var(--dl-space-space-twounits);
            }
            .search1-container13 {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: 0px;
              padding-bottom: var(--dl-space-space-twounits);
            }
            .search1-text22 {
              margin-left: 0px;
              margin-right: var(--dl-space-space-twounits);
            }
            .search1-btn-group {
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  )
}

export default Search1
