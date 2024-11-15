import languages from "./assets/languages"
import { useState } from 'react'
import './App.css'

function App() {
  const [active, setActive] = useState(0)

  function handleClick(e) {
    /* console.log(e.target); */
    const newActive = Number(e.target.getAttribute("data-index"))
    /* console.log(newActive); */
    setActive(newActive)
  }

  return (
    <>
      <header>
        <h1>Learn Web Development</h1>
      </header>

      <main>
        <div className="container">
          <div className="container-button">
            {languages.map((item, index) => (
              <button className="button" key={item.id} onClick={handleClick} data-index={index}>
                {item.title}
              </button>
            ))}
          </div>
          <div className={active == index ? "active" : "hide"}>
            <div className="card">
              <h2 className="title">{item.title}</h2>
              <div className="text">{item.description}</div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default App
