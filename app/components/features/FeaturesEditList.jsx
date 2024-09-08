import { ChartPieIcon, PencilSquareIcon } from "@heroicons/react/24/outline";
import SelectedIcon from "../SelectedIconStyle";
import useSelectedFeatureStyle from "@/app/hooks/useGetSelectedStyleId";
import { useFeatures } from "@/app/contexts/FeaturesContext";

export default function FeaturesEditList({
  name = "",
  description = "",
  Icon = ChartPieIcon,
  onClick,
  link,
}) 

{
  const { features } = useFeatures();
  const { iconsStyle } = features.options;
  const selectedId = useSelectedFeatureStyle(iconsStyle);
  return (
    <div
      key={name}
      className="relative flex hover:cursor-move items-center space-x-3 rounded-lg border border-gray-300 group bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400"
    >
      <div className="flex-shrink-0">
        <SelectedIcon selectedId={selectedId} Icon={Icon} />
      </div>
      <div className="min-w-0 flex-1">
        <span aria-hidden="true" className="absolute inset-0" />
        <p className=" font-medium text-gray-900 pb-1">{name}</p>
        <p className="truncate text-sm text-gray-500">{description}</p>
        <p className="truncate text-sm text-blue-600 mt-1">{link}</p>
      </div>
      <PencilSquareIcon
        onClick={onClick}
        className="h-5 w-5 hidden cursor-pointer group-hover:block text-gray-400 hover:text-gray-800 z-50"
      />
    </div>
  );
}
