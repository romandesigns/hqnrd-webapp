"use client";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";

export default function ConvexTasks() {
  const tasks = useQuery(api.tasks.getTasks) || [];

  if (!tasks) return <div>Loading...</div>;

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task._id.toString()}>{task.text}</li>
      ))}
    </ul>
  );
}
