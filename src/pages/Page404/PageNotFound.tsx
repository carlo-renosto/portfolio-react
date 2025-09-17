import Dashboard from "../../components/Dashboard/Dashboard";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import PageNotFound from "../../components/PageNotFound/PageNotFound";

const Page404 = () => {
    return (
        <div>
            <Header />
            <Dashboard>
                <PageNotFound />
            </Dashboard>
            <Footer />
        </div>
    )
}

export default Page404;