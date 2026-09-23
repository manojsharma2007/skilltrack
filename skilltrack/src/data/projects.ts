export interface Task {
  id: number;
  title: string;
  completed: boolean;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  progress: number;
  totalTasks: number;
  completedTasks: number;
  status: "In Progress" | "Completed" | "Not Started";
  duration: string;
  stipend: string;
  tasks: Task[];
  color: string;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Front-end Web Development Internship",
    category: "Web Development",
    description: "Build modern, responsive web applications using HTML, CSS, JavaScript, React and Next.js. Complete 6 industry-oriented tasks with mentor support.",
    progress: 65,
    totalTasks: 6,
    completedTasks: 4,
    status: "In Progress",
    duration: "1-3 Months",
    stipend: "₹3,000",
    color: "bg-teal-500",
    tasks: [
      { id: 1, title: "Setup project & responsive landing page", completed: true },
      { id: 2, title: "Build reusable UI components", completed: true },
      { id: 3, title: "Implement dashboard layout", completed: true },
      { id: 4, title: "Add interactive features & state", completed: true },
      { id: 5, title: "API integration & data fetching", completed: false },
      { id: 6, title: "Final polish, deployment & documentation", completed: false },
    ],
  },
  {
    id: "2",
    title: "Full Stack Web Development",
    category: "Full Stack",
    description: "Learn to build complete web applications with frontend (React/Next.js) and backend integration. Focus on real-world project structure.",
    progress: 30,
    totalTasks: 6,
    completedTasks: 2,
    status: "In Progress",
    duration: "2-4 Months",
    stipend: "₹3,000",
    color: "bg-blue-500",
    tasks: [
      { id: 1, title: "Project setup & authentication UI", completed: true },
      { id: 2, title: "Dashboard & navigation", completed: true },
      { id: 3, title: "CRUD operations frontend", completed: false },
      { id: 4, title: "Form validation & error handling", completed: false },
      { id: 5, title: "API integration", completed: false },
      { id: 6, title: "Deployment & documentation", completed: false },
    ],
  },
  {
    id: "3",
    title: "React Advanced UI Project",
    category: "Web Development",
    description: "Create a high-quality interactive UI with advanced React patterns, animations and modern design principles.",
    progress: 100,
    totalTasks: 6,
    completedTasks: 6,
    status: "Completed",
    duration: "1 Month",
    stipend: "₹3,000",
    color: "bg-emerald-500",
    tasks: [
      { id: 1, title: "Component architecture", completed: true },
      { id: 2, title: "State management", completed: true },
      { id: 3, title: "Animations & transitions", completed: true },
      { id: 4, title: "Responsive design", completed: true },
      { id: 5, title: "Performance optimization", completed: true },
      { id: 6, title: "Final submission", completed: true },
    ],
  },
  {
    id: "4",
    title: "Data Visualization Dashboard",
    category: "Data Science",
    description: "Build interactive charts and dashboards to visualize data using modern frontend libraries.",
    progress: 0,
    totalTasks: 6,
    completedTasks: 0,
    status: "Not Started",
    duration: "1-2 Months",
    stipend: "₹3,000",
    color: "bg-violet-500",
    tasks: [
      { id: 1, title: "Setup & data structure", completed: false },
      { id: 2, title: "Chart components", completed: false },
      { id: 3, title: "Filters & controls", completed: false },
      { id: 4, title: "Responsive layout", completed: false },
      { id: 5, title: "Interactivity", completed: false },
      { id: 6, title: "Polish & deploy", completed: false },
    ],
  },
];

export const stats = {
  totalProjects: 4,
  completed: 1,
  inProgress: 2,
  notStarted: 1,
  overallProgress: 49,
  stipendEarned: "₹3,000",
};
