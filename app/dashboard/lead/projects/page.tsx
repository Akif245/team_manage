"use client";
import { useState } from "react";
import DashboardLayout from "@/components/DashboardLayout";

export default function CreateProject() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [deadline, setDeadline] = useState("");

  const createProject = async () => {
    await fetch("http://localhost:5000/api/projects/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, description, deadline }),
    });

    alert("Project Created!");
  };

  return (
    <DashboardLayout role="lead">
      <h1 className="text-2xl font-bold mb-4">Create Project</h1>

      <input
        className="border p-2 mb-2 block w-full"
        placeholder="Project Title"
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        className="border p-2 mb-2 block w-full"
        placeholder="Description"
        onChange={(e) => setDescription(e.target.value)}
      />

      <input
        className="border p-2 mb-4 block w-full"
        placeholder="Deadline"
        onChange={(e) => setDeadline(e.target.value)}
      />

      <button
        onClick={createProject}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Create Project
      </button>
    </DashboardLayout>
  );
}
