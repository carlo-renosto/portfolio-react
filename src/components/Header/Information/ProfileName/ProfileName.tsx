
import styles from './ProfileName.module.scss'

function ProfileName(props: { name: string }) {
  return (
    <div className={styles.profilename}>
      <h1>{props.name}</h1>
    </div>
  );
}

export default ProfileName;