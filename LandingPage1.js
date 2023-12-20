import CustomizableDappsTemplateSecti from "../components/CustomizableDappsTemplateSecti";
import BlogSection from "../components/BlogSection";
import BlockchainSection from "../components/BlockchainSection";
import TestimonialSection from "../components/TestimonialSection";
import Web3makrCard from "../components/Web3makrCard";
import Web3MakrSection from "../components/Web3MakrSection";
import FormContainer from "../components/FormContainer";
import Footer from "../components/Footer";
import "./LandingPage1.css";

const LandingPage1 = () => {
  return (
    <div className="landing-page-1">
      <img className="landing-page-1-child" alt="" src="/group-139@2x.png" />
      <div className="landing-page-1-item" />
      <div className="landing-page-1-inner" />
      <div className="create-screens-direc1">
        Have a question? Check out our frequently asked questions to find your
        answer.
      </div>
      <div className="frequently-asked-questions">
        Frequently asked questions
      </div>
      <CustomizableDappsTemplateSecti />
      <BlogSection />
      <BlockchainSection />
      <TestimonialSection />
      <div className="rectangle-div" />
      <img className="mask-group-icon" alt="" src="/mask-group@2x.png" />
      <Web3makrCard />
      <Web3MakrSection />
      <div className="wrapper-group-88">
        <img className="wrapper-group-88-child" alt="" src="/group-88@2x.png" />
      </div>
      <div className="group-parent">
        <FormContainer />
        <div className="wrapper-group-146">
          <img
            className="wrapper-group-146-child"
            alt=""
            src="/group-146@2x.png"
          />
        </div>
      </div>
      <div className="frequently-asked-questions1">Metaverse</div>
      <Footer />
      <img className="frame-icon" alt="" src="/frame@2x.png" />
      <img className="group-icon" alt="" src="/group-151@2x.png" />
      <img className="landing-page-1-child1" alt="" src="/group-156@2x.png" />
      <img className="landing-page-1-child2" alt="" src="/group-155@2x.png" />
      <img className="landing-page-1-child3" alt="" src="/group-153@2x.png" />
      <img className="landing-page-1-child4" alt="" src="/group-152@2x.png" />
      <div className="rectangle-parent">
        <div className="group-child" />
        <img className="aave-logo-icon" alt="" src="/aavelogo@2x.png" />
      </div>
      <img className="landing-page-1-child5" alt="" src="/group-154@2x.png" />
    </div>
  );
};

export default LandingPage1;
