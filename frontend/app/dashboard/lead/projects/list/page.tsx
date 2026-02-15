"use client";
import { useEffect, useState } from "react";
import DashboardLayout from "@/components/DashboardLayout";

export default function ProjectList() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/projects")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <DashboardLayout role="lead">
      <h1 className="text-2xl font-bold mb-4">All Projects</h1>

      {projects.map((p: any) => (
        <div key={p.id} className="border p-4 mb-2">
          <h2 className="font-bold">{p.title}</h2>
          <p>{p.description}</p>
          <p>Deadline: {p.deadline}</p>
        </div>
      ))}
    </DashboardLayout>
  );
}
