"use client";
import { TaskViewSwitcher } from "@/features/tasks/components/task-view-switcher";

export default function TaskmangePage() {
  return (
    <div className="h-full flex flex-col p-4">
      <TaskViewSwitcher hideProjectFilter />
    </div>
  );
}
