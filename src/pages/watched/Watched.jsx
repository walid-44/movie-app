import Card from "../../components/cards/Card";
import { useEffect } from "react";
import { fetchMovies } from "../../rtk/slices/movies-list";
import "./watched.css";

import { useDispatch, useSelector } from "react-redux";
import { Container } from "react-bootstrap";
import Title from "../../components/title-movies/Title";

const Watched = () => {
  const movies = useSelector((state) => state.movies);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  return (
    <>
      <Container >
        <Title />
        <div className="watched-list">
          {movies.map((mo) => (
            <Card key={mo.id} mo={mo} />
          ))}
        </div>
      </Container>
    </>
  );
};

export default Watched;
