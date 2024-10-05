import HeroDataInputs from "./HeroDataInputs";
import CheckBox from "../ui/SettingsToggle";
import AccordionPanel from "../ui/AccordionPanel";
import { useHero } from "@/app/contexts/HeroContext";

const HeroSettings = () => {
  const { hero, setHero } = useHero();
  return (
    <>
      {/* Toggle the display of the hero section */}
      <CheckBox
        value={hero.display}
        onChange={() => setHero({ ...hero, display: !hero.display })}
        title="Add Hero"
        description="Add hero section"
      />

      {/* Display the hero settings only if the hero section is displayed */}
      {hero.display ? (
        <AccordionPanel title="Settings">
          <HeroDataInputs />
        </AccordionPanel>
      ) : null}
    </>
  );
};

export default HeroSettings;
