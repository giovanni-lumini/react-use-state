import { useState } from 'react'
import './App.css'
import languages from './assets/languages';

/* console.log(languages); */


function App() {
  const [active, setActive] = useState(0)

  return (
    <>
      <header>
        <h1>Learn Web Development</h1>
      </header>

      <main>
        <div className="container">
          <section className="container-button">
            {languages.map((item) => (
              <button className="button" key={item.id} >{item.title}</button>
            ))}
          </section>

          <section className="card">
            <h2 className="title">HTML</h2>
            <p className="text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum, ipsum quam. Doloribus veniam, tempore iure perspiciatis vel beatae fuga ab inventore ipsa non culpa vitae sint ducimus cum officia quod?</p>
          </section>
        </div>
      </main>
    </>
  )
}

export default App
