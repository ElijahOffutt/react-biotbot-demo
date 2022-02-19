import React from "react";
import content from "@public/content.json";
import styles from './index.module.scss';

export default function Analysis () {
    return (
        <div className={styles.analysis}>
            <h2 style={{fontFamily: content.font}}>Covid-19 analysis in sewage</h2>
            <h3 style={{fontFamily: content.font}}><b>Patient testing is limited, and we need more ways to track Covid-19.</b></h3>
            <p>Our data and analytics give government and business leaders the tools they need to focus public health efforts and improve lives in the communities they serve. Interested in becoming a customer?</p>
            {/* <BigYellowButton /> */}
            <img src="https://biobot.io/wp-content/themes/biobot/assets/img/covid-19.png" alt="virus" />
            <img src="https://biobot.io/wp-content/themes/biobot/assets/img/crop-covid.png" alt="virus" />
        </div>
    )
} 