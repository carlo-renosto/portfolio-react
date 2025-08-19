
import styles from './Information.module.scss'
import ProfileName from "./ProfileName/ProfileName";
import ProfilePicture from "./ProfilePicture/ProfilePicture";

function Information() {
    return (
        <div className={styles.profileinformation}>
            <ProfilePicture />
            <ProfileName name="Carlo Renosto"/>
        </div>
    )
}

export default Information;