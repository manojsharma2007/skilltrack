import { projects, stats } from "@/data/projects";
import StatCard from "@/components/StatCard";
import ProjectCard from "@/components/ProjectCard";
import { FolderKanban, CheckCircle2, Clock, TrendingUp } from "lucide-react";
import Link from "next/link";

export default function DashboardPage() {
  const recentProjects = projects.slice(0, 3);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-800">Dashboard</h1>
        <p className="text-slate-500 mt-1">Welcome back, Manoj. Here’s your learning overview.</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        <StatCard title="Total Projects" value={stats.totalProjects} icon={FolderKanban} color="bg-teal-500" />
        <StatCard title="Completed" value={stats.completed} icon={CheckCircle2} color="bg-emerald-500" />
        <StatCard title="In Progress" value={stats.inProgress} icon={Clock} color="bg-amber-500" />
        <StatCard title="Overall Progress" value={`${stats.overallProgress}%`} icon={TrendingUp} color="bg-blue-500" />
      </div>

      {/* Progress overview */}
      <div className="bg-white rounded-xl border border-slate-200 p-6 mb-10 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-semibold text-slate-800">Overall Progress</h2>
          <span className="text-sm font-medium text-teal-600">{stats.overallProgress}%</span>
        </div>
        <div className="w-full bg-slate-100 rounded-full h-3">
          <div className="bg-teal-500 h-3 rounded-full transition-all" style={{ width: `${stats.overallProgress}%` }} />
        </div>
        <p className="text-sm text-slate-500 mt-3">
          Stipend earned so far: <span className="font-semibold text-slate-700">{stats.stipendEarned}</span>
        </p>
      </div>

      {/* Recent projects */}
      <div className="flex items-center justify-between mb-5">
        <h2 className="font-semibold text-slate-800 text-lg">Your Projects</h2>
        <Link href="/projects" className="text-sm text-teal-600 font-medium hover:underline">
          View all →
        </Link>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {recentProjects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </div>
  );
}
