import AboutUs from "./AboutUs";
import Catalog from "./Catalog";
import CompanyInfo from "./CompanyInfo";
import CustomerServices from "./CustomerServices";
import FooterBottom from "./FooterBottom";

const Footer = () => {
    return (
        <footer>
            <div className="max-w-screen-2xl container mx-auto xl:px-28 px-4 mt-20 mb-10 flex flex-col md:flex-row items-start justify-between gap-8">
                <CompanyInfo />
                <Catalog />
                <AboutUs />
                <CustomerServices />
            </div>
            <FooterBottom />
        </footer>
    );
};

export default Footer;