
import styles from './ProfilePicture.module.scss'
import pfpPlaceholder from '../../../../assets/pfp/pfp-placeholder.png';

function ProfilePicture() {
    return (
        <img className={styles.profilepicture} src={pfpPlaceholder} alt="Perfil"/>
    )
}

export default ProfilePicture;