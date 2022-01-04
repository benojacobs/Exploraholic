import React, { useState } from "react"
import SbEditable from "storyblok-react"
import { render } from "storyblok-rich-text-react-renderer"
import styles from "../styles/Hotel.module.scss"
import { getData } from "../utils/storyblok"

const Hotel = ({ data, level }) => {
  if (level === 'data') {
    var content = data.story.content;
  } else {
    var content = data;
  }

  //returning the HTML
  return (
    <SbEditable content={content} key={content._uid}>
      <main>
        <div className={styles.image} style={{ backgroundImage: `url("${content.mainpicture.filename}")` }}></div>
        <h2>{content.title}</h2>
        <h2>{render(content.description)}</h2>
        <p>{content.rating}</p>
        <p>{content.price}</p>
      </main>
    </SbEditable>
  )
}

export default Hotel