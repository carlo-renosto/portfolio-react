
import styles from './ProfilePicture.module.scss'

function ProfilePicture() {
    return (
        <img className={styles.profilepicture} src="./assets/pfp-placeholder.png" alt="Perfil"/>
    )
}

export default ProfilePicture;