import React from 'react';
import { Link } from 'react-router-dom';
import styles from './LadingPage.module.css';

export default function LandingPage() {
    return (
        <div className={styles.landing_page}>
            <div>
                <h1 className={styles.landing_title}>VIDEOGAMES</h1>

                <Link to='/home'>
                    <button className={styles.landing_button}>ENTER</button>
                </Link>
            </div>
        </div>
    )
}