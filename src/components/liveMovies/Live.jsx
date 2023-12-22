import { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addMovie } from "../../rtk/slices/movie-slices";
import "./live.css";

const Live = ({ mo }) => {
  const stateMovie = useSelector((state) => state.movieSlice);
  const dispatch = useDispatch();


  const [isActive, setIsActive] = useState(
    localStorage.getItem(`movie_${mo.id}`) === "true"
  );

  useEffect(() => {
    setIsActive(stateMovie.some((m) => m.id === mo.id));
  }, [stateMovie]);

  const handleIconClick = () => {
    const newActiveState = !isActive;
    setIsActive(newActiveState);

    dispatch(addMovie(mo));

    localStorage.setItem(`movie_${mo.id}`, newActiveState.toString());
  };

  return (
    <span className="p-2" onClick={handleIconClick}>
      <FaHeart className={`fs-4 icon ${isActive ? "active " : ""}`} />
    </span>
  );
};

export default Live;

