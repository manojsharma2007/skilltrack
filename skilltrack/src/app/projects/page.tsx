import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

export default function ProjectsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-800">Projects & Internships</h1>
        <p className="text-slate-500 mt-1">All your assigned projects and internship tasks in one place.</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </div>
  );
}
