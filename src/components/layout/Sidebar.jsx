import { Link, NavLink } from "react-router-dom";
import { LayoutDashboard, Users, User, Settings, LogOut, X } from "lucide-react";

export default function Sidebar({ isOpen, onClose }) {
  const navLinks = [
    { name: "Dashboard", path: "/", icon: LayoutDashboard },
    { name: "Users", path: "/users", icon: Users },
    { name: "Profile", path: "/profile", icon: User },
    // Add more links as needed
  ];

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-20 bg-black/50 transition-opacity md:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar Container */}
      <aside
        className={`fixed inset-y-0 left-0 z-30 w-64 transform bg-[#111B3C] text-white transition-transform duration-300 ease-in-out md:static md:translate-x-0 border-r border-[#2B7FFF33] ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col">
          {/* Logo Area */}
          <div className="flex h-16 items-center justify-between px-6 border-b border-[#2B7FFF33]">
            <Link to="/" className="text-xl font-bold tracking-wider">
              Compnay Logo
            </Link>
            <button
              onClick={onClose}
              className="rounded-md p-1 hover:bg-[#1f2d5c] md:hidden"
            >
              <X size={20} />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 space-y-1 overflow-y-auto px-3 py-4">
            {navLinks.map((item) => {
              const Icon = item.icon;
              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-[#2B7FFF] text-white"
                        : "text-gray-300 hover:bg-[#1f2d5c] hover:text-white"
                    }`
                  }
                  onClick={() => {
                    // Close sidebar on mobile when a link is clicked
                    if (window.innerWidth < 768) {
                      onClose();
                    }
                  }}
                >
                  <Icon size={20} />
                  {item.name}
                </NavLink>
              );
            })}
          </nav>

          {/* Bottom Actions */}
          <div className="border-t border-[#2B7FFF33] p-4">
             <NavLink
                  to="/settings"
                  className={({ isActive }) =>
                    `flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-[#2B7FFF] text-white"
                        : "text-gray-300 hover:bg-[#1f2d5c] hover:text-white"
                    }`
                  }
                >
                  <Settings size={20} />
                  Settings
                </NavLink>
            <button className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium text-gray-300 transition-colors hover:bg-[#1f2d5c] hover:text-white">
              <LogOut size={20} />
              Sign Out
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}
