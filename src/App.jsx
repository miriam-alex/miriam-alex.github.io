import { useEffect, useState } from 'react'

const assetPath = (path) => `${import.meta.env.BASE_URL}${path}`

const themes = [
  { id: 'sea-glass', label: 'Sea Glass' },
  { id: 'paper-oxblood', label: 'Paper' },
  { id: 'moss-cream', label: 'Moss' },
  { id: 'dusty-blue', label: 'Apricot' },
  { id: 'night-garden', label: 'Night Garden' },
]

const defaultTheme = themes[0].id

const projects = [
  // {
  //   title: 'ADD GAME FROM RESIDENCY HERE',
  //   description:
  //     'An endlessly shifting grid of color, built for quiet staring and small surprises.',
  //   languageTag: 'TypeScript · Canvas',
  //   href: 'https://github.com/yourusername/generative-wall',
  //   gifSrc: '/project-gifs/one.gif',
  //   marginalia: 'Slow color, small surprise, ambient attention.',
  // },
  // {
  //   title: 'ADD GAME FROM GAME DESIGN HERE',
  //   description:
  //     'A loose bundle of scripts and micro-utilities that make my writing and dev days easier.',
  //   languageTag: 'Node · CLI',
  //   href: 'https://github.com/yourusername/small-useful-tools',
  //   gifSrc: '/project-gifs/two.gif',
  //   marginalia: 'Utilities for writing days, maintenance days, in-between days.',
  // },
  {
    title: 'Shortstaffed',
    description:
      'A team-based, physical cooking rhythm game. Created in a team at Cornell Tech.',
    languageTag: 'Raspberry Pi · Python',
    href: 'https://github.com/amandazlu/IDD_Final_Project/wiki',
    gifSrc: 'project-gifs/shortstaffed.gif',
    marginalia: '2025',
  },
  {
    title: 'Ekko',
    description:
      'A virtual puppet that follows your movements. Created in a team at Cornell Tech.',
    languageTag: 'MediaPipe · Raspberry Pi · Python',
    href: 'https://github.com/chenyingyu-main/Interactive-Lab-Hub/tree/Fall2025/Lab%205',
    gifSrc: 'project-gifs/ekko.gif',
    marginalia: '2025',
  },
  {
    title: 'MirrorBot',
    description:
      'Worked as a research assistant at the Architectural Robotics Lab @ Cornell under Serena (Ge) Guo',
    languageTag: 'RosPy',
    href: 'https://arl.human.cornell.edu/research-MirrorBot.html',
    gifSrc: 'project-gifs/mirrorbot-gif.gif',
    marginalia: 'Fostering Serendipitous Human Connections Through Robotic Mirrors',
  },
]

const writing = [
  {
    title: 'Wedding Fever',
    venue: 'Short Édition',
    href: 'https://short-edition.com/en/story/short-fiction/wedding-fever',
    date: '2026',
  },
  {
    title: 'Zombie Fiction',
    venue: 'Poet Lore',
    href: 'https://x.com/miriamcore_/status/2026466886980915412/photo/1',
    date: '2025',
  },
  {
    title: 'Americana',
    venue: 'The Journal',
    href: 'https://thejournalmag.org/archives/23816',
    date: '2023',
  },
    {
    title: 'The Fundamentals of Science Fiction, or Why I Could Never Love You',
    venue: 'Gigantic Sequins',
    href: 'https://x.com/miriamcore_/status/1414712293712142343',
    date: '2021',
  },
]

const moreWriting = [
 
]

const recognition = [
  {
    title: 'Semifinalist, Adroit Prizes',
    venue: 'The Adroit Journal',
    date: '2026',
  },
  {
    title: 'Arthur Lynn Andrews Award for Fiction and George Harmon Coxe Award',
    venue: 'Cornell University',
    date: '2023, 2025',
    note: 'Awarded for the top undergraduate fiction submission in 2025 and poetry submission in 2023 at Cornell University.',
  },
  {
    title: 'Shortlist, The Alpine Fellowship Poetry Prize',
    venue: 'The Alpine Fellowship Foundation',
    date: '2023',
  },
  {
    title: 'Best New Poets Finalist',
    venue: 'University of Virginia Press',
    date: '2023',
  },
  {
    title: 'Honorable Mention in Poetry',
    venue: 'National YoungArts Foundation',
    date: '2022',
  },
]

