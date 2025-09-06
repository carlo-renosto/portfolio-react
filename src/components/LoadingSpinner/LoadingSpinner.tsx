
import spinner from "./loading_spinner.gif";
import styles from './LoadingSpinner.module.scss';

function Spinner() {
    return (
        <div>
            {" "}
            <img className={styles.loadingspinner} src={spinner} alt="Loading..." style={{width: "400px", margin: "auto", display: "block"}}/>
        </div>
    )
}

export default Spinner;