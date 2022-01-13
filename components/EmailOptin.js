import React, { useState } from "react"
import styles from "../styles/EmailOptin.module.scss"

const EmailOptin = ({ }) => {
  function toggleformstate() {
    setFormstate(!formstate);
  }
  const [formstate,setFormstate] = useState(false);
  return (
    
    <div className={styles.emailoptin}>
      <div className={styles.optinbutton} onClick={() => toggleformstate()}>Keep me posted through the newsletter</div>
      {formstate&&<iframe width="540" height="900" src="" frameborder="0" scrolling="auto" allowfullscreen style={{ display: `block`, marginLeft: `auto`, marginRight: `auto`, maxWidth: '100%' }}></iframe>}
      <iframe width="540" height="305" src="https://d330b8b5.sibforms.com/serve/MUIEADP1V93Oyhpm5toSpywBDOx16aF4nf2IsOyVqlpwTZrD6I4vInY2Vl5zheliKkJmAUr09fNKQ-tdWU8yAXfmtRFllPp9shQ99Tcpu3s2wFeH4M-F5VIAWzHYpWCuqGBHen8YZteChzhwuwtmg6LNoG0Dak3m7Ad_O2rok0Ytm08fMTpI6u7eiEGMWY9liF4iZ4Od4lYoegFv" frameborder="0" scrolling="auto" allowfullscreen style="display: block;margin-left: auto;margin-right: auto;max-width: 100%;"></iframe>
    </div>
  );
};

export default EmailOptin;
