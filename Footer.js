import ButtonsAutoLayoutOnFil from "./ButtonsAutoLayoutOnFil";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="copyright-2021-parent">
      <div className="copyright-2021">Copyright 2022 © Web3makr</div>
      <div className="social">
        <ButtonsAutoLayoutOnFil
          iconsArrowsarrowRight="/iconssocialstwitter@2x.png"
          buttonsAutoLayoutOnFilBackgroundColor="unset"
          buttonsAutoLayoutOnFilPosition="absolute"
          buttonsAutoLayoutOnFilTop="0px"
          buttonsAutoLayoutOnFilLeft="46.4px"
        />
        <ButtonsAutoLayoutOnFil
          iconsArrowsarrowRight="/iconssocialsinstagram@2x.png"
          buttonsAutoLayoutOnFilBackgroundColor="unset"
          buttonsAutoLayoutOnFilPosition="absolute"
          buttonsAutoLayoutOnFilTop="0px"
          buttonsAutoLayoutOnFilLeft="0px"
        />
        <ButtonsAutoLayoutOnFil
          iconsArrowsarrowRight="/iconssocialsfacebook@2x.png"
          buttonsAutoLayoutOnFilBackgroundColor="unset"
          buttonsAutoLayoutOnFilPosition="absolute"
          buttonsAutoLayoutOnFilTop="0px"
          buttonsAutoLayoutOnFilLeft="92.9px"
        />
      </div>
      <div className="group-parent10">
        <img className="group-child17" alt="" src="/group-114@2x.png" />
        <div className="menu1">
          <div className="about1">Web3Makr</div>
          <div className="work-process2">Services</div>
          <div className="work-process3">White paper</div>
          <div className="services1">Tool</div>
          <div className="contacts1">Contact us</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

