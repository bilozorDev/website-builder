import React from "react";

export const MenuLinkInputComponent = ({newItem, setNewItem, handleAddItem}) => {
  return (
    <>
      <div className="flex flex-row space-x-3">
        <input
          value={newItem.name}
          onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
          placeholder="Item Name"
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />

        <input
          value={newItem.href}
          onChange={(e) => setNewItem({ ...newItem, href: e.target.value })}
          placeholder="Item Link"
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>

      <button onClick={handleAddItem}>Add</button>
    </>
  );
};
