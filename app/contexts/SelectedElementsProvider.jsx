import { HeaderProvider } from "./HeaderContext";
import { HeroProvider } from "./HeroContext";
import { FeaturesProvider } from "./FeaturesContext";
import { NewsletterProvider } from "./NewsletterContext";
import { StepProvider } from "./StepContext"; // Import StepContext
import { StatsProvider } from "./StatsContext";
import { ColorProvider } from "./ColorContext";
import { GlobalSettingsProvider } from "./GlobalSettingsContext";

export function SelectedElementsProvider({ children }) {
  return (
    <StepProvider>
      <HeaderProvider>
        <HeroProvider>
          <FeaturesProvider>
            <NewsletterProvider>
              <StatsProvider>
                <ColorProvider>
                  <GlobalSettingsProvider>{children}</GlobalSettingsProvider>
                </ColorProvider>
              </StatsProvider>
            </NewsletterProvider>
          </FeaturesProvider>
        </HeroProvider>
      </HeaderProvider>
    </StepProvider>
  );
}
