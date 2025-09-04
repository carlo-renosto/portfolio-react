
import { useEffect, useState } from 'react';
import styles from './ExperienceProjects.module.scss';
import ButtonShow from '../../../ButtonShow/ButtonShow';
import type { Repo } from '../../../../models/interfaces/Repo';
import ExperienceProject from './ExperienceProject/ExperienceProject';

function ExperienceProjects() {
    const [isOpen, setIsOpen] = useState(true);
    const [repos, setRepos] = useState<Repo[]>([]);

    useEffect(() => {
        fetch("/users/carlo-renosto/repos")
            .then((res) => res.json())
            .then((data) => {
                setRepos(data);
            })
            .catch((err) => {
                console.error(err);
            });
    }, []);

    return (
        <div className={styles.experience}>
             <div className={styles.experienceheader}>
                <h2>Proyectos</h2>

                <ButtonShow 
                    isOpen={isOpen}
                    onOpen={() => setIsOpen(!isOpen)}
                />
            </div>
            <hr className={styles.hr}/>
            <div className={styles.experienceprojects}>
                {isOpen && (
                    <div>
                        {repos.map((repo) => (
                            repo.name !== "carlo-renosto" ? (
                                <ExperienceProject repo={repo}/>
                            ) : null
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default ExperienceProjects;