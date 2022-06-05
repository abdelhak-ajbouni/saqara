import React from 'react'
import Image from 'next/image'

import { PokemonFields } from 'src/utils/types'

export default function PokemonInfo({ data }: Props) {

  const { name, base_experience, weight, height, sprites } = data || {};

  return (
    <div className='flex flex-col m-2 md:flex-row'>

      <div className='border-2 text-center rounded'>
        <Image src={sprites?.front_default || "/default.png"} alt={name} width={150} height={150} />
      </div>
      <div className='py-2 px-4'>
        <h2><span className='font-bold'>Name:</span> {name}</h2>
        <p><span className='font-bold'>Base experience:</span> {base_experience}</p>
        <p><span className='font-bold'>Weight:</span> {weight}</p>
        <p><span className='font-bold'>Height:</span> {height}</p>
      </div>
    </div>
  )
}

type Props = {
  data: PokemonFields | undefined
}