import CheckBox from "../ui/SettingsToggle";
import AccordionPanel from "../ui/AccordionPanel";
import FeaturesDataInputs from "./FeaturesDataInputs";
import { useFeatures } from "@/app/contexts/FeaturesContext";

const FeaturesSettings = () => {
  const { features, setFeatures } = useFeatures();
  return (
    <>
      {/* Toggle the display of the features section */}
      <CheckBox
        value={features.display}
        onChange={() =>
          setFeatures({ ...features, display: !features.display })
        }
        title="Add Features"
        description="Add features section"
      />

      {/* Display the features settings only if the features section is displayed */}
      {features.display ? (
        <AccordionPanel title="Settings">
          <FeaturesDataInputs />
        </AccordionPanel>
      ) : null}
    </>
  );
};

export default FeaturesSettings;
