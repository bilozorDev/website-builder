import { motion, Reorder } from "framer-motion";
import React, { useState } from "react";
const initialMenu = [
    { id: 1, name: 'Home', href: '/', subItems: [] },
    { id: 2, name: 'About', href: '/about', subItems: [] },
    { id: 3, name: 'Services', href: '/services', subItems: [
      { id: 4, name: 'Consulting', href: '/services/consulting', subItems: [] },
      { id: 5, name: 'Development', href: '/services/development', subItems: [] }
    ]}
  ];
  
  const MenuItem = ({ item, index, depth = 0, onChange, onDragEnd }) => {
    // Define snapping points (e.g., top-level or sub-item levels)
    const snapPoints = [0, 30, 60]; // Adjust these values for snapping
  
    // Calculate the nearest snap point based on drag distance
    const getSnapPoint = (x) => {
      return snapPoints.reduce((prev, curr) => {
        return Math.abs(curr - x) < Math.abs(prev - x) ? curr : prev;
      });
    };
  
    return (
      <motion.div
        drag="x"
        dragConstraints={{ left: 0, right: 60 }} // Limit drag range
        onDragEnd={(event, info) => {
          const snapX = getSnapPoint(info.point.x);
          onDragEnd(snapX, item.id); // Pass snap point and item id for reordering or nesting
        }}
        style={{
          paddingLeft: depth * 20, // Add indentation based on depth
          marginBottom: "5px",
        }}
      >
        {/* Styled using the style you provided */}
        <div className="isolate -space-y-px rounded-md shadow-sm">
          <div className="relative rounded-md rounded-b-none px-3 pb-1.5 pt-2.5 ring-1 ring-inset ring-gray-300 focus-within:z-10 focus-within:ring-2 focus-within:ring-indigo-600">
            <label
              htmlFor={`menu-item-name-${index}`}
              className="block text-xs font-medium text-gray-500"
            >
              Link Name
            </label>
            <input
              id={`menu-item-name-${index}`}
              name={`menu-item-name-${index}`}
              type="text"
              value={item.name}
              onChange={(e) => onChange(item.id, "name", e.target.value)}
              placeholder="Link name"
              className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
            />
          </div>
          <div className="relative rounded-md rounded-t-none px-3 pb-1.5 pt-2.5 ring-1 ring-inset ring-gray-300 focus-within:z-10 focus-within:ring-2 focus-within:ring-indigo-600">
            <label
              htmlFor={`menu-item-link-${index}`}
              className="block text-xs font-medium text-gray-500"
            >
              Link URL
            </label>
            <input
              id={`menu-item-link-${index}`}
              name={`menu-item-link-${index}`}
              type="text"
              value={item.href}
              onChange={(e) => onChange(item.id, "href", e.target.value)}
              placeholder="https://example.com"
              className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
      </motion.div>
    );
  };
  const MegaMenuEditor = () => {
    const [menu, setMenu] = useState([
      { id: 1, name: "Home", href: "/", subItems: [] },
      { id: 2, name: "About", href: "/about", subItems: [] },
      { id: 3, name: "Services", href: "/services", subItems: [] },
    ]);
  
    const handleItemChange = (id, field, value) => {
      const updateMenu = (items) =>
        items.map((item) =>
          item.id === id
            ? { ...item, [field]: value }
            : { ...item, subItems: updateMenu(item.subItems) }
        );
      setMenu(updateMenu(menu));
    };
  
    const handleDragEnd = (snapX, id) => {
      // Adjust menu structure based on snapX value
      // If snapX corresponds to an indent, make the item a sub-item
      if (snapX === 30) {
        // Logic to make item a sub-item
      } else if (snapX === 0) {
        // Logic to move item to top level
      }
    };
  
    const renderMenuItems = (items, depth = 0) => {
      return items.map((item, index) => (
        <React.Fragment key={item.id}>
          <MenuItem
            item={item}
            index={index}
            depth={depth}
            onChange={handleItemChange}
            onDragEnd={handleDragEnd}
          />
          {item.subItems.length > 0 && renderMenuItems(item.subItems, depth + 1)}
        </React.Fragment>
      ));
    };
    console.log(menu);
  
    return (
      <div>
        <Reorder.Group axis="y" values={menu} onReorder={setMenu}>
          {renderMenuItems(menu)}
        </Reorder.Group>
      </div>
    );
  };
  
  export default MegaMenuEditor;