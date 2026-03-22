import { useEffect, useState } from 'react'

const wallItems = [
  { label: 'about', href: '#about', className: 'tag-about' },
  { label: 'writing', href: '#writing', className: 'tag-writing' },
  { label: 'coding projects', href: '#coding', className: 'tag-coding' },
]

const writingLinks = [
  {
    title: 'Wedding Fever / Short Fiction',
    venue: 'Short Édition',
    link: 'https://short-edition.com/en/story/short-fiction/wedding-fever',
    date: '2026',
  },
  {
    title: 'Zombie Fiction / Poem',
    venue: 'Poet Lore',
    link: 'https://x.com/miriamcore_/status/2026466886980915412/photo/1',
    date: '2025',
  },
  {
    title: 'Americana / Poem',
    venue: 'The Journal',
    link: 'https://thejournalmag.org/archives/23816',
    date: '2026',
  }
]

const selectedWriting = [
  ...writingLinks,
  {
    title: 'Another Title / Poem',
    venue: 'Magazine Name',
    link: '#',
    date: '2024',
  },
  {
    title: 'Story Title / Fiction',
    venue: 'Journal Name',
    link: '#',
    date: '2023',
  },
]

const codingProjects = [
  {
    title: 'Generative Wall',
    date: 'March 2026',
    type: 'creative coding',
    repoUrl: 'https://github.com/yourusername/generative-wall',
    gifSrc: 'project-gifs/one.gif',
  },
  {
    title: 'Small Useful Tools',
    date: 'February 2026',
    type: 'software projects',
    repoUrl: 'https://github.com/yourusername/small-useful-tools',
    gifSrc: 'project-gifs/two.gif',
  },
]

export default function App() {
  const [currentPage, setCurrentPage] = useState(() =>
    window.location.hash === '#/selected-writing' ? 'selected-writing' : 'home',
  )

  useEffect(() => {
    const syncPageWithHash = () => {
      setCurrentPage(window.location.hash === '#/selected-writing' ? 'selected-writing' : 'home')
    }

    window.addEventListener('hashchange', syncPageWithHash)
    syncPageWithHash()

    return () => {
      window.removeEventListener('hashchange', syncPageWithHash)
    }
  }, [])

  return (
    <div className="page-shell" id="top">
      <aside className="sidebar">
        <div className="sidebar-top">
          <h1 className="site-title">Miriam Alex</h1>
        </div>

        <nav className="sidebar-nav" aria-label="Primary">
          {currentPage === 'selected-writing' ? (
            <>
              <a className="sidebar-link" href="#">
                <span className="sidebar-label">home</span>
              </a>
              <a className="sidebar-link" href="#/selected-writing">
                <span className="sidebar-label">selected writing</span>
              </a>
            </>
          ) : (
            wallItems.map((item) => (
              <a
                key={item.label}
                className="sidebar-link"
                href={item.href}
              >
                <span className={`sidebar-label ${item.className}`}>{item.label}</span>
              </a>
            ))
          )}
        </nav>

        <div className="sidebar-links" aria-label="External links">
          <a href="https://github.com/yourusername" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="https://x.com/miriamcore_" target="_blank" rel="noreferrer">
            X
          </a>
          <a href="mailto:hello@example.com">
            Email
          </a>
        </div>

        <div className="sidebar-footer">
          <p>New York</p>
          <p>Writer + engineer</p>
        </div>
      </aside>

      <main className="content">
        {currentPage === 'selected-writing' ? (
          <section className="panel panel-writing selected-writing-page">
            <div className="panel-intro">
              <h2>Selected Writing</h2>
              <p className="page-note">A fuller archive of poems, stories, and published work.</p>
            </div>
            <div className="writing-list">
              <div className="writing-entries">
                {selectedWriting.map((item) => (
                  <a
                    className="writing-entry"
                    href={item.link}
                    key={`${item.title}-${item.venue}`}
                    target={item.link.startsWith('http') ? '_blank' : undefined}
                    rel={item.link.startsWith('http') ? 'noreferrer' : undefined}
                  >
                    <div className="writing-summary">
                      <div>
                        <h4>{item.title}</h4>
                        <p>{item.venue}</p>
                      </div>
                      <p className="writing-date">{item.date}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </section>
        ) : (
          <>
            <section className="panel panel-about" id="about">
              <div className="panel-intro">
                <h2>About</h2>
              </div>
              <div className="about-note">
                <p>
                  Miriam is a writer and developer in New York.
                </p>
              </div>
            </section>

            <section className="panel panel-writing" id="writing">
              <div className="panel-intro">
                <h2>Selected Writing</h2>
              </div>
              <div className="writing-list">
                <div className="writing-entries">
                  {writingLinks.map((item) => (
                    <a
                      className="writing-entry"
                      href={item.link}
                      key={`${item.title}-${item.venue}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="writing-summary">
                        <div>
                          <h4>{item.title}</h4>
                          <p>{item.venue}</p>
                        </div>
                        <p className="writing-date">{item.date}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
              <a className="more-writing-link" href="#/selected-writing">
                (More)
              </a>
            </section>

            <section className="panel panel-coding" id="coding">
              <div className="panel-intro">
                <h2>Coding Projects</h2>
              </div>
              <div className="card-grid">
                {codingProjects.map((project) => (
                  <a
                    className="project-card"
                    href={project.repoUrl}
                    key={project.title}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="project-preview">
                      {project.gifSrc ? (
                        <img src={project.gifSrc} alt={`${project.title} preview`} />
                      ) : (
                        <div className="project-placeholder">Add project GIF</div>
                      )}
                    </div>
                    <div className="project-meta">
                      <p className="card-type">{project.type}</p>
                      <p className="project-date">{project.date}</p>
                    </div>
                    <h3>{project.title}</h3>
                  </a>
                ))}
              </div>
            </section>
          </>
        )}
      </main>
    </div>
  )
}
