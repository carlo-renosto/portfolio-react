
import ContactProfile from "../../components/Body/ContactProfile/ContactProfile";
import Dashboard from "../../components/Dashboard/Dashboard";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

const Contact = () => {
    return (
        <div>
            <Header />
            <Dashboard>
                <ContactProfile />
            </Dashboard>
            <Footer />
        </div>
    )
}

export default Contact;