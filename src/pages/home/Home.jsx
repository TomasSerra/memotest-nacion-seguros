import React from 'react'
import './Home.scss'

import Logo from '../../img/logo.png'
function Home({goToNextPage}) {
  return (
    <div className='home-page'>
      <div className="header">
        <img src={Logo} />
      </div>
      <div className="center">
        <h1>
          <span className='orange'>¡Hola!</span>
        </h1>
        <p>Te damos la bienvenida al desafío Memotest</p>
      </div>
      <div className="button">
        <button onClick={goToNextPage}>Empezar</button>
      </div>
    </div>
  )
}

export default Home