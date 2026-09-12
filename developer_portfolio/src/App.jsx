import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function StatusBadge({isOpenToWork}){
  return (
    <span className={isOpenToWork ? 'status open' : 'status busy'}> 
      {isOpenToWork ? 'Open to Work' : "Busy learning"}
    </span>
  );
}

function App() {
  const userName = 'Vouen Samnang';
  const discription = "My goal is to improve my React skills and become a better Full-Stack Developer.";

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>{userName}</h1>
          <p>
            {discription}
          </p>
        </div>
        <StatusBadge isOpenToWork={false}/>
      </section>
    </>
  )
}

export default App
