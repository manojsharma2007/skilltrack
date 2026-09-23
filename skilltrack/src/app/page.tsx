import Link from "next/link";
import { ArrowRight, CheckCircle, Target, Award, BookOpen } from "lucide-react";

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-teal-600 via-teal-700 to-teal-800 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
          <div className="max-w-2xl">
            <p className="text-teal-200 font-medium mb-3">Student Learning Platform</p>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-4">
              Track Your Skills.<br />Complete Internships.<br />Grow Faster.
            </h1>
            <p className="text-teal-100 text-lg mb-8 leading-relaxed">
              SkillTrack helps students manage internship tasks, track progress, and stay motivated while building real-world projects.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/dashboard"
                className="inline-flex items-center gap-2 bg-white text-teal-700 font-semibold px-6 py-3 rounded-lg hover:bg-teal-50 transition-colors"
              >
                Go to Dashboard <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 border border-teal-400 text-white font-medium px-6 py-3 rounded-lg hover:bg-teal-600 transition-colors"
              >
                View Projects
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <h2 className="text-2xl font-bold text-slate-800 text-center mb-10">
          Everything you need to succeed
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: BookOpen, title: "Real Projects", desc: "Work on industry-oriented tasks designed like real internships." },
            { icon: Target, title: "Progress Tracking", desc: "Clear task lists and progress bars keep you motivated." },
            { icon: CheckCircle, title: "Task Management", desc: "Break big goals into 6 clear, completable tasks." },
            { icon: Award, title: "Earn Rewards", desc: "Complete all tasks and unlock stipend eligibility." },
          ].map((f) => (
            <div key={f.title} className="bg-white rounded-xl border border-slate-200 p-6 text-center shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center mx-auto mb-4">
                <f.icon className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="font-semibold text-slate-800 mb-2">{f.title}</h3>
              <p className="text-sm text-slate-500">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-100 border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 text-center">
          <h2 className="text-xl font-bold text-slate-800 mb-2">Ready to start tracking?</h2>
          <p className="text-slate-500 mb-6">Open your dashboard and see your current progress.</p>
          <Link
            href="/dashboard"
            className="inline-flex items-center gap-2 bg-teal-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors"
          >
            Open Dashboard <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
