import React from 'react'

import Block from 'src/components/common/Block';
import { PokemonFields } from 'src/utils/types';

export default function PokemonDetails({ data, loading }: Props) {
  const { types, moves, abilities } = data || {};

  return (
    <div>
      {
        loading && (
          <div className='text-center' >Loading...</div>
        ) || (
          <div className='flex flex-col md:flex-row'>
            <Block className='md:w-1/3' classNameTitle='decoration-red-400' title='Types'>
              <ul className='mx-2'>
                {
                  types?.map(({ type }) => (
                    <li key={type.name} className='border-b py-1'>
                      {type.name}
                    </li>
                  ))
                }
              </ul>
            </Block>
            <Block className='md:w-1/3' classNameTitle='decoration-green-500' title='Moves'>
              <ul className='mx-2'>
                {
                  moves?.map(({ move }) => (
                    <li key={move.name} className='border-b py-1'>
                      {move.name}
                    </li>
                  ))
                }
              </ul>
            </Block>
            <Block className='md:w-1/3' classNameTitle='decoration-yellow-400' title='Abilities'>
              <ul className='mx-2'>
                {
                  abilities?.map(({ ability }) => (
                    <li key={ability.name} className='border-b py-1'>
                      {ability.name}
                    </li>
                  ))
                }
              </ul>
            </Block>
          </div>
        )
      }

    </div>
  )
}

PokemonDetails.defaultProps = {
  data: {},
  loading: false
}

type Props = {
  data: PokemonFields
  loading: boolean
}