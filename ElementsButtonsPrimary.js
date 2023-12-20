import { useMemo } from "react";
import "./ElementsButtonsPrimary.css";

const ElementsButtonsPrimary = ({
  buttonText,
  iconsFlashRounded,
  showBase,
  showButtonText,
  elementsButtonsPrimaryWidth,
  elementsButtonsPrimaryHeight,
  elementsButtonsPrimaryPosition,
  elementsButtonsPrimaryTop,
  elementsButtonsPrimaryRight,
  elementsButtonsPrimaryBottom,
  elementsButtonsPrimaryLeft,
  buttonHeight,
  buttonWidth,
  buttonTop,
  buttonRight,
  buttonBottom,
  buttonLeft,
  baseHeight,
  baseWidth,
  baseTop,
  baseRight,
  baseBottom,
  baseLeft,
  buttonTextLeft,
  buttonTextTop,
  buttonTextFontSize,
  iconsFlashRoundedTop,
  iconsFlashRoundedRight,
  iconsFlashRoundedWidth,
  iconsFlashRoundedHeight,
}) => {
  const elementsButtonsPrimaryStyle = useMemo(() => {
    return {
      width: elementsButtonsPrimaryWidth,
      height: elementsButtonsPrimaryHeight,
      position: elementsButtonsPrimaryPosition,
      top: elementsButtonsPrimaryTop,
      right: elementsButtonsPrimaryRight,
      bottom: elementsButtonsPrimaryBottom,
      left: elementsButtonsPrimaryLeft,
    };
  }, [
    elementsButtonsPrimaryWidth,
    elementsButtonsPrimaryHeight,
    elementsButtonsPrimaryPosition,
    elementsButtonsPrimaryTop,
    elementsButtonsPrimaryRight,
    elementsButtonsPrimaryBottom,
    elementsButtonsPrimaryLeft,
  ]);

  const buttonStyle = useMemo(() => {
    return {
      height: buttonHeight,
      width: buttonWidth,
      top: buttonTop,
      right: buttonRight,
      bottom: buttonBottom,
      left: buttonLeft,
    };
  }, [
    buttonHeight,
    buttonWidth,
    buttonTop,
    buttonRight,
    buttonBottom,
    buttonLeft,
  ]);

  const base3Style = useMemo(() => {
    return {
      height: baseHeight,
      width: baseWidth,
      top: baseTop,
      right: baseRight,
      bottom: baseBottom,
      left: baseLeft,
    };
  }, [baseHeight, baseWidth, baseTop, baseRight, baseBottom, baseLeft]);

  const buttonText1Style = useMemo(() => {
    return {
      left: buttonTextLeft,
      top: buttonTextTop,
      fontSize: buttonTextFontSize,
    };
  }, [buttonTextLeft, buttonTextTop, buttonTextFontSize]);

  const iconsFlashRoundedStyle = useMemo(() => {
    return {
      top: iconsFlashRoundedTop,
      right: iconsFlashRoundedRight,
      width: iconsFlashRoundedWidth,
      height: iconsFlashRoundedHeight,
    };
  }, [
    iconsFlashRoundedTop,
    iconsFlashRoundedRight,
    iconsFlashRoundedWidth,
    iconsFlashRoundedHeight,
  ]);

  return (
    <div
      className="elements-buttons-primary"
      style={elementsButtonsPrimaryStyle}
    >
      <div className="button1" style={buttonStyle}>
        {showBase && <div className="base4" style={base3Style} />}
        {showButtonText && (
          <div className="button-text1" style={buttonText1Style}>
            {buttonText}
          </div>
        )}
        <img
          className="icons-flash-rounded"
          alt=""
          src={iconsFlashRounded}
          style={iconsFlashRoundedStyle}
        />
      </div>
    </div>
  );
};

export default ElementsButtonsPrimary;
