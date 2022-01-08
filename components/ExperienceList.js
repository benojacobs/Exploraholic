import React, { useState } from "react"
import SbEditable from "storyblok-react"
import { render } from "storyblok-rich-text-react-renderer"
import styles from "../styles/ExperienceList.module.scss" 
import { getAllItems } from "../utils/storyblok"
import SmallCardList from "./SmallCardList"

const ExperienceList = ({ data, level, locale }) => {
  if (level === 'data') {
    var content = data.story.content;
  } else {
    var content = data;
  }
  const [items, setItems] = useState([]);
  getAllItems('experience', locale).then(
    function (result) {
      setItems(result.data.stories);
    });

  return (

    <div>
      {items && items.length > 0 && <SmallCardList items={items} title="The Latest News" type="newsitem"></SmallCardList>}
    </div>

  );
};

export default ExperienceList;
