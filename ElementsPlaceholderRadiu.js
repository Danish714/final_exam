import { useMemo } from "react";
import "./ElementsPlaceholderRadiu.css";

const ElementsPlaceholderRadiu = ({
  showBase,
  elementsPlaceholderRadiuWidth,
  elementsPlaceholderRadiuHeight,
  elementsPlaceholderRadiuPosition,
  elementsPlaceholderRadiuTop,
  elementsPlaceholderRadiuRight,
  elementsPlaceholderRadiuBottom,
  elementsPlaceholderRadiuLeft,
}) => {
  const elementsPlaceholderRadiu1Style = useMemo(() => {
    return {
      width: elementsPlaceholderRadiuWidth,
      height: elementsPlaceholderRadiuHeight,
      position: elementsPlaceholderRadiuPosition,
      top: elementsPlaceholderRadiuTop,
      right: elementsPlaceholderRadiuRight,
      bottom: elementsPlaceholderRadiuBottom,
      left: elementsPlaceholderRadiuLeft,
    };
  }, [
    elementsPlaceholderRadiuWidth,
    elementsPlaceholderRadiuHeight,
    elementsPlaceholderRadiuPosition,
    elementsPlaceholderRadiuTop,
    elementsPlaceholderRadiuRight,
    elementsPlaceholderRadiuBottom,
    elementsPlaceholderRadiuLeft,
  ]);

  return (
    <div
      className="elements-placeholder-radiu1"
      style={elementsPlaceholderRadiu1Style}
    >
      {showBase && <div className="base5" />}
    </div>
  );
};

export default ElementsPlaceholderRadiu;
