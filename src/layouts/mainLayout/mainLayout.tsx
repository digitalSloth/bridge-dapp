import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CustomCursor from "../../components/custom-cursor/custom-cursor";
import InfoBanner from "../../components/info-banner/info-banner";
import NavBreadcrumbsMenu from "../../components/nav-breadcrumbs-menu/nav-breadcrumbs-menu";
import NetworkDetails from "../../components/network-details/network-details";
import ReferralCodeInterpreter from "../../components/referralCodeInterpreter/referralCodeInterpreter";
import WalletDetails from "../../components/wallet-details/wallet-details";
import { SpinnerProvider } from "../../services/hooks/spinner/spinnerContext";
import { ZenonProvider } from "../../services/hooks/zenon-provider/zenonContext";
import { addBeforeUnloadEvents, removeBeforeUnloadEvents } from "../../services/pageHandlers/pageHandlers";
import WizardLayout from "../wizardLayout/wizardLayout";
import swirl from "./../../assets/swirl.svg";
import "./mainLayout.scss";

const MainLayout = () => {
  useEffect(() => {
    addBeforeUnloadEvents();
    return () => {
      removeBeforeUnloadEvents();
    };
  });

  return (
    <div className="main-layout">
      <SpinnerProvider>
        <ZenonProvider>
          <NavBreadcrumbsMenu />
          <div className="bg-shapes-container">
            <img alt="bg-shapes" className="bg-shapes" src={require("./../../assets/bg-shapes.png")}></img>
            <img alt="bg-swirl" className="bg-swirl" src={swirl}></img>
          </div>
          <CustomCursor></CustomCursor>
          <div className="responsive-container">
            <WizardLayout />
            <ToastContainer />
            <InfoBanner />
            <WalletDetails />
            <NetworkDetails />
            <ReferralCodeInterpreter />
          </div>
        </ZenonProvider>
      </SpinnerProvider>
      <div id="spinner-root"></div>
    </div>
  );
};

export default MainLayout;
function alertUser(this: Window, ev: BeforeUnloadEvent) {
  throw new Error("Function not implemented.");
}
