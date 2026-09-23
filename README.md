# SkillTrack – Student Learning & Internship Dashboard

A modern, clean front-end dashboard for tracking internships, projects, and learning progress.

Built with **Next.js 14**, **React**, **TypeScript** and **Tailwind CSS**.

## Features

- Responsive Landing Page
- Student Dashboard with progress stats
- Project / Internship listing
- Detailed project view with task checklist
- Profile page
- Clean teal design system
- Fully mobile responsive

## Tech Stack

- Next.js 14 (App Router)
- React 18
- TypeScript
- Tailwind CSS
- Lucide React (icons)

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
src/
├── app/
│   ├── page.tsx              # Landing page
│   ├── dashboard/page.tsx    # Dashboard
│   ├── projects/
│   │   ├── page.tsx          # Projects list
│   │   └── [id]/page.tsx     # Project detail
│   └── profile/page.tsx      # Profile
├── components/
│   ├── Navbar.tsx
│   ├── StatCard.tsx
│   └── ProjectCard.tsx
└── data/
    └── projects.ts           # Mock data
```

## Author

**Manoj Sharma**  
GitHub: [manojsharma2007](https://github.com/manojsharma2007)
