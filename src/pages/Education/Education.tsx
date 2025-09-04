import EducationCourses from "../../components/Body/Education/EducationCourses/EducationCourses";
import EducationLanguages from "../../components/Body/Education/EducationLanguages/EducationLanguages";
import EducationSchools from "../../components/Body/Education/EducationSchools/EducationSchools";
import Dashboard from "../../components/Dashboard/Dashboard";
import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"

const Education = () => {
    return (
        <div>
            <Header />
            <Dashboard>
                <EducationSchools />
                <EducationLanguages />
                <EducationCourses />
            </Dashboard>
            <Footer />
        </div>
    )
}

export default Education;