
import styles from './Phone.module.scss'

function Phone() {
    return (
        <div className={styles.phone}>
            <span className="material-icons">
                phone_android
            </span>
            <p className={styles.phone}>+541165255373</p>
        </div>   
    )
}

export default Phone;