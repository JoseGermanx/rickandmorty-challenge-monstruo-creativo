// importamos React junto a useReducer y createContext
import { useReducer, createContext } from "react";

// Recuerda que para acceder a nuestro contexto desde multiples lugares de
// nuestra app, deberemos exportarlo
export const DataContext = createContext();

// Aquí vamos a crear el estado inicial que tendrá el context y consumiremos con
// useReducer
const initialState = { characters: [], characterDetail: [] };

// Este será nuestro reducer que nos ayudará a crear o eliminar los productos
// dependiendo el action.type que reciba
const reducer = (state, action) => {
  switch (action.type) {
    case "GET_CHARACTERS":
      return {
        ...state,
        characters: action.payload,
      };
    case "SEARCH_CHARACTERS":
      return {
        ...state,
        characters: action.payload,
      };
    case "CLEAR_CHARACTERS":
      return {
        characters: [],
      };
    case "RESET_DETAIL":
      return {
        characterDetail: [],
      };
    case "GET_CHARACTER_DETAIL":
      return {
        ...state,
        characterDetail: action.payload,
      };
    default:
      return {
        state,
      };
  }
};

// De igual forma, exportaremos el provider que envolvera todos los componentes
// de nuestra app
// eslint-disable-next-line react/prop-types
export const DataContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Dentro del value del provider colocaremos el state y el dispatch para
  // manejar el estado global
  return (
    <DataContext.Provider value={[state, dispatch]}>
      {children}
    </DataContext.Provider>
  );
};
