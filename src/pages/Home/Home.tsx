import AboutFrameworks from "../../components/Body/AboutFrameworks/AboutFrameworks.tsx";
import AboutLanguages from "../../components/Body/AboutLanguages/AboutLanguages.tsx";
import AboutMe from "../../components/Body/AboutMe/AboutMe.tsx";
import AboutSkills from "../../components/Body/AboutSkills/AboutSkills.tsx";
import Dashboard from "../../components/Dashboard/Dashboard.tsx";
import Header from "../../components/Header/Header.tsx";

const Home = () => {
    return (
        <div>
            <Header />
            <Dashboard>
                <AboutMe />
                <AboutSkills />
                <AboutLanguages />
                <AboutFrameworks />
            </Dashboard>
        </div>
    )
}

export default Home;