import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { clear, deleteMovie } from "../../rtk/slices/movie-slices";
import { IMG_URL } from "../../images/Url";
import "./movieList.css";
import { BiCameraMovie } from "react-icons/bi";
import Swal from "sweetalert2";

const MovieList = () => {
  const savedMovie = useSelector((state) => state.movieSlice);
  const dispatch = useDispatch();
  const handeilDelete = (m) => {
    Swal.fire({
      title: `Do You Want To Delete`,
      showCancelButton: true,
    }).then((data) => {
      console.log(data);
      if (data.isConfirmed) {
        dispatch(deleteMovie(m));
      }
    });
  };
  const handailDeleteAilMovie = (m) => {
    Swal.fire({
      title: `Do You Want To Delete All Movies`,
      showCancelButton: true,
    }).then((data) => {
      console.log(data);
      if (data.isConfirmed) {
        dispatch(clear(m));
      }
    });
  };

  return (
    <div className="pt-4 movie-list-content">
      <Container>
        {savedMovie.length > 0 ? (
          <Row>
            <div className="text-end">
              <a
                className="btn btn-danger my-3 ms-auto"
                onClick={() => handailDeleteAilMovie()}
              >
                Remove all
              </a>
            </div>
            {savedMovie.map((m) => (
              <Col
                className="col-12 my-2 col-sm-6  col-lg-4 col-xl-3 card-movie-live"
                key={m.id}
              >
                <Card>
                  <Card.Img
                  className="img-live"
                    variant="bottom"
                    src={IMG_URL + m.poster_path}
                    alt={m.title}
                    loading="lazy"
                  />
                  <Card.Body>
                    <Card.Title>{m.title.slice(0,15) + "..."}</Card.Title>
                    <div className="d-flex justify-content-between">
                      <Button variant="primary" onClick={() => handeilDelete(m)}>
                        Remove
                      </Button>
                      <a
                        className="btn btn-danger text-white fw-bold  "
                        href={"https://www.imdb.com/title/" + m.id}
                        target="_blank"
                        rel="noreferrer"
                      >
                        watched
                        <BiCameraMovie className="ms-2 fs-4" />
                      </a>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        ) : (
          <Row>
            <Col className="text-center py-4 vh-100">
              <p className="fs-3  text-white">There are no movies</p>
            </Col>
          </Row>
        )}
      </Container>
    </div>
  );
};

export default MovieList;
