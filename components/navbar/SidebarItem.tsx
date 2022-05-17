import Link from "next/link";
import { ReactElement } from "react";

interface MenuItem{
  iconSVG: ReactElement;
  name: string;
  path: string;
}

const SidebarItem = ({iconSVG, name, path}: MenuItem) => {
  return (
      <a href={path} className="bg-gray-600 flex items-center justify-center rounded p-3 text-gray-200 hover:cursor-pointer hover:transition hover:ease-in-out hover:duration-300 hover:text-white hover:bg-gray-400">
      <div className="w-5/6 ml-2 flex items-center justify-start space-x-8">
        <div className="w-8 ml-4">
       {iconSVG}
      </div>
        <h2 className="text-2xl">{name}</h2>
      </div>
      </a>
  );
};

export default SidebarItem;
