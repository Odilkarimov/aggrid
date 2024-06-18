import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

const App = () => {
const navigate = useNavigate();
  return (
    <div>
      <div className="flex items-start justify-center p-[10px]">
        <button
        onClick={() => navigate("/chart")}
          type="button"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Ag grid Grafig
        </button>
        <button
         onClick={() => navigate("/aggrid")}
          type="button"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Ag grid table
        </button>
      </div>

      <Outlet />
    </div>
  );
};

export default App;
