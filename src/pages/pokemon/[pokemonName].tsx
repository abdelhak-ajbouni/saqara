/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useQuery } from 'react-query'
import { request, gql } from 'graphql-request'

import Container from 'src/components/common/Container'
import PokemonDetails from 'src/components/PokemonDetails'
import PokemonInfo from 'src/components/PokemonInfo'

import { fetchSinglePokemon } from 'src/utils/apis'
import { PokemonFields } from 'src/utils/types'

const Pokemon: NextPage = ({ }) => {
  const router = useRouter()
  const { pokemonName } = router.query
  const { data: singlePokemonData, isLoading } = useQuery<PokemonFields, Error>(
    ['allPokemon', pokemonName],
    () => fetchSinglePokemon({ name: pokemonName as string }),
    {
      enabled: !!pokemonName,
    }
  )

  return (
    <div>
      <Head>
        <title>{pokemonName}</title>
        <meta name="description" content={pokemonName + " page"} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container
        title={pokemonName as string}
        onGoBack={() => router.push('/')}
      >
        <PokemonInfo data={singlePokemonData} />
        <PokemonDetails data={singlePokemonData} loading={isLoading} />
      </Container>
    </div>
  )
}

export default Pokemon
