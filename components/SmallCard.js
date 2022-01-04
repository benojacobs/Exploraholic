import React, { useState } from "react"
import { render } from "storyblok-rich-text-react-renderer"
import styles from "../styles/SmallCard.module.scss"
import { Camera } from 'react-feather';


const SmallCard = ({ lang, title, short, picture, url, type, price, rating }) => {

  return (
    <div className={styles.item}>
      <div className={styles.mainpicture} style={{ backgroundImage: `url("${picture}")` }}>
      </div>
      <div className={styles.textpart}>
        <div className={styles.title}>
          {title}
        </div>
        <div className={`${styles.address} ${styles.block}`}><Camera size={12}/><span>Paleisstraat 2</span></div>
        {rating && <div className={`${styles.rating} ${styles.block}`}><div className={styles.block}><i data-feather="star"></i>Rating</div><span>{rating}/10</span></div>}
        {price && <div className={`${styles.price} ${styles.block}`}><div className={styles.block}><i data-feather="dollar-sign"></i>Price</div>${price}</div>}
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sollicitudin elementum dolor.</p>
        <a href={`/${url}`} className={styles.button}>Details</a>
      </div>
    </div>
  )
}

export default SmallCard
