import { useState } from 'react'

const projects = [
  {
    title: 'Generative Wall',
    description:
      'An endlessly shifting grid of color, built for quiet staring and small surprises.',
    languageTag: 'TypeScript · Canvas',
    href: 'https://github.com/yourusername/generative-wall',
    gifSrc: '/project-gifs/one.gif',
    marginalia: 'Slow color, small surprise, ambient attention.',
  },
  {
    title: 'Small Useful Tools',
    description:
      'A loose bundle of scripts and micro-utilities that make my writing and dev days easier.',
    languageTag: 'Node · CLI',
    href: 'https://github.com/yourusername/small-useful-tools',
    gifSrc: '/project-gifs/two.gif',
    marginalia: 'Utilities for writing days, maintenance days, in-between days.',
  },
]

const writing = [
  {
    title: 'Wedding Fever / Short Fiction',
    description: 'Brief fever dream at the edge of a celebration.',
    venue: 'Short Édition',
    href: 'https://short-edition.com/en/story/short-fiction/wedding-fever',
    date: '2026',
    note: 'flash',
  },
  {
    title: 'Americana / Poem',
    description: 'Flyover ghosts, freeway light, and an ache for elsewhere.',
    venue: 'The Journal',
    href: 'https://thejournalmag.org/archives/23816',
    date: '2026',
    note: 'poem',
  },
  {
    title: 'Zombie Fiction / Poem',
    description: 'After the teeth marks: what’s left to catalogue.',
    venue: 'Poet Lore',
    href: 'https://x.com/miriamcore_/status/2026466886980915412/photo/1',
    date: '2025',
    note: 'poem',
  },
]

const moreWriting = [
  {
    title: 'Working Title / Essay',
    description: 'On learning, notes, and the strange intimacy of software.',
    venue: 'In progress',
    href: '#',
    date: '—',
  },
  {
    title: 'Drafts Folder / Misc.',
    description: 'Fragments, abandoned paragraphs, and things that might yet resolve.',
    venue: 'Elsewhere',
    href: '#',
    date: '—',
  },
]

export default function App() {
  const [showMoreWriting, setShowMoreWriting] = useState(false)
  const visibleWriting = showMoreWriting ? [...writing, ...moreWriting] : writing

  return (
    <div className="page-root">
      <header className="site-header">
        <div className="page-shell header-inner">
          <div className="site-name">Miriam Alex</div>
        </div>
      </header>

      <main id="top" className="page-shell main-layout">
        <section id="about" className="hero">
          <p className="hero-intro">
            Writer and engineer making playful software and literary work.
          </p>
          <div className="hero-grid">
            <div className="hero-copy">
              <p>
                I make software, writing, and visual experiments that are playful, clear, and easy
                to live with.
              </p>
            </div>
            <div className="hero-note">
              <p className="hero-note-label">Currently</p>
              <p>Building small software, publishing poems, and collecting visual studies.</p>
              <div className="hero-links" aria-label="External links">
                <a href="https://github.com/yourusername" target="_blank" rel="noreferrer">
                  GitHub
                </a>
                <a href="/cv.pdf" target="_blank" rel="noreferrer">
                  CV
                </a>
                <a href="https://x.com/miriamcore_" target="_blank" rel="noreferrer">
                  X
                </a>
                <a href="mailto:hello@example.com">Email</a>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="section">
          <div className="section-heading">
            <h2>Projects</h2>
            <p>Selected software work and visual experiments.</p>
          </div>

          <div className="project-list">
            {projects.map((project, index) => (
              <article key={project.title} className={`project-row project-row-${index + 1}`}>
                <a href={project.href} target="_blank" rel="noreferrer" className="project-image">
                  {project.gifSrc ? <img src={project.gifSrc} alt={`${project.title} preview`} /> : null}
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
            <h2>Writing</h2>
            <p>Recent publications, drafts, and work in progress.</p>
          </div>

          <div className="writing-list">
            {visibleWriting.map((entry) => (
              <article key={`${entry.title}-${entry.venue}`} className="writing-item">
                <a href={entry.href} target="_blank" rel="noreferrer" className="writing-link">
                  <div className="writing-date">{entry.date}</div>
                  <div className="writing-main">
                    <h3>{entry.title}</h3>
                    <div className="writing-footer">
                      <p className="writing-venue">{entry.venue}</p>
                      <span className="writing-note">{entry.note}</span>
                    </div>
                  </div>
                </a>
              </article>
            ))}
          </div>

          <button
            type="button"
            className="writing-toggle"
            onClick={() => setShowMoreWriting((prev) => !prev)}
          >
            {showMoreWriting ? 'Show fewer' : 'Show more'}
          </button>
        </section>
      </main>

    </div>
  )
}
