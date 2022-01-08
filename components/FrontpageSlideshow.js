

import React, { useState } from "react"
import DynamicComponent from './DynamicComponent'
import SbEditable from 'storyblok-react'
import { getFPSData } from "../utils/storyblok"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "../styles/FrontpageSlideshow.module.scss"
import { render } from "storyblok-rich-text-react-renderer"
import { Calendar } from 'react-feather';




const FrontpageSlideshow = ({ data, level, locale }) => {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  if (level === 'data') {
    var content = data.story.content;
  } else {
    var content = data;
  }

  const [experiences, setExperiences] = useState([]);

  getFPSData(content._uid, locale, content.preview = false, 'experience').then(
    function (result) {
      setExperiences(result.data.stories);
    });


  //returning the HTML
  return (

    <div className={styles.carouselwrapper}>
      <div className={styles.carouselwrapperinner}>
        <h1 className={styles.carouseltitle}>Experiences</h1>
        <Carousel swipeable={false}
          draggable={false}
          showDots={false}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={5000}
          keyBoardControl={true}
          customTransition="all 0.5s ease-in-out"
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          >
          {experiences.map((item) => {
            const lang = item.lang === "default" ? "/en" : `/${item.lang}`;
            return (
              <a
                href={`${lang}/experience/${item.slug}`} className={styles.itemcontainer}
              >
                <div className={styles.item}>
                  <div className={styles.avatar} style={{ backgroundImage: `url("${item.content.image.filename}")` }}></div>
                  <div className={styles.experienceinfo}>
                    <span className={styles.meta}>{item.content.author}</span>
                    <h1 className={styles.title}>
                      {item.content.title}
                    </h1>
                    <span className={styles.meta}><Calendar size={12}/>{item.content.date}</span>
                    <p className={styles.short}>{item.content.short}</p>
                  </div>
                </div>
              </a>
            );
          })}
        </Carousel>
      </div>
    </div>
  )
}

export default FrontpageSlideshow
