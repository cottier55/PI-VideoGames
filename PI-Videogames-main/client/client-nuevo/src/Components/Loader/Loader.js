import loading_gif from './../../imag/Loading/77facec150c4d97d93ca8c95a910ace7.gif';
import styles from './Loader.module.css';

export default function Loader() {
    return (
        <div className={styles.loader} >
            <img src={loading_gif} alt="loading" />
        </div>
    )
};