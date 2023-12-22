import { useDispatch, useSelector } from "react-redux";
import Title from "../title-movies/Title"
import { useEffect } from "react";
import { fetchMovies } from "../../rtk/slices/movies-list";
import Card from "../cards/Card";
import { Row } from "react-bootstrap";


const Cards = () => {
  const movies = useSelector((state) => state.movies);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);
  console.log(movies);
  return (
    <>
      <Title />
      <div className="p-5 ">
        <Row className="justify-content-center gap-3">
          {movies.map((mo) => (
            <Card  key={mo.id} mo={mo} />
          ))}
        </Row>
      </div>
    </>
  )
}

export default Cards