import React from 'react'
import estilo from './main.module.css'

export const main = () => {
  return (
    <main className={estilo.contenedorMain}>
        <section>
            <h2>Welcome!</h2>
        </section>
    </main>
  )
}

export default main;