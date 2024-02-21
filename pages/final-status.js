import React from 'react'
import Head from 'next/head'

import Header from '../components/header'
import BlogPostCard21 from '../components/blog-post-card21'
import Footer from '../components/footer'

const FinalStatus = (props) => {
  return (
    <>
      <div className="final-status-container">
        <Head>
          <title>FinalStatus - cyberX</title>
          <meta property="og:title" content="FinalStatus - cyberX" />
        </Head>
        <Header></Header>
        <div className="final-status-container01">
          <div className="final-status-hero">
            <div className="final-status-container02">
              <h1 className="final-status-text">Stats and Graphs </h1>
              <svg viewBox="0 0 1024 1024" className="final-status-icon">
                <path d="M448 576v-448c-247.424 0-448 200.576-448 448s200.576 448 448 448 448-200.576 448-448c0-72.034-17.028-140.084-47.236-200.382l-400.764 200.382zM912.764 247.618c-73.552-146.816-225.374-247.618-400.764-247.618v448l400.764-200.382z"></path>
              </svg>
            </div>
            <img
              alt="image"
              src="/whatsapp%20image%202023-05-01%20at%2022.42.54-1500h.jpg"
              className="final-status-image"
            />
          </div>
        </div>
        <div className="final-status-container03">
          <h1 className="final-status-text01">Sentiment Analysis</h1>
          <div className="final-status-container04">
            <div className="final-status-container05">
              <span className="final-status-text02">😡</span>
              <span className="final-status-text03">Action Needed</span>
            </div>
            <div className="final-status-container06">
              <span className="final-status-text04">😠</span>
              <span className="final-status-text05">Violent</span>
            </div>
            <div className="final-status-container07">
              <span className="final-status-text06">☹️</span>
              <span className="final-status-text07">Offending</span>
            </div>
            <div className="final-status-container08">
              <span className="final-status-text08">😕</span>
              <span className="final-status-text09">Hateful</span>
            </div>
            <div className="final-status-container09">
              <span className="final-status-text10">😐</span>
              <span className="final-status-text11">Neutral</span>
            </div>
            <div className="final-status-container10">
              <span className="final-status-text12">🙂</span>
              <span className="final-status-text13">Positive</span>
            </div>
          </div>
        </div>
        <div className="final-status-container11">
          <div className="final-status-profile">
            <img
              alt="Instagram"
              src="https://i.pinimg.com/736x/39/8c/25/398c25a4436e5b8ca72f141084cdc66e.jpg"
              loading="eager"
              className="final-status-image1"
            />
            <span className="final-status-text14">TWITTER</span>
          </div>
        </div>
        <div className="final-status-blog">
          <BlogPostCard21
            text="😕"
            title="AI is transforming industries, but it's also causing job losses. As we navigate this change, it's crucial to invest in reskilling and upskilling programs for affected workers. Let's work towards a future where AI benefits everyone, not just a select few. #AI #jobloss #reskilling"
            imageSrc="https://images.unsplash.com/photo-1595565312451-23051ab0666c?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDI0fHxwb3J0cmFpdCUyMHdvbWFufGVufDB8fHx8MTYyNjQ1MDU4MQ&amp;ixlib=rb-1.2.1&amp;h=1000"
            description="AI is transforming industries, but it's also causing job losses. As we navigate this change, it's crucial to invest in reskilling and upskilling programs for affected workers. Let's work towards a future where AI benefits everyone, not just a select few. #AI #jobloss #reskilling"
            profileSrc="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDExfHxwb3J0cmFpdCUyMHdvbWFufGVufDB8fHx8MTYyNjQ1MDU4MQ&amp;ixlib=rb-1.2.1&amp;h=1200"
            rootClassName="rootClassName12"
          ></BlogPostCard21>
          <BlogPostCard21
            text="😕"
            title="AI is transforming industries, but it's also causing job losses. As we navigate this change, it's crucial to invest in reskilling and upskilling programs for affected workers. Let's work towards a future where AI benefits everyone, not just a select few. #AI #jobloss #reskilling"
            imageSrc="https://images.unsplash.com/photo-1595565312451-23051ab0666c?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDI0fHxwb3J0cmFpdCUyMHdvbWFufGVufDB8fHx8MTYyNjQ1MDU4MQ&amp;ixlib=rb-1.2.1&amp;h=1000"
            description="AI is transforming industries, but it's also causing job losses. As we navigate this change, it's crucial to invest in reskilling and upskilling programs for affected workers. Let's work towards a future where AI benefits everyone, not just a select few. #AI #jobloss #reskilling"
            profileSrc="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDExfHxwb3J0cmFpdCUyMHdvbWFufGVufDB8fHx8MTYyNjQ1MDU4MQ&amp;ixlib=rb-1.2.1&amp;h=1200"
            rootClassName="rootClassName13"
          ></BlogPostCard21>
          <BlogPostCard21
            text="😕"
            title="AI is transforming industries, but it's also causing job losses. As we navigate this change, it's crucial to invest in reskilling and upskilling programs for affected workers. Let's work towards a future where AI benefits everyone, not just a select few. #AI #jobloss #reskilling"
            imageSrc="https://images.unsplash.com/photo-1595565312451-23051ab0666c?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDI0fHxwb3J0cmFpdCUyMHdvbWFufGVufDB8fHx8MTYyNjQ1MDU4MQ&amp;ixlib=rb-1.2.1&amp;h=1000"
            description="AI is transforming industries, but it's also causing job losses. As we navigate this change, it's crucial to invest in reskilling and upskilling programs for affected workers. Let's work towards a future where AI benefits everyone, not just a select few. #AI #jobloss #reskilling"
            profileSrc="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDExfHxwb3J0cmFpdCUyMHdvbWFufGVufDB8fHx8MTYyNjQ1MDU4MQ&amp;ixlib=rb-1.2.1&amp;h=1200"
            rootClassName="rootClassName14"
          ></BlogPostCard21>
          <BlogPostCard21
            text="😕"
            title="AI is transforming industries, but it's also causing job losses. As we navigate this change, it's crucial to invest in reskilling and upskilling programs for affected workers. Let's work towards a future where AI benefits everyone, not just a select few. #AI #jobloss #reskilling"
            imageSrc="https://images.unsplash.com/photo-1595565312451-23051ab0666c?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDI0fHxwb3J0cmFpdCUyMHdvbWFufGVufDB8fHx8MTYyNjQ1MDU4MQ&amp;ixlib=rb-1.2.1&amp;h=1000"
            description="AI is transforming industries, but it's also causing job losses. As we navigate this change, it's crucial to invest in reskilling and upskilling programs for affected workers. Let's work towards a future where AI benefits everyone, not just a select few. #AI #jobloss #reskilling"
            profileSrc="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDExfHxwb3J0cmFpdCUyMHdvbWFufGVufDB8fHx8MTYyNjQ1MDU4MQ&amp;ixlib=rb-1.2.1&amp;h=1200"
            rootClassName="rootClassName15"
          ></BlogPostCard21>
          <BlogPostCard21
            text="😕"
            title="AI is transforming industries, but it's also causing job losses. As we navigate this change, it's crucial to invest in reskilling and upskilling programs for affected workers. Let's work towards a future where AI benefits everyone, not just a select few. #AI #jobloss #reskilling"
            imageSrc="https://images.unsplash.com/photo-1595565312451-23051ab0666c?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDI0fHxwb3J0cmFpdCUyMHdvbWFufGVufDB8fHx8MTYyNjQ1MDU4MQ&amp;ixlib=rb-1.2.1&amp;h=1000"
            description="AI is transforming industries, but it's also causing job losses. As we navigate this change, it's crucial to invest in reskilling and upskilling programs for affected workers. Let's work towards a future where AI benefits everyone, not just a select few. #AI #jobloss #reskilling"
            profileSrc="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDExfHxwb3J0cmFpdCUyMHdvbWFufGVufDB8fHx8MTYyNjQ1MDU4MQ&amp;ixlib=rb-1.2.1&amp;h=1200"
            rootClassName="rootClassName16"
          ></BlogPostCard21>
        </div>
        <div className="final-status-profile1">
          <img
            alt="Instagram"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png"
            loading="eager"
            className="final-status-image2"
          />
          <span className="final-status-text15">INSTAGRAM</span>
        </div>
        <div className="final-status-blog1">
          <BlogPostCard21
            text="😕"
            title="AI is transforming industries, but it's also causing job losses. As we navigate this change, it's crucial to invest in reskilling and upskilling programs for affected workers. Let's work towards a future where AI benefits everyone, not just a select few. #AI #jobloss #reskilling"
            imageSrc="https://images.unsplash.com/photo-1595565312451-23051ab0666c?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDI0fHxwb3J0cmFpdCUyMHdvbWFufGVufDB8fHx8MTYyNjQ1MDU4MQ&amp;ixlib=rb-1.2.1&amp;h=1000"
            description="AI is transforming industries, but it's also causing job losses. As we navigate this change, it's crucial to invest in reskilling and upskilling programs for affected workers. Let's work towards a future where AI benefits everyone, not just a select few. #AI #jobloss #reskilling"
            profileSrc="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDExfHxwb3J0cmFpdCUyMHdvbWFufGVufDB8fHx8MTYyNjQ1MDU4MQ&amp;ixlib=rb-1.2.1&amp;h=1200"
            rootClassName="rootClassName17"
          ></BlogPostCard21>
          <BlogPostCard21
            text="😕"
            title="AI is transforming industries, but it's also causing job losses. As we navigate this change, it's crucial to invest in reskilling and upskilling programs for affected workers. Let's work towards a future where AI benefits everyone, not just a select few. #AI #jobloss #reskilling"
            imageSrc="https://images.unsplash.com/photo-1595565312451-23051ab0666c?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDI0fHxwb3J0cmFpdCUyMHdvbWFufGVufDB8fHx8MTYyNjQ1MDU4MQ&amp;ixlib=rb-1.2.1&amp;h=1000"
            description="AI is transforming industries, but it's also causing job losses. As we navigate this change, it's crucial to invest in reskilling and upskilling programs for affected workers. Let's work towards a future where AI benefits everyone, not just a select few. #AI #jobloss #reskilling"
            profileSrc="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDExfHxwb3J0cmFpdCUyMHdvbWFufGVufDB8fHx8MTYyNjQ1MDU4MQ&amp;ixlib=rb-1.2.1&amp;h=1200"
            rootClassName="rootClassName18"
          ></BlogPostCard21>
          <BlogPostCard21
            text="😕"
            title="AI is transforming industries, but it's also causing job losses. As we navigate this change, it's crucial to invest in reskilling and upskilling programs for affected workers. Let's work towards a future where AI benefits everyone, not just a select few. #AI #jobloss #reskilling"
            imageSrc="https://images.unsplash.com/photo-1595565312451-23051ab0666c?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDI0fHxwb3J0cmFpdCUyMHdvbWFufGVufDB8fHx8MTYyNjQ1MDU4MQ&amp;ixlib=rb-1.2.1&amp;h=1000"
            description="AI is transforming industries, but it's also causing job losses. As we navigate this change, it's crucial to invest in reskilling and upskilling programs for affected workers. Let's work towards a future where AI benefits everyone, not just a select few. #AI #jobloss #reskilling"
            profileSrc="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDExfHxwb3J0cmFpdCUyMHdvbWFufGVufDB8fHx8MTYyNjQ1MDU4MQ&amp;ixlib=rb-1.2.1&amp;h=1200"
            rootClassName="rootClassName19"
          ></BlogPostCard21>
          <BlogPostCard21
            text="😕"
            title="AI is transforming industries, but it's also causing job losses. As we navigate this change, it's crucial to invest in reskilling and upskilling programs for affected workers. Let's work towards a future where AI benefits everyone, not just a select few. #AI #jobloss #reskilling"
            imageSrc="https://images.unsplash.com/photo-1595565312451-23051ab0666c?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDI0fHxwb3J0cmFpdCUyMHdvbWFufGVufDB8fHx8MTYyNjQ1MDU4MQ&amp;ixlib=rb-1.2.1&amp;h=1000"
            description="AI is transforming industries, but it's also causing job losses. As we navigate this change, it's crucial to invest in reskilling and upskilling programs for affected workers. Let's work towards a future where AI benefits everyone, not just a select few. #AI #jobloss #reskilling"
            profileSrc="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDExfHxwb3J0cmFpdCUyMHdvbWFufGVufDB8fHx8MTYyNjQ1MDU4MQ&amp;ixlib=rb-1.2.1&amp;h=1200"
            rootClassName="rootClassName20"
          ></BlogPostCard21>
          <BlogPostCard21
            text="😕"
            title="AI is transforming industries, but it's also causing job losses. As we navigate this change, it's crucial to invest in reskilling and upskilling programs for affected workers. Let's work towards a future where AI benefits everyone, not just a select few. #AI #jobloss #reskilling"
            imageSrc="https://images.unsplash.com/photo-1595565312451-23051ab0666c?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDI0fHxwb3J0cmFpdCUyMHdvbWFufGVufDB8fHx8MTYyNjQ1MDU4MQ&amp;ixlib=rb-1.2.1&amp;h=1000"
            description="AI is transforming industries, but it's also causing job losses. As we navigate this change, it's crucial to invest in reskilling and upskilling programs for affected workers. Let's work towards a future where AI benefits everyone, not just a select few. #AI #jobloss #reskilling"
            profileSrc="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDExfHxwb3J0cmFpdCUyMHdvbWFufGVufDB8fHx8MTYyNjQ1MDU4MQ&amp;ixlib=rb-1.2.1&amp;h=1200"
            rootClassName="rootClassName21"
          ></BlogPostCard21>
        </div>
        <div className="final-status-container12">
          <div className="final-status-profile2">
            <img
              alt="Instagram"
              src="https://www.freeiconspng.com/thumbs/youtube-logo-png/youtube-logo-png-hd-21.png"
              loading="eager"
              className="final-status-image3"
            />
            <span className="final-status-text16">YOUTUBE</span>
          </div>
        </div>
        <div className="final-status-blog2">
          <BlogPostCard21
            text="😕"
            title="AI is transforming industries, but it's also causing job losses. As we navigate this change, it's crucial to invest in reskilling and upskilling programs for affected workers. Let's work towards a future where AI benefits everyone, not just a select few. #AI #jobloss #reskilling"
            imageSrc="https://images.unsplash.com/photo-1595565312451-23051ab0666c?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDI0fHxwb3J0cmFpdCUyMHdvbWFufGVufDB8fHx8MTYyNjQ1MDU4MQ&amp;ixlib=rb-1.2.1&amp;h=1000"
            description="AI is transforming industries, but it's also causing job losses. As we navigate this change, it's crucial to invest in reskilling and upskilling programs for affected workers. Let's work towards a future where AI benefits everyone, not just a select few. #AI #jobloss #reskilling"
            profileSrc="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDExfHxwb3J0cmFpdCUyMHdvbWFufGVufDB8fHx8MTYyNjQ1MDU4MQ&amp;ixlib=rb-1.2.1&amp;h=1200"
            rootClassName="rootClassName22"
          ></BlogPostCard21>
          <BlogPostCard21
            text="😕"
            title="AI is transforming industries, but it's also causing job losses. As we navigate this change, it's crucial to invest in reskilling and upskilling programs for affected workers. Let's work towards a future where AI benefits everyone, not just a select few. #AI #jobloss #reskilling"
            imageSrc="https://images.unsplash.com/photo-1595565312451-23051ab0666c?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDI0fHxwb3J0cmFpdCUyMHdvbWFufGVufDB8fHx8MTYyNjQ1MDU4MQ&amp;ixlib=rb-1.2.1&amp;h=1000"
            description="AI is transforming industries, but it's also causing job losses. As we navigate this change, it's crucial to invest in reskilling and upskilling programs for affected workers. Let's work towards a future where AI benefits everyone, not just a select few. #AI #jobloss #reskilling"
            profileSrc="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDExfHxwb3J0cmFpdCUyMHdvbWFufGVufDB8fHx8MTYyNjQ1MDU4MQ&amp;ixlib=rb-1.2.1&amp;h=1200"
            rootClassName="rootClassName23"
          ></BlogPostCard21>
          <BlogPostCard21
            text="😕"
            title="AI is transforming industries, but it's also causing job losses. As we navigate this change, it's crucial to invest in reskilling and upskilling programs for affected workers. Let's work towards a future where AI benefits everyone, not just a select few. #AI #jobloss #reskilling"
            imageSrc="https://images.unsplash.com/photo-1595565312451-23051ab0666c?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDI0fHxwb3J0cmFpdCUyMHdvbWFufGVufDB8fHx8MTYyNjQ1MDU4MQ&amp;ixlib=rb-1.2.1&amp;h=1000"
            description="AI is transforming industries, but it's also causing job losses. As we navigate this change, it's crucial to invest in reskilling and upskilling programs for affected workers. Let's work towards a future where AI benefits everyone, not just a select few. #AI #jobloss #reskilling"
            profileSrc="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDExfHxwb3J0cmFpdCUyMHdvbWFufGVufDB8fHx8MTYyNjQ1MDU4MQ&amp;ixlib=rb-1.2.1&amp;h=1200"
            rootClassName="rootClassName24"
          ></BlogPostCard21>
          <BlogPostCard21
            text="😕"
            title="AI is transforming industries, but it's also causing job losses. As we navigate this change, it's crucial to invest in reskilling and upskilling programs for affected workers. Let's work towards a future where AI benefits everyone, not just a select few. #AI #jobloss #reskilling"
            imageSrc="https://images.unsplash.com/photo-1595565312451-23051ab0666c?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDI0fHxwb3J0cmFpdCUyMHdvbWFufGVufDB8fHx8MTYyNjQ1MDU4MQ&amp;ixlib=rb-1.2.1&amp;h=1000"
            description="AI is transforming industries, but it's also causing job losses. As we navigate this change, it's crucial to invest in reskilling and upskilling programs for affected workers. Let's work towards a future where AI benefits everyone, not just a select few. #AI #jobloss #reskilling"
            profileSrc="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDExfHxwb3J0cmFpdCUyMHdvbWFufGVufDB8fHx8MTYyNjQ1MDU4MQ&amp;ixlib=rb-1.2.1&amp;h=1200"
            rootClassName="rootClassName25"
          ></BlogPostCard21>
          <BlogPostCard21
            text="😕"
            title="AI is transforming industries, but it's also causing job losses. As we navigate this change, it's crucial to invest in reskilling and upskilling programs for affected workers. Let's work towards a future where AI benefits everyone, not just a select few. #AI #jobloss #reskilling"
            imageSrc="https://images.unsplash.com/photo-1595565312451-23051ab0666c?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDI0fHxwb3J0cmFpdCUyMHdvbWFufGVufDB8fHx8MTYyNjQ1MDU4MQ&amp;ixlib=rb-1.2.1&amp;h=1000"
            description="AI is transforming industries, but it's also causing job losses. As we navigate this change, it's crucial to invest in reskilling and upskilling programs for affected workers. Let's work towards a future where AI benefits everyone, not just a select few. #AI #jobloss #reskilling"
            profileSrc="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDExfHxwb3J0cmFpdCUyMHdvbWFufGVufDB8fHx8MTYyNjQ1MDU4MQ&amp;ixlib=rb-1.2.1&amp;h=1200"
            rootClassName="rootClassName26"
          ></BlogPostCard21>
        </div>
        <Footer></Footer>
        <div className="final-status-container13"></div>
      </div>
      <style jsx>
        {`
          .final-status-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .final-status-container01 {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .final-status-hero {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            min-height: 80vh;
            align-items: center;
            flex-direction: column;
            background-size: cover;
            justify-content: center;
            background-image: url('https://media.istockphoto.com/id/1360927961/photo/abstract-background-with-interweaving-of-colored-lines-and-dots-network-connection-structure.jpg?b=1&s=612x612&w=0&k=20&c=viueEb4eIGu1GXBmVpsOBXLELS3Y-h7gb6Kq6Hahw4Q=');
          }
          .final-status-container02 {
            margin: var(--dl-space-space-unit);
            display: flex;
            transition: 0.3s;
            align-items: center;
            flex-direction: column;
          }
          .final-status-container02:hover {
            width: 479px;
            height: 159px;
          }
          .final-status-text {
            color: var(--dl-color-gray-white);
            margin: var(--dl-space-space-unit);
            font-size: 3rem;
          }
          .final-status-icon {
            fill: #d9d9d9;
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            align-self: center;
          }
          .final-status-image {
            width: 45rem;
            margin-top: var(--dl-space-space-twounits);
          }
          .final-status-container03 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-halfunit);
            align-self: center;
            margin-top: var(--dl-space-space-oneandhalfunits);
            text-align: center;
            align-items: center;
            margin-left: 0px;
            margin-right: 0px;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            justify-content: center;
          }
          .final-status-text01 {
            align-self: center;
            margin-top: var(--dl-space-space-unit);
            margin-left: var(--dl-space-space-unit);
            margin-right: var(--dl-space-space-unit);
            margin-bottom: var(--dl-space-space-threeunits);
          }
          .final-status-container04 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-self: center;
            align-items: center;
            justify-content: center;
          }
          .final-status-container05 {
            flex: 0 0 auto;
            width: 200px;
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .final-status-text02 {
            font-size: 40px;
            align-self: center;
          }
          .final-status-text03 {
            color: var(--dl-color-danger-300);
            align-self: center;
            font-style: normal;
            font-weight: 700;
          }
          .final-status-container06 {
            flex: 0 0 auto;
            width: 200px;
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .final-status-text04 {
            font-size: 40px;
            align-self: center;
          }
          .final-status-text05 {
            color: var(--dl-color-danger-500);
            align-self: center;
            font-style: normal;
            font-weight: 700;
          }
          .final-status-container07 {
            flex: 0 0 auto;
            width: 200px;
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .final-status-text06 {
            font-size: 40px;
            align-self: center;
          }
          .final-status-text07 {
            color: var(--dl-color-danger-700);
            align-self: center;
            font-style: normal;
            font-weight: 700;
          }
          .final-status-container08 {
            flex: 0 0 auto;
            width: 200px;
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .final-status-text08 {
            font-size: 40px;
            align-self: center;
          }
          .final-status-text09 {
            color: #e18d8d;
            align-self: center;
            font-style: normal;
            font-weight: 700;
          }
          .final-status-container09 {
            flex: 0 0 auto;
            width: 200px;
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .final-status-text10 {
            font-size: 40px;
            align-self: center;
          }
          .final-status-text11 {
            color: var(--dl-color-gray-500);
            align-self: center;
            font-style: normal;
            font-weight: 700;
          }
          .final-status-container10 {
            flex: 0 0 auto;
            width: 200px;
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .final-status-text12 {
            font-size: 40px;
            align-self: center;
          }
          .final-status-text13 {
            color: var(--dl-color-success-300);
            align-self: center;
            font-style: normal;
            font-weight: 700;
          }
          .final-status-container11 {
            width: 100%;
            height: 142px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .final-status-profile {
            width: 100%;
            height: 56px;
            display: flex;
            align-self: center;
            align-items: center;
            justify-content: center;
          }
          .final-status-image1 {
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
          }
          .final-status-text14 {
            font-size: 30px;
            align-self: center;
            font-style: normal;
            font-weight: 800;
            margin-left: var(--dl-space-space-halfunit);
          }
          .final-status-blog {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
          }
          .final-status-profile1 {
            width: 100%;
            height: 56px;
            display: flex;
            align-self: center;
            align-items: center;
            justify-content: center;
          }
          .final-status-image2 {
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
          }
          .final-status-text15 {
            font-size: 30px;
            align-self: center;
            font-style: normal;
            font-weight: 800;
            margin-left: var(--dl-space-space-halfunit);
          }
          .final-status-blog1 {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
          }
          .final-status-container12 {
            width: 100%;
            height: 131px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .final-status-profile2 {
            width: 100%;
            height: 56px;
            display: flex;
            align-self: center;
            align-items: center;
            justify-content: center;
          }
          .final-status-image3 {
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
          }
          .final-status-text16 {
            font-size: 30px;
            align-self: center;
            font-style: normal;
            font-weight: 800;
            margin-left: var(--dl-space-space-halfunit);
          }
          .final-status-blog2 {
            width: 100%;
            height: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
          }
          .final-status-container13 {
            width: 100%;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: 100%;
            display: flex;
            align-self: flex-start;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          @media (max-width: 991px) {
            .final-status-hero {
              flex-direction: column;
            }
            .final-status-container02 {
              align-items: center;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .final-status-text {
              text-align: center;
            }
            .final-status-image {
              width: 80%;
            }
          }
          @media (max-width: 767px) {
            .final-status-hero {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .final-status-blog {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .final-status-blog1 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .final-status-blog2 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
          }
          @media (max-width: 479px) {
            .final-status-hero {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .final-status-container02 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .final-status-blog {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .final-status-blog1 {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .final-status-blog2 {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .final-status-container13 {
              padding-left: 0px;
              padding-right: 0px;
            }
          }
        `}
      </style>
    </>
  )
}

export default FinalStatus
