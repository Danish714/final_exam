import ElementsButtonsOutline from "./ElementsButtonsOutline";
import "./FormContainer.css";

const FormContainer = () => {
  return (
    <div className="create-screens-direc-group">
      <div className="create-screens-direc3">No credit card required.</div>
      <div className="frequently-asked-questions2">
        Start a free trial today
      </div>
      <div className="elements-buttons-outline-parent1">
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
          baseBorder="unset"
          baseBoxSizing="unset"
          baseBackgroundColor="#6f348e"
          buttonTextTop="27.51%"
        />
        <div className="button-text6">Start for free</div>
      </div>
    </div>
  );
};

export default FormContainer;
