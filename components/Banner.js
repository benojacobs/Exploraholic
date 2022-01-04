import React, { useState } from "react"
import SbEditable from "storyblok-react"
import { render } from "storyblok-rich-text-react-renderer"
import styles from "../styles/Banner.module.scss"
import { getData } from "../utils/storyblok"


const Banner = ({ data, level }) => {
    var content = data;
    console.log(content)
  //returning the HTML
  return (
    <SbEditable content={content} key={content._uid}>
      <div className={styles.banner}>
        <h2 className={styles.bannersubtitle}>{content.subtitle}</h2>
        <h1 className={styles.bannertitle}>{content.title}</h1>
        <div className={styles.bannerimage} style={{ backgroundImage: `url("${content.image.filename}")` }}></div>
      </div>
    </SbEditable>
  )
}

export default Banner
