import { useMemo } from "react";
import "./ButtonsAutoLayoutOnFil.css";

const ButtonsAutoLayoutOnFil = ({
  iconsArrowsarrowRight,
  buttonsAutoLayoutOnFilBackgroundColor,
  buttonsAutoLayoutOnFilPosition,
  buttonsAutoLayoutOnFilTop,
  buttonsAutoLayoutOnFilLeft,
}) => {
  const buttonsAutoLayoutOnFilStyle = useMemo(() => {
    return {
      backgroundColor: buttonsAutoLayoutOnFilBackgroundColor,
      position: buttonsAutoLayoutOnFilPosition,
      top: buttonsAutoLayoutOnFilTop,
      left: buttonsAutoLayoutOnFilLeft,
    };
  }, [
    buttonsAutoLayoutOnFilBackgroundColor,
    buttonsAutoLayoutOnFilPosition,
    buttonsAutoLayoutOnFilTop,
    buttonsAutoLayoutOnFilLeft,
  ]);

  return (
    <div
      className="buttons-auto-layout-on-fil"
      style={buttonsAutoLayoutOnFilStyle}
    >
      <img
        className="iconsarrowsarrow-right"
        alt=""
        src={iconsArrowsarrowRight}
      />
    </div>
  );
};

export default ButtonsAutoLayoutOnFil;
