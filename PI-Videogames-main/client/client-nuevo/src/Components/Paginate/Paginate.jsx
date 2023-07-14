import React from "react";
import { Link } from "react-router-dom";
import GameCard from "../Card/Card";
import styles from "./Paginate.module.css";


export const renderData = (videogame) => {

	return videogame.map((game) => {
		return (
			<div key={game.id} >
				<Link className='text-link' to={"/videogames/" + game.id} >
					<GameCard name={game.name} image={game.image} genres={game.genres} />
				</Link>
			</div>
		);
	});

};

export default function Paginado({ videogamesPerPage, allVideoGames, paginado, currPage }) {
    const pageNumbers = []
    const maxpage = Math.ceil(allVideoGames / videogamesPerPage)

    for (let i = 0; i < maxpage; i++) {
        pageNumbers.push(i + 1)
    }

    return (
        <nav>
            <ul className={styles.pag_pagination}>
                {pageNumbers && pageNumbers.map(num => {
                    return (
                        <li className={styles.pag_each} key={num}>
                            <a href onClick={() => paginado(num) }>{num}</a>
                        </li>
                    )
                })}
                <span>{`  Current Page:  ${currPage} `}</span>
            </ul>
        </nav>
    )
}