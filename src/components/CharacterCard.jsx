import PropTypes from "prop-types";
import { Link } from "react-router-dom";

CharacterCard.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
};

function CharacterCard({ id, image, name, species }) {
  return (
    <>
      <div className="bg-gray-200 p-4 rounded-lg h-max">
        <div className="text-center">
          <img src={image} alt="" className="rounded-full h-20 w-20 mx-auto" />
        </div>
        <div className="text-center">
          <h1 className="text-xl font-bold">{name}</h1>
          <p className="text-sm text-gray-500">{species}</p>
        </div>
       <div className="text-center"> 
        <button className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded">
          <Link to={`/character-detail/${id}`}
          id={id}
          > Ver + detalles </Link>
        </button>
        </div>
      </div>
    </>
  );
}

export default CharacterCard;
