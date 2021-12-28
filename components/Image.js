import React, { useState } from "react"
import SbEditable from "storyblok-react"
import { render } from "storyblok-rich-text-react-renderer"
import styles from "../styles/Image.module.scss"
import { getData } from "../utils/storyblok"


const Image = ({ data, level }) => {
    var content = data;
  //returning the HTML
  return (
    <SbEditable content={content} key={content._uid}>

      <div className={styles.image} style={{ backgroundImage: `url("${content.image.filename}")` }}>
      </div>
    </SbEditable>
  )
}

export default Image
