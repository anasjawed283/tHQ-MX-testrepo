import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Header from '../components/header'
import BlogPostCard2 from '../components/blog-post-card2'
import Footer from '../components/footer'

const OutputT1 = (props) => {
  return (
    <>
      <div className="output-t1-container">
        <Head>
          <title>OutputT1 - cyberX</title>
          <meta property="og:title" content="OutputT1 - cyberX" />
        </Head>
        <Header></Header>
        <div className="output-t1-container1">
          <div className="output-t1-container2">
            <div className="output-t1-profile">
              <img
                alt="Instagram"
                src="https://i.pinimg.com/736x/39/8c/25/398c25a4436e5b8ca72f141084cdc66e.jpg"
                loading="eager"
                className="output-t1-image"
              />
              <span className="output-t1-text">TWITTER</span>
            </div>
          </div>
        </div>
        <div className="output-t1-container3">
          <Link href="/stats-twitter">
            <a className="output-t1-link button">
              <span className="output-t1-text1">View Stats</span>
              <svg
                viewBox="0 0 1170.2857142857142 1024"
                className="output-t1-icon"
              >
                <path d="M365.714 512v292.571h-146.286v-292.571h146.286zM585.143 219.429v585.143h-146.286v-585.143h146.286zM1170.286 877.714v73.143h-1170.286v-877.714h73.143v804.571h1097.143zM804.571 365.714v438.857h-146.286v-438.857h146.286zM1024 146.286v658.286h-146.286v-658.286h146.286z"></path>
              </svg>
            </a>
          </Link>
        </div>
        <div className="output-t1-blog">
          <div className="output-t1-container4">
            <BlogPostCard2
              when="10 minutes ago"
              label="Educational"
              title="Fee hike an issue says Student"
              author="News18"
              description="Fee hikes are hitting us hard. As a student, I hope universities can consider our financial struggles and find a solution that doesn't burden us further. #education #feehikes #students"
              profileSrc="data:image/png;base64,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"
              rootClassName="rootClassName7"
            ></BlogPostCard2>
          </div>
          <div className="output-t1-container5">
            <BlogPostCard2
              when="16 minutes ago"
              label="JOBS"
              title="Is AI really a Job Killer?"
              imageSrc="https://images.unsplash.com/photo-1595565312451-23051ab0666c?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDI0fHxwb3J0cmFpdCUyMHdvbWFufGVufDB8fHx8MTYyNjQ1MDU4MQ&amp;ixlib=rb-1.2.1&amp;h=1000"
              description="AI is transforming industries, but it's also causing job losses. As we navigate this change, it's crucial to invest in reskilling and upskilling programs for affected workers. Let's work towards a future where AI benefits everyone, not just a select few. #AI #jobloss #reskilling"
              profileSrc="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDExfHxwb3J0cmFpdCUyMHdvbWFufGVufDB8fHx8MTYyNjQ1MDU4MQ&amp;ixlib=rb-1.2.1&amp;h=1200"
              rootClassName="rootClassName8"
            ></BlogPostCard2>
          </div>
          <BlogPostCard2
            when="18 minutes ago"
            label="Politics"
            title="Students Disrupting govt. Systems"
            author="NDTV"
            imageSrc="https://images.unsplash.com/photo-1519699047748-de8e457a634e?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIxfHxwb3J0cmFpdCUyMHdvbWFuJTIwY29sb3J8ZW58MHx8fHwxNjI2NDUwNTU4&amp;ixlib=rb-1.2.1&amp;h=1000"
            description="Students should focus on their studies instead of getting involved in politics. They don't have enough knowledge or experience to make informed decisions, and their actions can be disruptive and harmful to society. Leave politics to the professionals. #students #politics #ignorance"
            profileSrc="https://cdn.ndtv.com/common/images/ogndtv.png"
            rootClassName="rootClassName6"
          ></BlogPostCard2>
        </div>
        <div className="output-t1-blog1">
          <div className="output-t1-container6">
            <BlogPostCard2
              when="20 minutes ago"
              label="Educational"
              title="Fee hike an issue says Student"
              author="News18"
              description="Fee hikes are hitting us hard. As a student, I hope universities can consider our financial struggles and find a solution that doesn't burden us further. #education #feehikes #students"
              profileSrc="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAA7VBMVEX///8KH0DjKCYAAC8AACmOk58AACfiFxThAAD//Px3fYsACTTU192ipq7sgoEDHT/jIiDlSUecoKkOHz0AFjvjNzVRWGoAACwADTD0t7cAGTz19vfdur1rcH/WtrorNU73kI4zUGb62dkAACQAEjgAABwAABjre3rm6OtaYXH2wcEAACDBxMrq7O7P0tf86ekAAAD3zMzpZ2axtr7iHBkAABXzqqr73t7mUlHkQD/nW1r98PDnubrqbGvzsrHumJjukpI9RVo4QVcfKUImL0hlanmPlaDiLi0xN0l8h5hJT2JUXG7bzdD5iIeClKHNsZQeAAAISklEQVR4nO2bi1ajRhiAQRIgQpxoUJQ01QqJyZLE1cTbWneN941t3/9xCsNcCSDZ424T+39ne2RGGPiYf65YRQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAYGH2TOOHMGv/9ZOXZc9c+yHAcHkAQzBcfsAQDJefNw0bE8OYNFbe0JTgPhPT3Dy63Th9FjNX0dA8vzjkXGwSm4Z5ekJOu967lB1XzfCTlEcMjatDMfdk2/hghsaXlETti/GhDBubc+fWNhsfydA4nj/52PxAhsZB1tlHk49jaLIqvN7bY8eH5qoankh5OEpp4lM8Qp7TVIHhuPpUXUb+jJ95crMRcVDjhpMbcnydzAhoLW43cg3XQ20Z6fyGDSbx1suaYGhskOOvieFXkrwqMLTUZWT3NxZ3jW2xDo/I8blsWFSHq2XY2CbHF3KUFrTDFTNcM69J4ptpGOY3kjj5QIYGDVPl5PaWdbWnjY9jmB4jMV+L5jQrZ5iheC6slj+E4WVK4vpqiQ2Ro4WdCN9ykPSLgii9nY/S25JRGugEh9/JI1kVJCTm0VTVZQnyrIjlBNSnQjLcJO3ozX59YNv2aFyduq5XxpD3NNmKRYZW1SbM2L2cV5rXRKozs/Ooa7sDlkieH/Eccg/kjUjGID4F6bNBiz9Irz7VUQlDdkHt4oLbbJYZ8bUtmmefsWrt07zIMHjNen2YQcUds8QUvyDvgWWM/SQe7lhGZOjsDtKljF3nLUM+1957Ns1nOqXhA2I5Q6VtZRruFBhabZaoavKlit1NgmSdZjwGavAwnC9muO+8YWjQ45N4A6rBFh+1MlEqGLZcEi/BY1lDdM8ibuCnilNwK1ZDWmmtJvIeWkoGrXuv0JAtLUhYskmccjpZyFCpV4ghq5m3DFXfpokhvrgjBOEMV02X1trIVyu2kskoLDQ0bumJaaENYzFD5cVb1NDll9/FF3eFSsJxizye5AGb8zw5hrwZ0qCk6YNFDZNIK2+oq95MKpP7KKSr4S31xTvjVWiPxwOhSQ475QyT8WHyhaYXrkOlHxQY9lIM484xZJUWp3gLjs+PDXXa2/Y6XH84PfP9sDPlIZ3cOC9KD+hptW2j0TD4rs2i7TB6jG6B4SzEswD+L45Cnz2lHTXESl0orHUfdTV+j74AnfezO7jfVZ1uleYkXUCOYeOSlXl99Px8wwQX7Utjqm6+YV+Y9TB4FLYePDUciYVFFYOatI5fHes7ORx26dWfadyO9KLRwrzghdYEmUXHQ3x93HEvYii0vH6AKtJoEHU1PGxdpLEau9fIuKTROh8mhr/n7GLcKJlcLjanSRjr+YaWI5EUwMeLLY3PXzBRX8uKjzoxXuywvatbHo6A+lZM/ckqMkxvMBI+lZqXpg3jUSzHcH0m00wVMArpcEDu13ORTsO2aqnePr/LcLz+EvoWCtyEpGHmGq6tXStzHLMt73KGtEeIJlslR4tXXIsO+33LdUnQ1ZOBoLXvNOmQEE9bu/KMJrK8DzUx9PMNJ1dzDsfPRV9mMgwHdfa7kobJnAXtsnFtSiN2nfzsa3S47MUzQjcdL1H+1lS3ShiuTRqH8pUn4jfSUoZ2hxy0XKuc4U7y+nU2XlR1Ijsjb+vJp51LHa+cmlnTUrvtOxmGV/T3pDtpmAfC96fDG+mLfznDz/So3l3IkM/FBi/Jz5ZHsgafqf0jHtGtvpKF/aLNGa49HyVsbNMcY3K6d3Fdqx0fnl+ak7XFDXWXhttLubUFMeQdyJAsJXshyep97lHnZHjQZhmrp4j2XE8TxSVBEJmYpmnE/6X/GqOkIQvOQbn1ITFUQ9pJKSQ4x3pIMhD5SRcPquNvZS6gdoI5w0UoaciHNjY0lzKUpmr4cq1DBonvLIf1Jm5zPWMN1cOLyZ9u6MzS50mGjw/7EiqZmDjpdzBz3JT0vrDfhCx9f31uLwM31J9uqIbj1HmpOQ3ykPiPltFJXeWiQO5SyETUCRIczwrDu6q4fMIrk19giHYLDbPmpbghyjVid8QNKfz4eNbpvLYT8EDqab5/95014fj2v8BQ1Z5+xDC1do9WvsjtiTnJ6i+k7S8RxpY6Pa+3i36JIXLl3rycoTjhJIXrYrWSscKnc9QRWz2pbL3xqwyF5R41dNh+abQ6SpOUgeQdpnjDhq+UFLwHhQ2Z9Yzd3qddEo3S9/q/EXINU2vYuA5Zp9FHzRRqepmHayxA0r4pXlfE8Gnp8MV3otfjWV12Gu5pKn/9fZBioxRHCxg60hJPMmyloY8u+9g+DlxhYJ+Ryc+Uv4X6VNO0hzbvu/ETeXd/pPgn/eRlyTeURwzJcB5qiJpC88W1oVZ4V9OjO81nvYwyEvCeTrxjIKPl7j++RYGhtAAoacg7EVa2zl/UmGw0yztxMnQzOkX+DutbFBhKnURZQ/GaJCaFHPY9RNSWGbryh8SfayiOZWUNhQ2aYRM/rDCV459B+aZGipecgejnGKoWD6ayhmrIGiIpBwU0g60r4tyz9CwdX3IfqNm8i6E0ICV02JuODfMbj/LElgw8/urkUy9bU/GTYvyddDXa7VD8DvzuhsFjPYHXRxRzY5LZjPv4ei599u69Gc17dejDkYx9uYkFldmWTTuz1mhrVin4m4L3MFQD8ldz4n08100ycSL/L+2E1uPM5VkkY66CHM3X7u92+jt3zegobyr4fob/CdHay3EcD2X3oJzVNSwLGILh8gOGYLj8gGE+7W5lJei233YBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOB/z79lLA4Ixblg1gAAAABJRU5ErkJggg=="
              rootClassName="rootClassName10"
            ></BlogPostCard2>
          </div>
          <div className="output-t1-container7">
            <BlogPostCard2
              when="35 minutes ago"
              label="JOBS"
              title="Is AI really a Job Killer?"
              imageSrc="https://images.unsplash.com/photo-1595565312451-23051ab0666c?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDI0fHxwb3J0cmFpdCUyMHdvbWFufGVufDB8fHx8MTYyNjQ1MDU4MQ&amp;ixlib=rb-1.2.1&amp;h=1000"
              description="AI is transforming industries, but it's also causing job losses. As we navigate this change, it's crucial to invest in reskilling and upskilling programs for affected workers. Let's work towards a future where AI benefits everyone, not just a select few. #AI #jobloss #reskilling"
              profileSrc="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDExfHxwb3J0cmFpdCUyMHdvbWFufGVufDB8fHx8MTYyNjQ1MDU4MQ&amp;ixlib=rb-1.2.1&amp;h=1200"
              rootClassName="rootClassName11"
            ></BlogPostCard2>
          </div>
          <BlogPostCard2
            when="38 minutes ago"
            label="Politics"
            title="Students Disrupting govt. Systems"
            author="NDTV"
            imageSrc="https://images.unsplash.com/photo-1519699047748-de8e457a634e?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIxfHxwb3J0cmFpdCUyMHdvbWFuJTIwY29sb3J8ZW58MHx8fHwxNjI2NDUwNTU4&amp;ixlib=rb-1.2.1&amp;h=1000"
            description="Students should focus on their studies instead of getting involved in politics. They don't have enough knowledge or experience to make informed decisions, and their actions can be disruptive and harmful to society. Leave politics to the professionals. #students #politics #ignorance"
            profileSrc="https://cdn.ndtv.com/common/images/ogndtv.png"
            rootClassName="rootClassName9"
          ></BlogPostCard2>
        </div>
        <Footer></Footer>
        <div className="output-t1-container8"></div>
      </div>
      <style jsx>
        {`
          .output-t1-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .output-t1-container1 {
            width: 100%;
            height: 142px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .output-t1-container2 {
            width: 100%;
            height: 100%;
            display: flex;
            align-self: flex-start;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .output-t1-profile {
            width: 100%;
            height: 56px;
            display: flex;
            align-self: center;
            align-items: center;
            justify-content: center;
          }
          .output-t1-image {
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
          }
          .output-t1-text {
            font-size: 30px;
            align-self: center;
            font-style: normal;
            font-weight: 800;
            margin-left: var(--dl-space-space-halfunit);
          }
          .output-t1-container3 {
            width: 100%;
            height: 142px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .output-t1-link {
            width: 194px;
            height: 72px;
            margin: var(--dl-space-space-halfunit);
            display: flex;
            align-self: center;
            font-style: normal;
            text-align: center;
            transition: 0.3s;
            align-items: center;
            font-weight: 900;
            line-height: 2.2;
            padding-top: var(--dl-space-space-oneandhalfunits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-oneandhalfunits);
            text-transform: capitalize;
            text-decoration: none;
          }
          .output-t1-link:hover {
            color: var(--dl-color-gray-white);
            width: 236px;
            height: 84px;
            justify-content: center;
            background-color: #279cca;
          }
          .output-t1-text1 {
            align-self: center;
            margin-left: var(--dl-space-space-halfunit);
            margin-right: var(--dl-space-space-halfunit);
          }
          .output-t1-icon {
            width: 24px;
            height: 24px;
            align-self: center;
            margin-left: var(--dl-space-space-halfunit);
            margin-right: var(--dl-space-space-halfunit);
          }
          .output-t1-blog {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
          }
          .output-t1-container4 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: column;
            justify-content: space-between;
          }
          .output-t1-container5 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: column;
            justify-content: space-between;
          }
          .output-t1-blog1 {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
          }
          .output-t1-container6 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: column;
            justify-content: space-between;
          }
          .output-t1-container7 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: column;
            justify-content: space-between;
          }
          .output-t1-container8 {
            width: 100%;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: 100%;
            display: flex;
            align-self: flex-start;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          @media (max-width: 767px) {
            .output-t1-blog {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .output-t1-blog1 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
          }
          @media (max-width: 479px) {
            .output-t1-container2 {
              padding-left: 0px;
              padding-right: 0px;
            }
            .output-t1-blog {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .output-t1-blog1 {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .output-t1-container8 {
              padding-left: 0px;
              padding-right: 0px;
            }
          }
        `}
      </style>
    </>
  )
}

export default OutputT1
