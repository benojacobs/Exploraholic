import React, { useState } from "react"
import SbEditable from "storyblok-react"
import { render } from "storyblok-rich-text-react-renderer"
import styles from "../styles/PersonalityList.module.scss"
import { getAllItems } from "../utils/storyblok"
import SmallCardList from "./SmallCardList"

const HotelList = ({ data , level}) => {
  if (level === 'data') {
    var content = data.story.content;
  } else {
    var content = data;
  }
  const [items, setItems] = useState([]);
  getAllItems('hotel').then(
    function (result) {
      setItems(result.data.stories);
    });

  return (

    <div>
      <h2>Hotels</h2>
      {items && items.length > 0 && <SmallCardList items={items} type="hotel"></SmallCardList>}
    </div>

  );
};

export default HotelList;
