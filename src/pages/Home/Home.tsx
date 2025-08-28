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
            </Dashboard>
        </div>
    )
}

export default Home;