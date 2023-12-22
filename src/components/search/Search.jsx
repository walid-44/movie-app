import { useState } from "react";
import "./search.css";
import { BiSearch } from "react-icons/bi";
import { BsBookmarkPlus } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { searchMovies, updateQuery } from "../../rtk/slices/search-movie";
import { addMovie } from "../../rtk/slices/movie-slices";
import { Card, Col, Container, ListGroup, Row } from "react-bootstrap";
import { IMG_URL } from "../../images/Url";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

const Search = () => {
  const [isSearch, setIsSearch] = useState("");
  const movies = useSelector((state) => state.search.results);

  const dispatch = useDispatch();
  const handleSearch = () => {
    dispatch(updateQuery(isSearch));
    dispatch(searchMovies(isSearch));
  };

  function combinedOnChange(e) {
    handleSearch();
    setIsSearch(e.target.value);
  }
  console.log(isSearch);
  console.log(movies);

  return (
    <div className="search-content" >
      <Container >
        <Row className="py-4">
          <Col className="search col-10 col-md-9 mx-auto ">
            <input
              type="search"
              className="input-search"
              placeholder="name movie"
              value={isSearch}
              onChange={combinedOnChange}
            />
            <BiSearch className="icon-toggle-search" onClick={handleSearch} />
          </Col>
      
          <Row className=" p-2 p-md-5 ">
            {movies.map((movie) => (
              <Col
                key={movie.id}
                className="col-12 col-sm-6 col-lg-4 col-xl-3 mt-3"
                style={{ minHeight: 600 }}
              >
                <Card border="danger">
                  <Card.Img
                    variant="top"
                    className="img-card"
                    src={IMG_URL + movie.poster_path}
                    loading="lazy"
                  />
                  <Card.Body className="d-flex align-items-center justify-content-between">
                    <Card.Title>{movie.title.slice(1, 10) + "..."}</Card.Title>
                    <ListGroup.Item>
                      {movie.vote_average.toFixed(1)}
                      <FaStar className="ms-2 text-warning " />
                    </ListGroup.Item>
                  </Card.Body>
                  <Card.Body className="d-flex flex-column">
                    <Card.Link
                      className="btn btn-primary"
                      onClick={() => dispatch(addMovie(movie))}
                    >
                      Add to my favorites
                      <BsBookmarkPlus />
                    </Card.Link>
                    <Link
                      className="btn btn-warning mt-3"
                      to={`/movie/${movie.id}`}
                    >
                      View more
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Row>
      </Container>
    </div>
  );
};

export default Search;
