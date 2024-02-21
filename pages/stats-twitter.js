import React from 'react'
import Head from 'next/head'

import Header from '../components/header'
import BarOfPie from '../components/bar-of-pie'
import Component8 from '../components/component8'
import BlogPostCard21 from '../components/blog-post-card21'
import Footer from '../components/footer'

const StatsTwitter = (props) => {
  return (
    <>
      <div className="stats-twitter-container">
        <Head>
          <title>StatsTwitter - cyberX</title>
          <meta property="og:title" content="StatsTwitter - cyberX" />
        </Head>
        <div className="stats-twitter-testimonial"></div>
        <Header></Header>
        <div className="stats-twitter-container1">
          <div className="stats-twitter-container2">
            <h1 className="stats-twitter-text">Stats and Graphs </h1>
            <svg viewBox="0 0 1024 1024" className="stats-twitter-icon">
              <path d="M448 576v-448c-247.424 0-448 200.576-448 448s200.576 448 448 448 448-200.576 448-448c0-72.034-17.028-140.084-47.236-200.382l-400.764 200.382zM912.764 247.618c-73.552-146.816-225.374-247.618-400.764-247.618v448l400.764-200.382z"></path>
            </svg>
          </div>
          <svg viewBox="0 0 1024 1024" className="stats-twitter-icon2">
            <path d="M1024 226.4c-37.6 16.8-78.2 28-120.6 33 43.4-26 76.6-67.2 92.4-116.2-40.6 24-85.6 41.6-133.4 51-38.4-40.8-93-66.2-153.4-66.2-116 0-210 94-210 210 0 16.4 1.8 32.4 5.4 47.8-174.6-8.8-329.4-92.4-433-219.6-18 31-28.4 67.2-28.4 105.6 0 72.8 37 137.2 93.4 174.8-34.4-1-66.8-10.6-95.2-26.2 0 0.8 0 1.8 0 2.6 0 101.8 72.4 186.8 168.6 206-17.6 4.8-36.2 7.4-55.4 7.4-13.6 0-26.6-1.4-39.6-3.8 26.8 83.4 104.4 144.2 196.2 146-72 56.4-162.4 90-261 90-17 0-33.6-1-50.2-3 93.2 59.8 203.6 94.4 322.2 94.4 386.4 0 597.8-320.2 597.8-597.8 0-9.2-0.2-18.2-0.6-27.2 41-29.4 76.6-66.4 104.8-108.6z"></path>
          </svg>
        </div>
        <div className="stats-twitter-pricing">
          <BarOfPie></BarOfPie>
        </div>
        <div className="stats-twitter-container3">
          <h1 className="stats-twitter-text1">Sentiment scale</h1>
        </div>
        <Component8></Component8>
        <div className="stats-twitter-blog">
          <div className="stats-twitter-container4">
            <BlogPostCard21
              author="News18"
              description="Fee hikes are hitting us hard. As a student, I hope universities can consider our financial struggles and find a solution that doesn't burden us further. #education #feehikes #students"
              profileSrc="data:image/png;base64,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"
              rootClassName="rootClassName3"
            ></BlogPostCard21>
          </div>
          <div className="stats-twitter-container5">
            <BlogPostCard21
              text="😕"
              title="AI is transforming industries, but it's also causing job losses. As we navigate this change, it's crucial to invest in reskilling and upskilling programs for affected workers. Let's work towards a future where AI benefits everyone, not just a select few. #AI #jobloss #reskilling"
              imageSrc="https://images.unsplash.com/photo-1595565312451-23051ab0666c?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDI0fHxwb3J0cmFpdCUyMHdvbWFufGVufDB8fHx8MTYyNjQ1MDU4MQ&amp;ixlib=rb-1.2.1&amp;h=1000"
              description="AI is transforming industries, but it's also causing job losses. As we navigate this change, it's crucial to invest in reskilling and upskilling programs for affected workers. Let's work towards a future where AI benefits everyone, not just a select few. #AI #jobloss #reskilling"
              profileSrc="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDExfHxwb3J0cmFpdCUyMHdvbWFufGVufDB8fHx8MTYyNjQ1MDU4MQ&amp;ixlib=rb-1.2.1&amp;h=1200"
              rootClassName="rootClassName"
            ></BlogPostCard21>
          </div>
          <BlogPostCard21
            text="😠"
            author="Ndtv"
            imageSrc="https://images.unsplash.com/photo-1519699047748-de8e457a634e?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIxfHxwb3J0cmFpdCUyMHdvbWFuJTIwY29sb3J8ZW58MHx8fHwxNjI2NDUwNTU4&amp;ixlib=rb-1.2.1&amp;h=1000"
            description="Students should focus on their studies instead of getting involved in politics. They don't have enough knowledge or experience to make informed decisions, and their actions can be disruptive and harmful to society. Leave politics to the professionals. #students #politics #ignorance"
            profileSrc="https://cdn.ndtv.com/common/images/ogndtv.png"
            rootClassName="rootClassName2"
          ></BlogPostCard21>
        </div>
        <Footer></Footer>
      </div>
      <style jsx>
        {`
          .stats-twitter-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .stats-twitter-testimonial {
            width: 100%;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            justify-content: center;
            background-color: 232323;
          }
          .stats-twitter-container1 {
            width: 100%;
            height: 150px;
            display: flex;
            align-items: center;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            flex-direction: column;
            justify-content: flex-start;
          }
          .stats-twitter-container2 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .stats-twitter-text {
            padding-top: var(--dl-space-space-oneandhalfunits);
            padding-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .stats-twitter-icon {
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            align-self: center;
          }
          .stats-twitter-icon2 {
            fill: #2164e3;
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
          }
          .stats-twitter-pricing {
            width: 100%;
            display: flex;
            background-size: cover;
            justify-content: center;
            background-image: url('https://images.unsplash.com/photo-1503149779833-1de50ebe5f8a?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE2fHxzd2lzcyUyMGNoZWVzZSUyMHBsYW50fGVufDB8fHx8MTYyNTg0MTU0Mg&ixlib=rb-1.2.1&h=1200');
            background-position: center;
          }
          .stats-twitter-container3 {
            flex: 0 0 auto;
            width: 100%;
            height: 100px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .stats-twitter-text1 {
            text-align: center;
            margin-left: var(--dl-space-space-unit);
            margin-right: var(--dl-space-space-unit);
          }
          .stats-twitter-blog {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
          }
          .stats-twitter-container4 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: column;
            justify-content: space-between;
          }
          .stats-twitter-container5 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: column;
            justify-content: space-between;
          }
          @media (max-width: 767px) {
            .stats-twitter-blog {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
          }
          @media (max-width: 479px) {
            .stats-twitter-blog {
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

export default StatsTwitter
