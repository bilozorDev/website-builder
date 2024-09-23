import { Reorder } from "framer-motion";

const DraggableList = ({ items, onReorder, renderItem }) => {
  return (
    <Reorder.Group
      axis="y"
      values={items}
      onReorder={onReorder}
      className="space-y-4"
    >
      {items.map((item, index) => (
        <Reorder.Item
          key={item.id || index}
          value={item}
          as="div"
          whileDrag={{ scale: 1.05 }}
          
        >
          {renderItem(item, index)}
        </Reorder.Item>
      ))}
    </Reorder.Group>
  );
};

export default DraggableList;
