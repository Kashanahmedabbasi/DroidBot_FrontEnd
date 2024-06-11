import { Link, useHistory } from "react-router-dom";
import HeroSection from "../components/HeroSection.js/HeroSection";
import CustomizeSection from "../components/CustomizeSection";
import SupportSection from "../components/SupportSection";
import DriodBotAdvantage from "../components/DriodBotAdvantage";
import BuildChatBot from "../components/BuildChatBot";
import DriodBotWork from "../components/DriodBotWork";
import PaymentPlan from "../components/PaymentPlan";
import Footer from "../components/Footer/Footer";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const AdminView = (props) => {
    const { uid } = useSelector((state) => state.authUser);
    const history = useHistory();
    const storedToken = JSON.parse(localStorage.getItem("access_token"));
    useEffect(() => {
        if (storedToken) {
            history.push("/dashboard");
        } else {
            history.push("/");
        }
    }, [storedToken]);
    return (
        <>
            <HeroSection />
            <CustomizeSection />
            <SupportSection />
            <DriodBotAdvantage />
            <BuildChatBot />
            <DriodBotWork />
            <PaymentPlan />
            <Footer />
        </>
    );
};

export default AdminView;
