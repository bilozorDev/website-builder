import { useState, useEffect } from 'react';

const useGetSelectedStyleId = (styleSelections) => {
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    const selectedStyle = styleSelections.find(style => style.selected === true);
    if (selectedStyle) {
      setSelectedId(selectedStyle.id);
    } else {
      setSelectedId(null);
    }
  }, [styleSelections]); // Run the effect when styleSelections changes

  return selectedId;
};

export default useGetSelectedStyleId;
