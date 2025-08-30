
import type { ReactNode } from "react";
import styles from './AboutSkill.module.scss';

type AboutSkillProps = {
  imgSrc: String;
  skillTitle: String;
  children?: ReactNode;
};

function AboutSkill({ imgSrc, skillTitle, children }: AboutSkillProps) {
    return (
        <div className={styles.aboutskill}>
            <div className={styles.skillleft}>
                <img className={styles.skillpicture} src={imgSrc.toString()} alt="Skill"></img>
            </div>
            <div className={styles.skillcontent}>
                <h2>{skillTitle}</h2>
                {children}
            </div>
        </div>
    )
}

export default AboutSkill;