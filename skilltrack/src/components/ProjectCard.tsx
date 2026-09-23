import Link from "next/link";
import { Project } from "@/data/projects";
import { ArrowRight, CheckCircle2, Clock, Circle } from "lucide-react";

export default function ProjectCard({ project }: { project: Project }) {
  const statusConfig = {
    "Completed": { icon: CheckCircle2, color: "text-emerald-600 bg-emerald-50" },
    "In Progress": { icon: Clock, color: "text-amber-600 bg-amber-50" },
    "Not Started": { icon: Circle, color: "text-slate-500 bg-slate-100" },
  };

  const StatusIcon = statusConfig[project.status].icon;

  return (
    <Link href={`/projects/${project.id}`}>
      <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm hover:shadow-md hover:border-teal-200 transition-all cursor-pointer group h-full">
        <div className="flex items-start justify-between mb-3">
          <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-slate-100 text-slate-600">
            {project.category}
          </span>
          <span className={`text-xs font-medium px-2.5 py-1 rounded-full flex items-center gap-1 ${statusConfig[project.status].color}`}>
            <StatusIcon className="w-3.5 h-3.5" />
            {project.status}
          </span>
        </div>

        <h3 className="font-semibold text-slate-800 group-hover:text-teal-700 transition-colors mb-2">
          {project.title}
        </h3>
        <p className="text-sm text-slate-500 line-clamp-2 mb-4">{project.description}</p>

        <div className="mb-3">
          <div className="flex justify-between text-xs text-slate-500 mb-1.5">
            <span>{project.completedTasks}/{project.totalTasks} tasks</span>
            <span>{project.progress}%</span>
          </div>
          <div className="w-full bg-slate-100 rounded-full h-2">
            <div
              className={`h-2 rounded-full ${project.color} transition-all`}
              style={{ width: `${project.progress}%` }}
            />
          </div>
        </div>

        <div className="flex items-center justify-between text-xs text-slate-400 pt-2 border-t border-slate-100">
          <span>{project.duration}</span>
          <span className="flex items-center gap-1 text-teal-600 font-medium group-hover:gap-2 transition-all">
            View details <ArrowRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </div>
    </Link>
  );
}
