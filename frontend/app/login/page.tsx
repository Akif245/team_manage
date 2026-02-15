"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    const res = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (data.role === "HR") {
      router.push("/dashboard/hr");
    } else if (data.role === "CEO") {
      router.push("/dashboard/ceo");
    } else if (data.role === "TEAM_LEAD") {
      router.push("/dashboard/lead");
    } else if (data.role === "INTERN") {
      router.push("/dashboard/intern");
    } else {
      alert("Invalid login");
    }
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="p-8 shadow-lg rounded-xl">
        <h1 className="text-2xl mb-4">Login</h1>

        <input
          className="border p-2 mb-2 w-full"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="border p-2 mb-4 w-full"
          placeholder="Password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </div>
  );
}
