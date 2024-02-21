import React from 'react'

import PropTypes from 'prop-types'

const BlogPostCard21 = (props) => {
  return (
    <>
      <div
        className={`blog-post-card21-blog-post-card ${props.rootClassName} `}
      >
        <div className="blog-post-card21-container">
          <span className="blog-post-card21-text">{props.description}</span>
          <div className="blog-post-card21-container1">
            <div className="blog-post-card21-profile">
              <img
                alt={props.profileAlt}
                src={props.profileSrc}
                className="blog-post-card21-image"
              />
              <span className="blog-post-card21-text1">{props.author}</span>
            </div>
            <span className="blog-post-card21-text2">{props.text}</span>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .blog-post-card21-blog-post-card {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            box-shadow: 4px 4px 10px 0px rgba(18, 18, 18, 0.1);
            transition: 0.3s;
            align-items: stretch;
            flex-direction: row;
            justify-content: space-between;
          }
          .blog-post-card21-blog-post-card:hover {
            transform: scale(1.02);
          }
          .blog-post-card21-container {
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: space-between;
          }
          .blog-post-card21-text {
            color: var(--dl-color-gray-500);
            font-size: 1.25rem;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .blog-post-card21-container1 {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .blog-post-card21-profile {
            display: flex;
            align-items: center;
          }
          .blog-post-card21-image {
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
          }
          .blog-post-card21-text1 {
            font-style: normal;
            font-weight: 600;
            margin-left: var(--dl-space-space-halfunit);
          }
          .blog-post-card21-text2 {
            font-size: 30px;
          }

          @media (max-width: 991px) {
            .blog-post-card21-blog-post-card {
              flex-direction: row;
              justify-content: space-between;
            }
          }
          @media (max-width: 767px) {
            .blog-post-card21-blog-post-card {
              flex-direction: column;
            }
          }
          @media (max-width: 479px) {
            .blog-post-card21-container1 {
              padding-left: 0px;
              padding-right: 0px;
            }
          }
        `}
      </style>
    </>
  )
}

BlogPostCard21.defaultProps = {
  profileAlt: 'profile',
  when: '3 days ago',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non volutpat turpis. Mauris luctus rutrum mi ut rhoncus. Integer in dignissim tortor. Lorem ipsum dolor sit amet, consectetur adipiscing ...',
  imageAlt: 'image',
  imageSrc:
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&ixlib=rb-1.2.1&w=1000',
  rootClassName: '',
  title: 'Lorem ipsum dolor sit amet',
  label: 'ENTERPRISE',
  text: '😐',
  profileSrc:
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&ixlib=rb-1.2.1&h=1200',
  author: 'Jane Doe',
}

BlogPostCard21.propTypes = {
  profileAlt: PropTypes.string,
  when: PropTypes.string,
  description: PropTypes.string,
  imageAlt: PropTypes.string,
  imageSrc: PropTypes.string,
  rootClassName: PropTypes.string,
  title: PropTypes.string,
  label: PropTypes.string,
  text: PropTypes.string,
  profileSrc: PropTypes.string,
  author: PropTypes.string,
}

export default BlogPostCard21
