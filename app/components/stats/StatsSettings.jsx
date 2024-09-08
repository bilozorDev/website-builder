import { useStats } from "@/app/contexts/StatsContext";
import AccordionPanel from "../ui/AccordionPanel";
import CheckBox from "../ui/SettingsToggle";
import StatsDataInput from "./StatsDataInput";

const StatsSettings = () => {
  const { stats, setStats } = useStats();
  return (
    <>
      {/* Toggle the display of the stats section */}
      <CheckBox
        value={stats.display}
        onChange={() => setStats({ ...stats, display: !stats.display })}
        title="Add Stats"
        description="Add stats section"
      />

      {/* Display the stats settings only if the stats section is displayed */}
      {stats.display ? (
        <AccordionPanel title="Settings">
          <StatsDataInput />
        </AccordionPanel>
      ) : null}
    </>
  );
};

export default StatsSettings;
