import React from "react";
import styles from "./Landing.module.css";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate("/main");
  };
  return (
    <div className={styles.body}>
      <div>
        <div className={styles.container}></div>
        <div className={styles.companyName}></div>
        <div className={styles.title}>Front end design assignment</div>
        <div className={styles.details1}>
          Develop responsive screen for the design shared in the next screens
          (Desktop, tablet and mobile adaptive)
        </div>
        <div className={styles.details2}>
          Incorporate the below frontend validations:
        </div>
        <div className={styles.details3}>
          1. Phone No.: No alphabets, special character allowed for phone number
          <br />
          2. Email Validations: No full stop after email
        </div>
      </div>
      <div>
        <span className={styles.arrow} onClick={clickHandler}>
          &#8594;
        </span>
      </div>
    </div>
  );
};

export default Landing;
