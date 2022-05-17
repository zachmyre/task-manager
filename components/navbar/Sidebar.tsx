import { ReactElement } from "react";
import SidebarItem from "./SidebarItem";

interface MenuItem {
  iconSVG: ReactElement;
  name: string;
  path: string;
}

const MenuItems: MenuItem[] = [
  {
    iconSVG: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
        />
      </svg>
    ),
    name: "Home",
    path: "/",
  },
  {
    iconSVG: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
        />
      </svg>
    ),
    name: "Tasks",
    path: "/tasks",
  },
  {
    iconSVG: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
        />
      </svg>
    ),
    name: "Goals",
    path: "/goals",
  },
];

const Sidebar = () => {
  return (
    <div className="bg-gradient-to-r from-gray-200 to-gray-400 text-white sidebar">
      <div className="h-full w-full flex flex-col">
        <div className="bg-gray-600 m-3 p-1 rounded flex items-center justify-center space-x-8">
          <svg
            className="w-12"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.5306 7.90879V5.57711C12.5306 4.59536 12.6609 3 14.3265 3C15.7755 3 16.0816 4.32946 16.0816 5.20895V12.3062H19.0612C19.7006 12.2653 21 12.7358 21 14.2084C21 15.681 19.9388 16.0901 19.0612 16.0901H11.2245V19.3217C11.2245 20.1603 10.9143 20.9662 9.67351 20.9989C8.4327 21.0316 7.95917 20.3444 7.95917 19.3217V11.5904H5.06122C4.12245 11.5904 3 11.2631 3 9.66777C3 8.2974 4.12245 7.82697 5.06122 7.82697H10.3653"
              stroke="lightgray"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <h1 className="font-bold text-2xl">Task Manager</h1>
        </div>
        <div className="m-2 p-1">
          <ul className="space-y-2">
            {MenuItems.map((item, index) => (
              <SidebarItem
                key={index}
                iconSVG={item.iconSVG}
                name={item.name}
                path={item.path}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
