import { useState } from "react";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const [showSideBar, setShowSideBar] = useState(false);

  const toggleSideBar = () => {
    setShowSideBar(!showSideBar);
  };

  return (
    <nav className="bg-gray-600 p-2 flex items-center justify-between">
      <svg
        onClick={toggleSideBar}
        className="w-12 hover:cursor-pointer"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.5306 7.90879V5.57711C12.5306 4.59536 12.6609 3 14.3265 3C15.7755 3 16.0816 4.32946 16.0816 5.20895V12.3062H19.0612C19.7006 12.2653 21 12.7358 21 14.2084C21 15.681 19.9388 16.0901 19.0612 16.0901H11.2245V19.3217C11.2245 20.1603 10.9143 20.9662 9.67351 20.9989C8.4327 21.0316 7.95917 20.3444 7.95917 19.3217V11.5904H5.06122C4.12245 11.5904 3 11.2631 3 9.66777C3 8.2974 4.12245 7.82697 5.06122 7.82697H10.3653"
          stroke="lightgray"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <div
        onClick={showSideBar ? toggleSideBar : undefined}
        className="text-white text-xl"
      >
        <h1 className="font-bold text-2xl">Task Manager</h1>
      </div>
      {showSideBar ? (
        <div className="fadein">
          <Sidebar />
          <svg onClick={toggleSideBar}
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 hover:cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
      ) : null}
    </nav>
  );
};

export default Navbar;
