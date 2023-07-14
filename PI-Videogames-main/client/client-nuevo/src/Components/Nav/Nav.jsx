import React from "react";
import { useSelector } from "react-redux";
import Search from "../Search/Search";
import styles from '../Nav/Nav.module.css';
import { Link } from 'react-router-dom';

export default function Nav({ handleFilterGenre, handleFilterCreated, handleRating, handleSort }) {

    const allGenre = useSelector(state => state.genres);

    return (
        <div>
            <div>
                <h1 className={styles.nav_title}>API VIDEOGAMES</h1>
                <div className={styles.nav_container}>
                    <Search />
                </div>
            </div>

            <select className={styles.select} onChange={(e) => handleSort(e)}>
                <option value='Asc'>Name Order</option>
                <option value='Asc'>A-Z</option>
                <option value='Desc'>Z-A</option>
            </select>

            <select className={styles.select} onChange={(e) => handleRating(e)}>
                <option value="Top">Rating Order</option>
                <option value="Top">Rating Top</option>
                <option value="Low">Rating Low</option>
            </select>

            <select className={styles.select} onChange={(e) => handleFilterCreated(e)}>
                <option value='All'>Games Filter</option>
                <option value='All'>All</option>
                <option value='Created'>Created DB</option>
                <option value='Api'>Existent</option>
            </select>

            <select className={styles.select} onChange={(e) => handleFilterGenre(e)}>
                <option value='All'>Genres Filter</option>
                <option value='All'>All</option>

                {allGenre.map((genre) => (
                    <option key={genre.name} value={genre.name}>
                        {genre.name}
                    </option>
                ))}
            </select>

            <Link className={styles.button_create_videogame} to='/videogames'>CREATE VIDEOGAME</Link>
        </div>
    )
}