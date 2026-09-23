import { stats } from "@/data/projects";
import { Mail, MapPin, Github, GraduationCap, Award } from "lucide-react";

export default function ProfilePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8">
      <h1 className="text-2xl font-bold text-slate-800 mb-8">Profile</h1>

      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-teal-600 to-teal-700 px-6 py-8 text-white">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center text-2xl font-bold">
              MS
            </div>
            <div>
              <h2 className="text-xl font-bold">Manoj Sharma</h2>
              <p className="text-teal-100 text-sm">B.Tech CSE · Front-end Developer</p>
            </div>
          </div>
        </div>

        {/* Info */}
        <div className="p-6 space-y-4">
          <div className="flex items-center gap-3 text-sm text-slate-600">
            <Mail className="w-4 h-4 text-slate-400" />
            manojkumar2007sharma@gmail.com
          </div>
          <div className="flex items-center gap-3 text-sm text-slate-600">
            <MapPin className="w-4 h-4 text-slate-400" />
            Rohtak, Haryana
          </div>
          <div className="flex items-center gap-3 text-sm text-slate-600">
            <Github className="w-4 h-4 text-slate-400" />
            github.com/manojsharma2007
          </div>
          <div className="flex items-center gap-3 text-sm text-slate-600">
            <GraduationCap className="w-4 h-4 text-slate-400" />
            MDU Rohtak · CGPA 8.76 · Expected 2029
          </div>
        </div>

        {/* Stats */}
        <div className="border-t border-slate-100 px-6 py-5 grid grid-cols-3 gap-4 text-center">
          <div>
            <p className="text-2xl font-bold text-slate-800">{stats.totalProjects}</p>
            <p className="text-xs text-slate-500">Projects</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-emerald-600">{stats.completed}</p>
            <p className="text-xs text-slate-500">Completed</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-teal-600">{stats.stipendEarned}</p>
            <p className="text-xs text-slate-500">Stipend</p>
          </div>
        </div>

        {/* Skills */}
        <div className="border-t border-slate-100 px-6 py-5">
          <h3 className="font-semibold text-slate-800 mb-3 flex items-center gap-2">
            <Award className="w-4 h-4 text-teal-600" /> Skills
          </h3>
          <div className="flex flex-wrap gap-2">
            {["HTML5", "CSS3", "JavaScript", "React.js", "Next.js", "Three.js", "Tailwind CSS", "Git"].map((skill) => (
              <span key={skill} className="text-xs font-medium px-3 py-1.5 rounded-full bg-teal-50 text-teal-700">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
