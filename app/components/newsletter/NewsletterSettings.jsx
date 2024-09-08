import { useSelectedElements } from "@/app/contexts/SelectedElementsContext";
import AccordionPanel from "../AccordionPanel";
import CheckBox from "../CheckBox";
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
      title="Add Features"
      description="Add features section"
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
