import './App.css'
function App() {
  return (
    <div>
      <nav>
        <h2>Yordanos</h2>
        <div>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>
      <section id="home">
    <img src="/code.jpg" alt="Profile" className="profile-image" />
         <p className="small-title">HELLO, I'M</p>
          <h1>Yordanos</h1>
        <h2>Economics Student & Frontend Developer</h2>
        <p>
          Welcome to my portfolio website. I'm learning frontend development
          and enjoy creating websites.
        </p>
        <a href="#projects">View My Projects</a>
      </section>
      <section id="about">
        <h2>About Me</h2>
        <p>
          I am a third-year Economics student at Addis Ababa University.
          I am also learning frontend development and enjoy creating websites
          and learning new technology.
        </p>
      </section>
      <section id="skills">
        <h2>My Skills</h2>

        <div>
          <p>HTML</p>
          <p>CSS</p>
          <p>JavaScript</p>
          <p>React</p>
        </div>
      </section>
      <section id="projects">
        <h2>My Projects</h2>
        <div className="project-card">

          <h3>Sweet Bakery Website</h3>

          <p>
            A simple bakery website created using HTML and CSS.
          </p>

          <p>
            <strong>Technologies:</strong> HTML, CSS
          </p>

          <a
            href="https://github.com/Lu-n-ai/sweet-bakery"
            target="_blank"
            rel="noreferrer"
          >
            <button>GitHub</button>
          </a>
        </div>
        <div className="project-card">

          <h3>Task Manager</h3>

          <p>
            A to-do list web app that allows users to add, complete, delete,
            filter, and save tasks even after refreshing the page.
          </p>

          <p>
            <strong>Technologies:</strong> HTML, CSS, JavaScript
          </p>

          <a
            href="https://github.com/Lu-n-ai/assignment-"
            target="_blank"
            rel="noreferrer"
          >
            <button>GitHub</button>
          </a>

        </div>
        <div className="project-card">

          <h3>JavaScript DOM Homework</h3>

          <p>
            A collection of five JavaScript exercises covering DOM
            manipulation, image galleries, to-do lists, counters,
            and element traversal.
          </p>

          <p>
            <strong>Technologies:</strong> HTML, CSS, JavaScript
          </p>

          <a
            href="https://github.com/Lu-n-ai/Home-work-"
            target="_blank"
            rel="noreferrer"
          >
            <button>GitHub</button>
          </a>

        </div>

      </section>
      <section id="contact">

        <h2>Contact Me</h2>

        <p>Email: Yordanos.serawit@gmail.com</p>

        <p>GitHub: https://github.com/Lu-n-ai</p>

        <p>
          LinkedIn: https://www.linkedin.com/in/yordanos-serawit/
        </p>

      </section>
      <footer>
        <p>© 2026 Yordanos. All rights reserved.</p>
      </footer>

    </div>
  )
}

export default App