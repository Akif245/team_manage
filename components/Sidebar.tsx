"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar({ role }: { role: string }) {
  const pathname = usePathname();

  const basePath = `/dashboard/${role}`;

  const menu = [
    { name: "Dashboard", path: basePath },
    { name: "Projects", path: `${basePath}/projects` },
    { name: "Submissions", path: `${basePath}/submissions` },
    { name: "Reports", path: `${basePath}/reports` },
    { name: "Profile", path: `${basePath}/profile` },
  ];

  return (
    <div className="w-64 h-screen bg-gray-900 text-white p-6">
      <h1 className="text-2xl font-bold mb-8">Team Manager</h1>

      <ul className="space-y-4">
        {menu.map((item) => (
          <li key={item.name}>
            <Link
              href={item.path}
              className={`block p-2 rounded ${
                pathname === item.path
                  ? "bg-blue-600"
                  : "hover:bg-gray-700"
              }`}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>

      <div className="absolute bottom-6 left-6">
        <button className="text-red-400 hover:text-red-500">
          Logout
        </button>
      </div>
    </div>
  );
}
