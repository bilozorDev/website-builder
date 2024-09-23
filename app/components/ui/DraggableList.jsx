import { ArrowsUpDownIcon, Bars2Icon } from "@heroicons/react/24/outline";
import { Reorder, useDragControls } from "framer-motion";

const DraggableList = ({ items, onReorder, renderItem }) => {
  const controls = useDragControls();
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
          dragControls={controls}
          className="flex items-center justify-center align-middle space-x-4 "
        >
          <Bars2Icon className="w-4 h-4 m-auto hover:cursor-move" />
          <div className="flex-1">{renderItem(item, index)}</div>
        </Reorder.Item>
      ))}
    </Reorder.Group>
  );
};

export default DraggableList;
