import React, { useState } from "react";
import { useSelectedElements } from "../contexts/SelectedElementsContext";

export default function MenuItemsEditor() {
  const { header, setHeader } = useSelectedElements();  // Use context
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
                <button onClick={() => {
                  setEditIndex(index);
                  setEditItem(item);
                }}>
                  Edit
                </button>
                <button onClick={() => handleDeleteItem(index)}>Delete</button>
              </div>
            )}
          </li>
        ))}
      </ul>

      {header.menuItems.regularItems.length < 6 && (
        <div>
          <h4>Add New Item</h4>
          <input
            type="text"
            value={newItem.name}
            onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
            placeholder="Item Name"
          />
          <input
            type="text"
            value={newItem.href}
            onChange={(e) => setNewItem({ ...newItem, href: e.target.value })}
            placeholder="Item Link"
          />
          <button onClick={handleAddItem}>Add</button>
        </div>
      )}
    </div>
  );
}
