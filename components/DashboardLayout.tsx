import Sidebar from "./Sidebar";

export default function DashboardLayout({
  role,
  children,
}: {
  role: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <Sidebar role={role} />
      <div className="flex-1 p-10 bg-gray-100 min-h-screen">
        {children}
      </div>
    </div>
  );
}
