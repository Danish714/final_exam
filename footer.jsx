import React, { useState } from 'react';
import ButtonsAutoLayoutOnFil from "./ButtonsAutoLayoutOnFil";
import "./Footer.css";

const Footer = () => {
  const [showSocialIcons, setShowSocialIcons] = useState(false);

  const handleCopyrightClick = () => {
    setShowSocialIcons(!showSocialIcons);
  };

  return (
    <div className="copyright-2021-parent">
      <div className="copyright-2021" onClick={handleCopyrightClick}>
        Copyright 2022 © Web3makr
      </div>
      {showSocialIcons && (
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
      )}
      <div className="group-parent10">
        {/* ... rest of your code ... */}
      </div>
    </div>
  );
};

export default Footer;
