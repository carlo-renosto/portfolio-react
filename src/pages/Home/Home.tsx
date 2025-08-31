import AboutFrameworks from "../../components/Body/About/AboutFrameworks/AboutFrameworks.tsx";
import AboutLanguages from "../../components/Body/About/AboutLanguages/AboutLanguages.tsx";
import AboutMe from "../../components/Body/About/AboutMe/AboutMe.tsx";
import AboutSkills from "../../components/Body/About/AboutSkills/AboutSkills.tsx";
import Dashboard from "../../components/Dashboard/Dashboard.tsx";
import Footer from "../../components/Footer/Footer.tsx";
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
            <Footer />
        </div>
    )
}

export default Home;