import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BarChart3, FileText, Home, Settings, Users } from 'lucide-react';

const sidebarItems = [
  {
    title: "Home",
    icon: Home,
    href: "/",
  },
  {
    title: "Analytics",
    icon: BarChart3,
    href: "/analytics",
  },
  {
    title: "Reports",
    icon: FileText,
    href: "/reports",
  },
  {
    title: "Users",
    icon: Users,
    href: "/users",
  },
  {
    title: "Settings",
    icon: Settings,
    href: "/settings",
  },
];

function Sidebar() {
  const location = useLocation();

  return (
    <div className="flex h-screen w-[240px] flex-col border-r bg-white">
      <div className="p-6">
        <h2 className="text-lg font-semibold">Adeeb</h2>
      </div>
      <div className="flex-1 px-4">
        {sidebarItems.map((item) => (
          <Link
            key={item.href}
            to={item.href}
            className={`flex items-center mb-1 w-full px-4 py-2 text-sm font-medium rounded-md ${
              location.pathname === item.href
                ? 'bg-gray-100 text-gray-900'
                : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
            }`}
          >
            <item.icon className="mr-3 h-6 w-6" />
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;

