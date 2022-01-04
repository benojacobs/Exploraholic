import React, { useState } from "react"
import SbEditable from "storyblok-react"
import { render } from "storyblok-rich-text-react-renderer"
import styles from "../styles/PersonalityList.module.scss"
import { getAllItems } from "../utils/storyblok"
import SmallCardList from "./SmallCardList"

const RestaurantList = ({ data , level}) => {
  if (level === 'data') {
    var content = data.story.content;
  } else {
    var content = data;
  }
  const [items, setItems] = useState([]);
  getAllItems('restaurant').then(
    function (result) {
      setItems(result.data.stories);
    });

  return (

    <div>
      <h2>Restaurants</h2>
      {items && items.length > 0 && <SmallCardList items={items} type="restaurant"></SmallCardList>}
    </div>

  );
};

export default RestaurantList;
