
import Resume from '../../Contact/Resume/Resume';
import styles from './Information.module.scss'
import ProfileName from "./ProfileName/ProfileName";
import ProfilePicture from "./ProfilePicture/ProfilePicture";

function Information() {
    return (
        <div className={styles.profileinformation}>
            <ProfilePicture />
            <div>
                <ProfileName name="Carlo Renosto"/>
                <p className={styles.profiledescription}>Software Developer</p>
                <div className={styles.profileresume}>
                    <Resume />
                </div>
            </div>
        </div>
    )
}

export default Information;