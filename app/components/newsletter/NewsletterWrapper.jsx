import { useNewsletter } from "@/app/contexts/NewsletterContext";
import useGetSelectedStyleId from "@/app/hooks/useGetSelectedStyleId";
import React from "react";

const NewsletterWrapper = ({ children }) => {
  const { newsletter } = useNewsletter();
  const { styleSelections } = newsletter.options;
  const selectedId = useGetSelectedStyleId(styleSelections);

  if (selectedId === "default") {
    return (
      <div className="bg-white py-16 sm:py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 lg:grid-cols-12 lg:gap-8 lg:px-8">
          {children}
        </div>
      </div>
    );
  }
  if (selectedId === "stacked") {
    return (
      <div className="bg-white py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 space-y-12">
          {children}
        </div>
      </div>
    );
  }
  
  return( <>
  {children}
  </>)
  
};

export default NewsletterWrapper;
