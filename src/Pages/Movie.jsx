import React, { useState } from 'react'
import { Revies } from '../Component'

export function Movie() {

  return (
    <div className='container mx-auto bg-indigo-200 p-1 rounded-3xl my-3'>
      <iframe className='mx-auto w-3/4 h-[px]'
        src="https://www.youtube.com/embed/tgbNymZ7vqY">
      </iframe>
      <Revies />
    </div>
  )
}
