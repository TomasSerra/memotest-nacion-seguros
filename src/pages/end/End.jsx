import React, { useEffect } from 'react'
import './End.scss'
import Confetti from 'react-confetti'
import {useWindowSize} from '@react-hook/window-size'

import Logo from '../../img/logo.png'

function End({goToNextPage, hasWin}) {
  const [width, height] = useWindowSize()

  /*useEffect(() => {
    setTimeout(() => {
      goToNextPage()
    }, 6000)
  }, [])*/

  return (
    <div className='end-page'>
      {hasWin && <Confetti
        width={width}
        height={height}
        colors={['#8F8ABD', '#F06C29', '#007B5F', '#507385', '#D4AC87', '#65C9D8']}
        recycle={true}
        numberOfPieces={500}
    	/>}
      <div className="header">
        <img src={Logo} />
      </div>
      <div className="center">
        {hasWin ?
        <>
          <h1>
            ¡Ganaste!
          </h1>
          <p>Encontraste todos los pares de productos.</p>
        </>
        :
        <>
          <h2>
            ¡Se te acabó el tiempo!
          </h2>
          <p>Podes volver a participar.</p>
        </>
      }
      </div>
    </div>
  )
}

export default End