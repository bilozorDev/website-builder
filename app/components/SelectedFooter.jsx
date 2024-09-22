import React from "react";
import { useFooter } from "../contexts/FooterContext";
import { SocialMediaIcon } from "./footer/SocialMediaIcons";
import useSelectedFeatureStyle from "../hooks/useGetSelectedStyleId";
const navigation = {
  main: [
    { name: "About", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Jobs", href: "#" },
    { name: "Press", href: "#" },
    { name: "Accessibility", href: "#" },
    { name: "Partners", href: "#" },
  ],
};

const SelectedFooter = () => {
  const { footer } = useFooter();
  const { styleSelections } = footer.options;
  const selectedId = useSelectedFeatureStyle(styleSelections);
  console.log(selectedId);

  return (
    <footer className="bg-white ">
      <div
        className={`mx-auto max-w-7xl px-6 py-12 ${
          selectedId == "centered" ? "space-y-8" : "md:flex"
        } md:items-center md:justify-between lg:px-8 border-t border-gray-900/10 `}
      >
        {selectedId == "centered" ? (
          <nav
            aria-label="Footer"
            className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12"
          >
            {navigation.main.map((item) => (
              <div key={item.name} className="pb-6">
                <a
                  href={item.href}
                  className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                >
                  {item.name}
                </a>
              </div>
            ))}
          </nav>
        ) : null}
        <div className="flex justify-center space-x-6 md:order-2 ">
          {footer.options.socialMediaLinks.map((item) =>
            item.href ? (
              <>
                <a
                  key={item.name}
                  target="_blank"
                  href={item.href}
                  className="text-gray-400 hover:text-gray-500"
                >
                  <span className="sr-only">{item.name}</span>
                  <SocialMediaIcon name={item.icon} className="h-6 w-6" />
                </a>
              </>
            ) : null
          )}
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-xs leading-5 text-gray-500">
            &copy; {new Date().getFullYear()}{" "}
            {footer.options.copyright.companyName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default SelectedFooter;
