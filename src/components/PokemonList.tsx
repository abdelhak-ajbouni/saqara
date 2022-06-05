/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext } from 'react'
import { useRouter } from 'next/router'
import cn from 'classnames';
import { IoMdArrowRoundBack, IoMdArrowRoundForward } from "react-icons/io"

import Button from './common/Button';
import GlobalContext from 'src/context/globalState'
import { Pokemon } from 'src/utils/types'

export default function PokemonList({ }: Props) {
  const router = useRouter()
  const { pagination, setPagination, allPokemon } = useContext(GlobalContext)

  const handleClick = (name: string) => {
    router.push('/pokemon/' + name)
  }

  const handleChangePagination = (direction: string) => {
    if (direction === 'next') {
      setPagination({ ...pagination, offset: pagination.offset + pagination.limit });
    } else if (direction === 'prev' && pagination.offset > 0) {
      setPagination({ ...pagination, offset: pagination.offset - pagination.limit });
    }
  }

  return (
    <div>
      <ul className='border'>
        {allPokemon?.map(({ name }: Pokemon, index: number) => (
          <li id={name} key={name} className={cn(
            'text-neutral-800 py-2 px-4 flex justify-between items-center',
            index % 2 === 0 ? 'bg-gray-50' : 'bg-gray-100'
          )}>
            <span>{name}</span>
            <Button onClick={() => handleClick(name)} label='Details' />
          </li>
        ))}
      </ul>
      <div className='flex justify-end mx-4'>
        <IoMdArrowRoundBack className='my-2 mx-1 bg-neutral-200 p-1 rounded-full cursor-pointer' size={20} onClick={() => handleChangePagination("prev")} />
        <IoMdArrowRoundForward className='my-2 mx-1 bg-neutral-200 p-1 rounded-full cursor-pointer' size={20} onClick={() => handleChangePagination("next")} />
      </div>
    </div>
  )
}

type Props = {}