export default function App() {
  const [showMoreWriting, setShowMoreWriting] = useState(false)
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') {
      return defaultTheme
    }

    return window.localStorage.getItem('site-theme') ?? defaultTheme
  })
  const visibleWriting = showMoreWriting ? [...writing, ...moreWriting] : writing

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    window.localStorage.setItem('site-theme', theme)
  }, [theme])

  return (
    <div className="page-root">
      <header className="site-header">
        <div className="page-shell header-inner">
          <div className="site-name">Miriam Alex</div>
          {/* <div className="theme-switcher" aria-label="Color theme switcher">
            {themes.map((themeOption) => (
              <button
                key={themeOption.id}
                type="button"
                className={`theme-chip${themeOption.id === theme ? ' is-active' : ''}`}
                onClick={() => setTheme(themeOption.id)}
                aria-pressed={themeOption.id === theme}
              >
                {themeOption.label}
              </button>
            ))}
          </div> */}
        </div>
      </header>

      <main id="top" className="page-shell main-layout">
        <section id="about" className="hero">
          <p className="hero-intro">
            Playful interactions and literary work
          </p>
          <div className="hero-grid">
            <div className="hero-copy">
              <p>
                In the spirit of always being crafty, here are some of things I've made.
              </p>
            </div>
            <div className="hero-note">
              <p className="hero-note-label">Currently</p>
              <p>Building tiny projects, publishing, and working on a game. Design inspired by {' '}
                <a href="https://andymatuschak.org/" target="_blank" rel="noreferrer">
                  Andy Matuschak
                </a>
                's site.</p>
              {/* <p className="theme-note">
                Pick a palette above to shift the tone of the whole page.
              </p> */}
              <div className="hero-links" aria-label="External links">
                <a href="https://github.com/miriam-alex" target="_blank" rel="noreferrer">
                  GitHub
                </a>
                <a href="https://x.com/miriamcore_" target="_blank" rel="noreferrer">
                  X
                </a>
                <a href="mailto:miriamalex2004@gmail.com">Email</a>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="section">
          <div className="section-heading">
            <h2>Projects</h2>
            <p>Selected software work.</p>
          </div>

          <div className="project-list">
            {projects.map((project, index) => (
              <article key={project.title} className={`project-row project-row-${index + 1}`}>
                <a href={project.href} target="_blank" rel="noreferrer" className="project-image">
                  {project.gifSrc ? <img src={assetPath(project.gifSrc)} alt={`${project.title} preview`} /> : null}
                </a>
                <div className="project-text">
                  <h3>{project.title}</h3>
                  <p className="project-marginalia">{project.marginalia}</p>
                  <p>{project.description}</p>
                  <div className="project-meta">
                    <span>{project.languageTag}</span>
                    <a href={project.href} target="_blank" rel="noreferrer">
                      Visit
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="writing" className="section">
          <div className="section-heading">
            <h2>Selected Publications</h2>
            <p>Some short pieces from the last couple of years.</p>
          </div>

          <div className="writing-list">
            {visibleWriting.map((entry) => (
              <article key={`${entry.title}-${entry.venue}`} className="writing-item">
                  <div className="writing-date">{entry.date}</div>
                  <div className="writing-main">
                    <a href={entry.href} target="_blank" rel="noreferrer" className="writing-link">
                      <h3>{entry.title}</h3>
                    </a>
                    <div className="writing-footer">
                      <p className="writing-venue">{entry.venue}</p>
                    </div>
                  </div>
              </article>
            ))}
          </div>
          {/* <button
            type="button"
            className="writing-toggle"
            onClick={() => setShowMoreWriting((prev) => !prev)}
          >
            {showMoreWriting ? 'Show fewer' : 'Show more'}
          </button> */}
          <div className="section-heading recognition-heading">
            <h2>Recognition</h2>
          </div>

          <div className="writing-list" aria-label="Recognition">
            {recognition.map((entry) => (
              <article key={`${entry.title}-${entry.date}`} className="writing-item">
                <div className="writing-date">{entry.date}</div>
                <div className="writing-main">
                  <h3>{entry.title}</h3>
                  <div className="writing-footer">
                    <p className="writing-venue">{entry.venue}</p>
                  </div>
                  {entry.note ? <p>{entry.note}</p> : null}
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

    </div>
  )
}
