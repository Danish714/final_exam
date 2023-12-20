import ElementsButtonsPlay02 from "./ElementsButtonsPlay02";
import ElementsButtonsOutline from "./ElementsButtonsOutline";
import "./BlockchainSection.css";

const BlockchainSection = () => {
  return (
    <div className="rectangle-group">
      <div className="group-child4" />
      <img className="icon" alt="" src="/30-1@2x.png" />
      <img className="icon1" alt="" src="/27-1@2x.png" />
      <div className="wrapper-group-87-parent">
        <div className="wrapper-group-87">
          <img
            className="wrapper-group-87-child"
            alt=""
            src="/group-87@2x.png"
          />
        </div>
        <div className="elements-buttons-play-02-parent">
          <ElementsButtonsPlay02
            elementsButtonsPlay02Elem="/elements--buttons--play-02@2x.png"
            elementsButtonsPlay02Width="9.04%"
            elementsButtonsPlay02Height="19.6%"
            elementsButtonsPlay02Position="absolute"
            elementsButtonsPlay02Top="80.4%"
            elementsButtonsPlay02Right="45.49%"
            elementsButtonsPlay02Bottom="0%"
            elementsButtonsPlay02Left="45.47%"
            elementsButtonsPlay02MaxWidth="100%"
            elementsButtonsPlay02Overflow="hidden"
            elementsButtonsPlay02MaxHeight="100%"
          />
          <div className="create-screens-direc-parent">
            <div className="create-screens-direc2">
              Unlock the blockchain potential to create Web3 Applications
            </div>
            <div className="welcome-to-the-container">
              <span>Web</span>
              <span className="makr">3Makr</span>
              <span> Redefining How You Create</span>
            </div>
          </div>
        </div>
      </div>
      <div className="wrapper-mockup">
        <img className="mockup-icon" alt="" src="/mockup@2x.png" />
      </div>
      <div className="rectangle-container">
        <div className="group-child5" />
        <div className="group-parent4">
          <div className="group-parent5">
            <div className="elements-buttons-outline-wrapper">
              <ElementsButtonsOutline
                buttonText="Download Now"
                showButtonText={false}
                elementsButtonsOutlineWidth="100%"
                elementsButtonsOutlineHeight="100%"
                elementsButtonsOutlinePosition="absolute"
                elementsButtonsOutlineTop="0%"
                elementsButtonsOutlineRight="0%"
                elementsButtonsOutlineBottom="0%"
                elementsButtonsOutlineLeft="0%"
                baseBorder="1px solid var(--color-darkslateblue-100)"
                baseBoxSizing="border-box"
                baseBackgroundColor="unset"
                buttonTextTop="27.51%"
              />
            </div>
            <div className="elements-buttons-outline-wrapper">
              <ElementsButtonsOutline
                buttonText="Download Now"
                showButtonText={false}
                elementsButtonsOutlineWidth="100%"
                elementsButtonsOutlineHeight="100%"
                elementsButtonsOutlinePosition="absolute"
                elementsButtonsOutlineTop="0%"
                elementsButtonsOutlineRight="0%"
                elementsButtonsOutlineBottom="0%"
                elementsButtonsOutlineLeft="0%"
                baseBorder="1px solid var(--color-deepskyblue)"
                baseBoxSizing="border-box"
                baseBackgroundColor="unset"
                buttonTextTop="27.51%"
              />
              <div className="button-text4">Start for free</div>
            </div>
          </div>
          <div className="menu-parent">
            <div className="menu">
              <div className="about">Web3Makr</div>
              <div className="work-process">Services</div>
              <div className="work-process1">White paper</div>
              <div className="services">Tool</div>
              <div className="contacts">Contact us</div>
            </div>
            <img className="mask-group-icon2" alt="" src="/mask-group@2x.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlockchainSection;
