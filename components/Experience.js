import React from "react"
import SbEditable from "storyblok-react"
import { render } from "storyblok-rich-text-react-renderer"
import styles from "../styles/Experience.module.scss"
import SmallCardList from "./SmallCardList"
import { Calendar } from 'react-feather';



const Experience = ({ data, level }) => {
  var movies = [];
  var personalities = [];
  //enriching data
  if (level === 'data') {
    var content = data.story.content;
    movies = data.rels.filter(obj => {
      return content.movies.includes(obj.uuid);
    });
    personalities = data.rels.filter(obj => {
      return content.personalities.includes(obj.uuid);
    });
  } else {
    var content = data;
  }
  //returning the HTML
  return (
    <SbEditable content={content} key={content._uid}>
      <main>
        <div className={styles.experience}>
          <div className={styles.image} style={{ backgroundImage: `url("${content.bannerimage.filename}")` }}></div>
          <div className={styles.experienceinfo}>
            <h1 className={styles.title}>
              {content.title}
            </h1>
            <div className={styles.flex}>
              <div className={styles.avatar} style={{ backgroundImage: `url("${content.image.filename}")` }}></div>
              <div>
                <div className={styles.author}>{content.author}</div>
                <div className={styles.meta}><Calendar size={12}/>{content.date}</div>
              </div>
            </div>
          </div>
          <div className={styles.article}>
            {render(content.article)}

            <div className={styles.pills}>
              <p className={styles.pill}>Likes: {content.likes}</p>
              <p className={styles.pill}>Reactions: {content.reactions}</p>
            </div>
          </div>
        </div>
      </main>
    </SbEditable>
  )
}

export default Experience
