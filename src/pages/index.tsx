import React, { useContext } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import cn from 'classnames'
import { useQuery } from 'react-query'

import Container from 'src/components/common/Container'
import PokemonList from 'src/components/PokemonList'
import GlobalContext from 'src/context/globalState'

import { fetchAllPokemon } from 'src/utils/apis'
import { Pokemon } from 'src/utils/types'

const Home: NextPage<Props> = ({ allPokemon }: Props) => {
  const { pagination, setAllPokemon } = useContext(GlobalContext)
  useQuery<Pokemon[], Error>(
    ['allPokemon', pagination],
    () => fetchAllPokemon(pagination),
    { 
      initialData: allPokemon,
      enabled: !!allPokemon,
      onSuccess: (res) => {
        setAllPokemon(res)
      }
    }
  )

  return (
    <div>
      <Head>
        <title>Home</title>
        <meta name="description" content="home page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container
        title='Home'
      >
        <h1 className={cn(
          'text-neutral-800 font-bold decoration-dashed underline decoration-cyan-500',
          'text-center mt-10 mb-8',
          "text-3xl md:text-5xl"
        )}>
          Gotta Catch &apos;Em All!
        </h1>
        <PokemonList />
      </Container>
    </div>
  )
}

export async function getStaticProps() {
  const allPokemon = await fetchAllPokemon({ limit: 10, offset: 0 })
  return { props: { allPokemon } }
}

type Props = {
  allPokemon: Array<Pokemon>
}

export default Home
