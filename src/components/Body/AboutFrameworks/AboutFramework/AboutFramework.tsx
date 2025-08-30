
import styles from './AboutFramework.module.scss';

type AboutFrameworkProps = {
    imgSrc: String;
    imgAlt: String;
}

function AboutFramework({ imgSrc, imgAlt }: AboutFrameworkProps) {
    return (
        <img className={styles.aboutframework} src={imgSrc.toString()} alt={imgAlt.toString()}/>
    )
}

export default AboutFramework;