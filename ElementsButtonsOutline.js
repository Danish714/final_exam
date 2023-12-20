import { useMemo } from "react";
import "./ElementsButtonsOutline.css";

const ElementsButtonsOutline = ({
  buttonText,
  showButtonText,
  elementsButtonsOutlineWidth,
  elementsButtonsOutlineHeight,
  elementsButtonsOutlinePosition,
  elementsButtonsOutlineTop,
  elementsButtonsOutlineRight,
  elementsButtonsOutlineBottom,
  elementsButtonsOutlineLeft,
  baseBorder,
  baseBoxSizing,
  baseBackgroundColor,
  buttonTextTop,
}) => {
  const elementsButtonsOutlineStyle = useMemo(() => {
    return {
      width: elementsButtonsOutlineWidth,
      height: elementsButtonsOutlineHeight,
      position: elementsButtonsOutlinePosition,
      top: elementsButtonsOutlineTop,
      right: elementsButtonsOutlineRight,
      bottom: elementsButtonsOutlineBottom,
      left: elementsButtonsOutlineLeft,
    };
  }, [
    elementsButtonsOutlineWidth,
    elementsButtonsOutlineHeight,
    elementsButtonsOutlinePosition,
    elementsButtonsOutlineTop,
    elementsButtonsOutlineRight,
    elementsButtonsOutlineBottom,
    elementsButtonsOutlineLeft,
  ]);

  const baseStyle = useMemo(() => {
    return {
      border: baseBorder,
      boxSizing: baseBoxSizing,
      backgroundColor: baseBackgroundColor,
    };
  }, [baseBorder, baseBoxSizing, baseBackgroundColor]);

  const buttonTextStyle = useMemo(() => {
    return {
      top: buttonTextTop,
    };
  }, [buttonTextTop]);

  return (
    <div
      className="elements-buttons-outline"
      style={elementsButtonsOutlineStyle}
    >
      <div className="button">
        <div className="base" style={baseStyle} />
        {showButtonText && (
          <div className="button-text" style={buttonTextStyle}>
            {buttonText}
          </div>
        )}
      </div>
    </div>
  );
};

export default ElementsButtonsOutline;
