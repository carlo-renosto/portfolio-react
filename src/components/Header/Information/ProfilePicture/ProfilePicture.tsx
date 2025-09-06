
import styles from './ProfilePicture.module.scss'
import pfp from '../../../../assets/pfp/pfp.jpg'

function ProfilePicture() {
    return (
        <img className={styles.profilepicture} src={pfp} alt="Perfil"/>
    )
}

export default ProfilePicture;