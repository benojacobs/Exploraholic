import React, { useState } from "react"
import styles from "../styles/Form.module.scss"

const Form = ({ }) => {
  function toggleformstate() {
    setFormstate(!formstate);
  }
  const [formstate,setFormstate] = useState(false);
  return (
    <div className={styles.formwrapper}>
      <div className={styles.formcontent}>
        <h2 className={styles.formtitle}>Share your own experience</h2>
        <form>
          <div className={styles.formblock}>
            <label for="fname">First name</label>
            <input type="text" id="fname" name="fname"/>
          </div>
          <div className={styles.formblock}>
            <label for="lname">Last name</label>
            <input type="text" id="lname" name="lname"/>
          </div>
          <div className={styles.formblock}>
            <label for="text">Experience</label>
            <textarea id="text" name="text" rows="6" cols="50"></textarea>
          </div>
          <div className={styles.formblock}>
            <label for="myfile">Profile picture</label>
            <input className={styles.fileinput} type="file" id="myfile" name="myfile"></input>
          </div>
          <input className={styles.button} type="submit" value="Submit"/>
        </form>
      </div>
    </div>
  );
};

export default Form;
