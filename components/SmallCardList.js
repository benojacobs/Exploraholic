import React, { useState } from "react"
import { render } from "storyblok-rich-text-react-renderer"
import styles from "../styles/SmallCardList.module.scss"
import SmallCard from "./SmallCard"



const SmallCardList = ({ items, title, type }) => {

  return (
    <div className={styles.itemgallery}>
      {title&&title!=""&&<div className={styles.title}>{title}</div>}
      <div className={styles.gallerycontent}>
      {items.map((item) => {
        const lang = item.lang === "default" ? "/en" : `/${item.lang}`;
        console.log(item)
        return (
          <div className={styles.smallcardwrapper}>
            {type == "product" && <SmallCard lang={lang} title={item.content.title} picture={item.content.mainpicture.filename} url={item.full_slug} type={type} price={item.content.price} />}
            {type == "hotel" && <SmallCard lang={lang} title={item.content.title} picture={item.content.mainpicture.filename} price={item.content.price} rating={item.content.rating} description={item.content.description} location={item.content.location} url={item.full_slug}/>}
            {type == "restaurant" && <SmallCard lang={lang} title={item.content.title} picture={item.content.mainpicture.filename} price={item.content.price} rating={item.content.rating} description={item.content.description} location={item.content.location} url={item.full_slug}/>}
            {type != "product" && type != "hotel" && type != "restaurant" && <SmallCard lang={lang} title={item.content.title} picture={item.content.mainpicture.filename} url={item.full_slug} type={type} />}
          </div>
        );
      })}
      </div>
      
    </div>

  )
}

export default SmallCardList
