import React, { useState } from "react"
import SbEditable from "storyblok-react"
import { render } from "storyblok-rich-text-react-renderer"
import styles from "../styles/HomeTileList.module.scss"
import { getData } from "../utils/storyblok"


const HomeTileList = ({ data, level }) => {
  var content = data;
  //returning the HTML
  return (
    <SbEditable content={content} key={content._uid}>
      <div className={styles.hometilelist}>
        <a className={styles.hometile} href="#" style={{ backgroundImage: `url("https://a.storyblok.com/f/140803/1024x677/9575521145/171784314.jpg")` }}>
          <h2>Hotels</h2>
        </a>
        <a className={styles.hometile} href="#" style={{ backgroundImage: `url("https://a.storyblok.com/f/140803/600x300/e53ed6e2d7/view.jpeg")` }}>
          <h2>Restaurants</h2>
        </a>
        <a className={styles.hometile} href="#" style={{ backgroundImage: `url("https://a.storyblok.com/f/140803/1024x677/9575521145/171784314.jpg")` }}>
          <h2>Activities</h2>
        </a>
      </div>
    </SbEditable>
  )
}

export default HomeTileList
