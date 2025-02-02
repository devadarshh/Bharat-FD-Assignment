import { Home, Users, Settings } from "lucide-react";
import { useState } from "react";

const Sidebar = () => {
  const [expanded, setExpanded] = useState(true);

  return (
    <div className={`h-screen bg-gray-900 text-white ${expanded ? "w-64" : "w-20"} transition-all p-4`}>
      <button onClick={() => setExpanded(!expanded)} className="mb-4">
        {expanded ? "⏪" : "⏩"}
      </button>
      <ul>
        <li className="flex items-center gap-2 p-2 hover:bg-gray-800 cursor-pointer">
          <Home /> {expanded && "Dashboard"}
        </li>
        <li className="flex items-center gap-2 p-2 hover:bg-gray-800 cursor-pointer">
          <Users /> {expanded && "Users"}
        </li>
        <li className="flex items-center gap-2 p-2 hover:bg-gray-800 cursor-pointer">
          <Settings /> {expanded && "Settings"}
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
