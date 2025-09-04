import ExperienceJobs from "../../components/Body/Experience/ExperienceJobs/ExperienceJobs";
import ExperienceProjects from "../../components/Body/Experience/ExperienceProjects/ExperienceProjects";
import Dashboard from "../../components/Dashboard/Dashboard";
import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"

const Experience = () => {
    return (
        <div>
            <Header />
            <Dashboard>
                <ExperienceJobs />    
                <ExperienceProjects />
            </Dashboard>
            <Footer />
        </div>
    )
}

export default Experience;