
import { useEffect, useState } from 'react';
import styles from './Header.module.scss';
import GitHubLogo from './Information/GitHubLogo.tsx/GitHubLogo';
import Information from "./Information/Information";
import LinkedInLogo from './Information/LinkedInLogo.tsx/LinkedInLogo';
import ThemeSwitch from './ThemeSwitch/ThemeSwitch';

function Header() {
    var htmlTheme = document.documentElement.getAttribute("data-theme");
    htmlTheme = htmlTheme === "dark" ? "white" : "black";
    const [theme, setTheme] = useState(htmlTheme);
    
    useEffect(() => {
        const observer = new MutationObserver(() => {
            const currentTheme = document.documentElement.getAttribute("data-theme");
            setTheme(currentTheme === "dark" ? "white" : "black");
        });
    
        observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ["data-theme"]
    });
    
        return () => observer.disconnect();
    }, []);

    return (
        <header className={styles.header}>
            <Information />
            <div className={styles.logos}>
                <LinkedInLogo imgTheme={theme}/>
                <GitHubLogo imgTheme={theme} />
                <ThemeSwitch />
            </div>
        </header>
    )
}

export default Header;