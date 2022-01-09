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
        <h1 className={styles.hoteltitle}>{content.title}</h1>
        <p className={styles.location}>{content.location}</p>
        <div className={styles.pills}>
          <p className={styles.pill}>Rating: {content.rating}/10</p>
          <p className={styles.pill}>Price: {content.price}</p>
        </div>
        <p className={styles.description}>{render(content.description)}</p>
      </main>
    </SbEditable>
  )
}

export default Hotel