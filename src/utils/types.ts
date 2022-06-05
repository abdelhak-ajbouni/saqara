export type Pokemon = {
  name: string;
  url: string;
}

export type PokemonFields = {
  name: string;
  base_experience: number;
  weight: number;
  height: number;
  sprites: {
    front_default: string;
  };
  types: {
    type: {
      name: string;
    };
  }[];
  moves: {
    move: {
      name: string;
    };
  }[];
  abilities: {
    ability: {
      name: string;
    };
  }[];
}

export type Pagination = {
  limit: number;
  offset: number;
}