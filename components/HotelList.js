import React, { useState } from "react"
import SbEditable from "storyblok-react"
import { render } from "storyblok-rich-text-react-renderer"
import styles from "../styles/HotelList.module.scss"
import { getAllItems } from "../utils/storyblok"
import SmallCardList from "./SmallCardList"

const HotelList = ({ data, level, locale }) => {
  
  if (level === 'data') {
    var content = data.story.content;
  } else {
    var content = data;
  }

  const [sortby, setSortby] = useState();

  function updateSortby(sortby){
    setSortby(sortby);
    getAllItems('hotel', locale, sortby).then(
      function (result) {
        setItems(result.data.stories);
      });
  }
  

  const [items, setItems] = useState([]);
  getAllItems('hotel', locale, sortby).then(
    function (result) {
      setItems(result.data.stories);
    });
  
    console.log(items)

  return (
    <div className={styles.list}>
      <h2>{content.title}</h2>
      <div>
        {items && items.length > 0 && <SmallCardList items={items} type="hotel"></SmallCardList>}
      </div>
    </div>

  );
};

export default HotelList;
