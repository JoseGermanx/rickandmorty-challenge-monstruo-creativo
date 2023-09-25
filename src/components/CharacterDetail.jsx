// component: CharacterDetail for displaying character details receive props from CharacterCard
import { useContext, useEffect, useState } from "react";
import { DataContext } from "../context/DataContext";
import { useParams, useNavigate } from "react-router-dom";
import NavBar from "./NavBar";

function CharacterDetail() {
  const [characterDetails, setCharacterDetails] = useState([]);
  const [state, dispatch] = useContext(DataContext);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (state.characters.length === 0) {
      navigate("/");
    } else {
      const idInt = parseInt(id);
      const character = state.characters.filter(
        (character) => character.id === idInt
      );
      dispatch({
        type: "GET_CHARACTER_DETAIL",
        payload: character,
      });
    }
  }, [dispatch, id, navigate, state.characters]);

  useEffect(() => {
    if (!state.characterDetail) {
      return;
    } else {
      setCharacterDetails(state.characterDetail);
    }
  }, [state.characterDetail, characterDetails]);

  const handleReturn = (e) => {
    e.preventDefault();
    window.history.back();
  };

  return (
    <>
    <NavBar />
      <div className="bg-gray-200 p-4 rounded-lg">
        <button
          className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
          onClick={handleReturn}
        >
          Volver
        </button>
        {characterDetails.map((character) => {
          return (
            <>
              <div className="text-center">
                <img
                  src={character.image}
                  alt=""
                  className="rounded-full h-50 w-50 mx-auto"
                />
              </div>
              <div className="text-center">
                <h1 className="text-2xl font-bold">{character.name}</h1>
                <p className="text-sm text-gray-500">
                  Specie: {character.species}
                </p>
                <p className="text-sm text-gray-500">
                  Status: {character.status}
                </p>
                <p className="text-sm text-gray-500">
                  Gender: {character.gender}
                </p>
                <p className="text-sm text-gray-500">
                  Origin: {character.origin.name}
                </p>
                <p className="text-sm text-gray-500">
                  Location: {character.location.name}
                </p>


              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default CharacterDetail;
