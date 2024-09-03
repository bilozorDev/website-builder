import React, { useState } from "react";
import { useSelectedElements } from "../contexts/SelectedElementsContext";
import { MenuLinkInputComponent } from "./MenuLinkInputComponent";

export default function MenuItemsEditor() {
  const { header, setHeader } = useSelectedElements(); // Use context
  const [newItem, setNewItem] = useState({ name: "", href: "#" });
  const [editIndex, setEditIndex] = useState(null);
  const [editItem, setEditItem] = useState({ name: "", href: "#" });

  const handleAddItem = () => {
    if (header.menuItems.regularItems.length < 6) {
      setHeader((prevHeader) => ({
        ...prevHeader,
        menuItems: {
          ...prevHeader.menuItems,
          regularItems: [...prevHeader.menuItems.regularItems, newItem],
        },
      }));
      setNewItem({ name: "", href: "#" });
    } else {
      alert("You can only have up to 6 items.");
    }
  };

  const handleEditItem = (index) => {
    const updatedItems = [...header.menuItems.regularItems];
    updatedItems[index] = editItem;
    setHeader((prevHeader) => ({
      ...prevHeader,
      menuItems: {
        ...prevHeader.menuItems,
        regularItems: updatedItems,
      },
    }));
    setEditIndex(null);
    setEditItem({ name: "", href: "#" });
  };

  const handleDeleteItem = (index) => {
    const updatedItems = header.menuItems.regularItems.filter(
      (_, i) => i !== index
    );
    setHeader((prevHeader) => ({
      ...prevHeader,
      menuItems: {
        ...prevHeader.menuItems,
        regularItems: updatedItems,
      },
    }));
  };

  return (
    <div>
      <h3>Edit Menu Items</h3>
      <ul>
        {header.menuItems.regularItems.map((item, index) => (
          <li key={index}>
            {editIndex === index ? (
              <div>
                <input
                  type="text"
                  value={editItem.name}
                  onChange={(e) =>
                    setEditItem({ ...editItem, name: e.target.value })
                  }
                  placeholder="Item Name"
                />
                <input
                  type="text"
                  value={editItem.href}
                  onChange={(e) =>
                    setEditItem({ ...editItem, href: e.target.value })
                  }
                  placeholder="Item Link"
                />
                <button onClick={() => handleEditItem(index)}>Save</button>
                <button onClick={() => setEditIndex(null)}>Cancel</button>
              </div>
            ) : (
              <div>
                <span>{item.name}</span> - <span>{item.href}</span>
                <button
                  onClick={() => {
                    setEditIndex(index);
                    setEditItem(item);
                  }}
                >
                  Edit
                </button>
                <button onClick={() => handleDeleteItem(index)}>Delete</button>
              </div>
            )}
          </li>
        ))}
      </ul>

      {header.menuItems.regularItems.length < 6 && (
        <>
          <MenuLinkInputComponent newItem={newItem} setNewItem={setNewItem} handleAddItem={handleAddItem}/>
          {/* Add mega menu items to menu */}
          <div className="relative flex items-start">
            <div className="flex h-6 items-center">
              <input
                id="comments"
                name="comments"
                type="checkbox"
                aria-describedby="comments-description"
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
              />
            </div>
            <div className="ml-3 text-sm leading-6">
              <label htmlFor="comments" className="font-medium text-gray-900">
                Comments
              </label>
              <p id="comments-description" className="text-gray-500">
                Get notified when someones posts a comment on a posting.
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
