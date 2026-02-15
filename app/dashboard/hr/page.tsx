import DashboardLayout from "@/components/DashboardLayout";

export default function HRDashboard() {
  return (
    <DashboardLayout role="hr">
      <h1 className="text-3xl font-bold mb-4">HR Dashboard</h1>
      <p>Manage interns, assign team leads, view reports.</p>
    </DashboardLayout>
  );
}
