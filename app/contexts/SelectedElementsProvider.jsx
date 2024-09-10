import { HeaderProvider } from "./HeaderContext";
import { HeroProvider } from "./HeroContext";
import { FeaturesProvider } from "./FeaturesContext";
import { NewsletterProvider } from "./NewsletterContext";
import { StepProvider } from "./StepContext"; // Import StepContext
import { StatsProvider } from "./StatsContext";
import { ColorProvider } from "./ColorContext";

export function SelectedElementsProvider({ children }) {
  return (
    <StepProvider>
      <HeaderProvider>
        <HeroProvider>
          <FeaturesProvider>
            <NewsletterProvider>
              <StatsProvider>
                <ColorProvider>{children}</ColorProvider>
              </StatsProvider>
            </NewsletterProvider>
          </FeaturesProvider>
        </HeroProvider>
      </HeaderProvider>
    </StepProvider>
  );
}
