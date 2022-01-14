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

    {formstate&&<iframe width="540" height="290" src="https://d330b8b5.sibforms.com/serve/MUIEAAz8o6S0KAkPsVuvk8bY2_3WEZftoq76DcgFTtiKI0a2y_e3vV8tNLTQH9tpZ_xLdBpLOYNWG9CBkoMYw23mwpyr-vZlM_schHx5AjPo2bN_9HF99-YXqQgwipQPppHjCV2de-CAl2ABM3YmL9JcxXFnd6DB4IHq3b5q619Rem2KeuKfw4VQIegUM-zOmg0NDF86i0clx88r" frameborder="0" scrolling="auto" allowfullscreen style={{ display: `block`, marginLeft: `auto`, marginRight: `auto`, maxWidth: '100%' }}></iframe>}



  </div>

  );
};

export default EmailOptin;
