import React, { useState } from "react"
import { render } from "storyblok-rich-text-react-renderer"
import styles from "../styles/SmallCard.module.scss"
import { MapPin, Star, DollarSign } from 'react-feather';


const SmallCard = ({ lang, title, short, picture, url, type, price, rating, location, description }) => {

  return (
    <div className={styles.item}>
      <div className={styles.mainpicture} style={{ backgroundImage: `url("${picture}")` }}>
      </div>
      <div className={styles.textpart}>
        <div className={styles.title}>
          {title}
        </div>
        <div className={`${styles.address} ${styles.block}`}><MapPin size={12}/><span>Paleisstraat 2</span></div>
        {rating && <div className={`${styles.rating} ${styles.block}`}><div className={styles.block}><Star size={12}/>Rating</div><span>{rating}/10</span></div>}
        {price && <div className={`${styles.price} ${styles.block}`}><div className={styles.block}><DollarSign size={12}/>Price</div>${price}</div>}
        {description && <p className={styles.description}> {render(description)} </p>}
        <a href={`/${url}`} className={styles.button}>Details</a>
      </div>
    </div>
  )
}

export default SmallCard
