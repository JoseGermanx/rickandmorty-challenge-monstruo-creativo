import { useEffect, useState, useContext } from "react";
import GetApi from "../api/api";
import { DataContext } from "../context/DataContext";
import CharacterCard from "./CharacterCard";

function GripContent() {
  const [state, dispatch] = useContext(DataContext);
  // eslint-disable-next-line no-unused-vars
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    GetApi.getCharacters()
      .then((res) => {
        dispatch({
          type: "GET_CHARACTERS",
          payload: res,
        });
        setCharacters(state.characters);
      })
      .catch((error) => {
        console.log(error);
      });
      dispatch({
        type: "RESET_DETAIL",
      });
  }, []);

  return (
    <div className="md:grid md:grid-cols-4 gap-4 p-8 sm:flex sm:flex-col ">
      {state.characters?.map((character) => {
        return (
          <div
            key={character.id}
          >
            <CharacterCard
              key={character.id}
              image={character.image}
              name={character.name}
              species={character.species}
              id={character.id}
            />
          </div>
        );
      })}
    </div>
  );
}

export default GripContent;
