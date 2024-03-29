import Link from 'next/link'
import React from 'react'

const Error = () => {
  return (
    <>
      <section className='error'>
        <h1 className='error__title'>¡Ups algo salio mal!</h1>
        <Link className='btn' href='/api/auth/signin'>Regresar</Link>

      </section>
    </>
  )
}

export default Error
