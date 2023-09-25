import { useContext, useState } from "react";
import GetApi from "../api/api";
import { DataContext } from "../context/DataContext";

function SearchBar() {
    // eslint-disable-next-line no-unused-vars
  const [state, dispatch] = useContext(DataContext);
  const [searchInput, setSearchInput] = useState("");

  const inputHandle = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  const searchByNameHandle = (e) => {
    e.preventDefault();
    const name = searchInput;
    if (name === "") {
        document.getElementById("text-notification").innerHTML =
            "Debes ingresar un nombre";
        return;
        }

    GetApi.getCharacterByName(name)
      .then((res) => {
        dispatch({
          type: "SEARCH_CHARACTERS",
          payload: res,
        });
      })
      .then(() => {
        setSearchInput("");
        document.getElementById("name-search-input").value = "";
        document.getElementById("text-notification").innerHTML = "";
        })
      .catch((error) => {
        document.getElementById("text-notification").innerHTML = "No se encontraron resultados"
        console.log(error);
      });
  };

  return (
    <>
      <div className="flex justify-center mt-6 mb-6">
        <div className="w-1/2">
          <form>
            <div className="flex items-center border-b-2 border-teal-500 py-2">
              <input
                type="search"
                id="name-search-input"
                placeholder="Buscar personaje por nombre"
                className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                onChange={inputHandle}
              />
              <button
                className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
                type="button"
                onClick={searchByNameHandle}
              >
                Buscar
              </button>
            </div>
            <span id="text-notification" className="text-sm text-red-500 ml-3"></span>
          </form>
        </div>
      </div>
    </>
  );
}

export default SearchBar;
