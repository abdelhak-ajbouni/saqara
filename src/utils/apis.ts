import axios from "./axios";

export const fetchAllPokemon = async (params: FetchAllPokemonParams) => {
  const { offset = 10, limit = 0 } = params;
  const res = await axios.get(`/pokemon`, {
    params: {
      limit,
      offset,
    }
  });
  return res.data.results;
}

export const fetchSinglePokemon = async (params: FetchSinglePokemonParams) => {
  const { name } = params;
  const res = await axios.get(`/pokemon/${name}`);
  return res.data;
}


type FetchAllPokemonParams = {
  limit: number
  offset: number
}

type FetchSinglePokemonParams = {
  name: string
}
