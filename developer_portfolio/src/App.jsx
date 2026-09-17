import heroImg from './assets/hero.png'
import Panel from './components/Panel'
import StatusBadge from './components/StatusBadge'
import ProjectCard from './components/ProjectCard'

function App() {
  const userName = 'Vouen Samnang'
  const description =
    'My goal is to improve my React skills and become a better Full-Stack Developer.'
  const skills = ['React', 'JavaScript', 'Tailwind CSS', 'Node.js', 'Git']

  return (
    <div className="mx-auto flex min-h-screen max-w-5xl flex-col gap-6 p-4 md:grid md:grid-cols-[2fr_1fr] md:gap-8 md:p-8">
      <main className="flex flex-col gap-6 md:gap-8">
        <Panel>
          <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:text-left">
            <div className="flex size-24 shrink-0 items-center justify-center rounded-2xl bg-gray-100 p-3 shadow-md">
              <img
                src={heroImg}
                alt="Vouen Samnang logo mark"
                width={96}
                height={96}
                className="h-full w-full object-contain"
              />
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="text-3xl font-bold text-gray-900">{userName}</h1>
              <p className="text-base text-gray-700">{description}</p>
              <div className="flex justify-center sm:justify-start">
                <StatusBadge isOpenToWork={false} />
              </div>
            </div>
          </div>
        </Panel>

        <Panel title="Projects">
          <div className="grid gap-4 sm:grid-cols-2">
            <ProjectCard
              title="Developer Portfolio"
              description="A personal portfolio built with React, Vite, and Tailwind CSS to showcase my projects and skills."
              status="Live"
              statusVariant="default"
              href="https://github.com/Samnang-Vouen"
            />
            <ProjectCard
              title="First Components Practice"
              description="Hands-on exercises building reusable React components and learning composition patterns with props."
              status="In Progress"
              statusVariant="secondary"
              href="https://github.com/Samnang-Vouen/First-Components-Lessons-1.1-1.5"
            />
          </div>
        </Panel>
      </main>

      <aside className="flex flex-col gap-6">
        <Panel title="Skills">
          <ul className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <li
                key={skill}
                className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-700 transition-colors hover:bg-indigo-50 hover:text-indigo-700"
              >
                {skill}
              </li>
            ))}
          </ul>
        </Panel>

        <Panel title="Contact">
          <ul className="flex flex-col gap-2 text-sm">
            <li>
              <a
                href="mailto:samnangvouen@gmail.com"
                className="text-gray-700 underline-offset-4 transition-colors hover:text-indigo-600 hover:underline"
              >
                samnangvouen@gmail.com
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Samnang-Vouen"
                target="_blank"
                rel="noreferrer"
                className="text-gray-700 underline-offset-4 transition-colors hover:text-indigo-600 hover:underline"
              >
                github.com/Samnang-Vouen
              </a>
            </li>
          </ul>
        </Panel>
      </aside>
    </div>
  )
}

export default App
