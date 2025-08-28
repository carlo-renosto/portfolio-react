
import styles from './AboutLanguage.module.scss';

type AboutLanguageProps = {
    imgSrc: String;
    imgAlt: String;
}

function AboutLanguage({ imgSrc, imgAlt }: AboutLanguageProps) {
    return(
        <img className={styles.aboutlanguage} src={imgSrc.toString()} alt={imgAlt.toString()}/>
    )
}

export default AboutLanguage;