import loading_gif from '../../imag/loading video gif.gif';
import styles from './Loader.module.css';

export default function Loader() {
    return (
        <div className={styles.loader} >
            <img src={loading_gif} alt="loading" />
        </div>
    )
};