import { useSelectedElements } from "@/app/contexts/SelectedElementsContext";
import AccordionPanel from "../ui/AccordionPanel";
import CheckBox from "../ui/SettingsToggle";
import NewsletterDataInputs from "./NewsletterDataInputs";

const NewsletterSettings = () => {
  const { newsletter, setNewsletter } = useSelectedElements();
  return (
    <>
    {/* Toggle the display of the newsletter section */}
    <CheckBox
      value={newsletter.display}
      onChange={() =>
        setNewsletter({ ...newsletter, display: !newsletter.display })
      }
      title="Add Newsletter"
      description="Add newsletter section"
    />

    {/* Display the newsletter settings only if the newsletter section is displayed */}
    {newsletter.display ? (
      <AccordionPanel title="Settings">
        <NewsletterDataInputs />
      </AccordionPanel>
    ) : null}
  </>
  );
};

export default NewsletterSettings;
