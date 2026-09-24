import { ShieldCheck, Users, Compass } from 'lucide-react'

const activitiesData = [
  {
    category: "University",
    title: "Active Member",
    organization: "NuttyShell (PolyU CTF Team)",
    period: "Aug 2025 - Present",
    icon: ShieldCheck,
    highlights: [
      "Contributed to challenge development for the team's annual open CTF competition.",
      "Used GitHub workflows (branches, pull requests, reviews) and worked with Docker for building/testing environments.",
      "Represented PolyU in CTF competitions, collaborating with teammates to solve security challenges under time constraints."
    ]
  },
  {
    category: "High School Leadership",
    title: "Coordinator of Technology, Info & Comm Development",
    organization: "SMAK PENABUR Gading Serpong Student Council",
    period: "High School",
    icon: Users,
    highlights: [
      "Led tech and digital communications strategy for school events and council initiatives."
    ]
  },
  {
    category: "High School Leadership",
    title: "Scout Patrol Leader (Dewan Ambalan)",
    organization: "SMAK PENABUR Gading Serpong Scout",
    period: "High School",
    icon: Compass,
    highlights: [
      "Organized outdoor activities, managed team coordination, and demonstrated leadership in scout operations."
    ]
  }
]

export default function Activities() {
  return (
    <section id="activities" className="w-full bg-slate-950 px-6 py-20 text-slate-100 sm:px-12">
      <div className="mx-auto w-full max-w-4xl">
        <div className="mb-10 space-y-3 text-center">
          <p className="text-xs font-mono uppercase tracking-widest text-sky-400">03. ACTIVITIES</p>
          <h2 className="text-3xl font-medium text-white">Activities & Leadership</h2>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {activitiesData.map((act, index) => {
          const Icon = act.icon
          return (
            <div key={index} className="border-t border-slate-800/60 px-1 py-6 flex flex-col justify-between">
              <div>
                <div className="mb-4 flex items-center gap-3 text-sky-400">
                  <Icon className="w-6 h-6" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    {act.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold">{act.title}</h3>
                <p className="mt-1 text-sm font-medium text-sky-400/90">{act.organization}</p>
                <p className="text-xs text-slate-500 mb-4">{act.period}</p>
                <ul className="list-disc list-inside space-y-2 text-sm text-slate-300">
                  {act.highlights.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          )
        })}
        </div>
      </div>
    </section>
  )
}