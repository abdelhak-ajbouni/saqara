import React, { useState } from "react";

import { Pagination, Pokemon } from 'src/utils/types'

const GlobalContext = React.createContext<any>({});

const GlobalProvider = ({ children }: Props) => {
  const [pagination, setPagination] = useState<Pagination>({ limit: 10, offset: 0 });
  const [allPokemon, setAllPokemon] = useState<Pokemon[]>([])

  return (
    <GlobalContext.Provider
      value={{
        pagination,
        setPagination,
        allPokemon, 
        setAllPokemon
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export default GlobalContext;
export { GlobalProvider };

type Props = {
  children: React.ReactNode
}