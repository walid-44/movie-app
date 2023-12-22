import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { detailMovies } from "../../rtk/slices/detail-movie";
import { useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { BiCameraMovie } from "react-icons/bi";
import { FiExternalLink } from "react-icons/fi";
import "./detail.css";
import { IMG_URL } from "../../images/Url";
import { Container } from "react-bootstrap";
const Detail = () => {
  const { id } = useParams();
  const movieDetail = useSelector((state) => state.movieDetail);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(detailMovies(id));
  }, [dispatch, id]); 

  return (
    <div className=" details position-relative ">
      <div className="back-detail w-100 h-100">
        <img
        className="w-100 h-100"
          src={ IMG_URL+ movieDetail.backdrop_path}
          alt={movieDetail.title}
          loading="lazy"
        />
      </div>
      <div className="detail-overlay d-flex align-items-center">
        <Container>
          <div className="row pt-3 pt-lg-0 ">
            <div className="detail-img d-none d-md-block col-lg-3 col-md-5 col-4 p-0 ms-3 ">
              <img
                src={ IMG_URL + movieDetail.poster_path}
                alt={movieDetail.title}
                loading="lazy"
              />
            </div>
            <div className="detail-data col-lg-8 col-md-10 align-self-center mt-lg-0 mt-5 px-4 ">
              <h2 className="detail-title">{movieDetail.title}</h2>
              <div className="detail-vote d-flex mb-2 ">
                <span className="d-flex justify-content-center align-items-center">
                  {movieDetail.vote_average}
                  <FaStar />
                </span>
                <span className="ms-3">({movieDetail.vote_count} )votes</span>
              </div>
              <div className="detail-time my-3">({movieDetail.runtime}) mins</div>
              <div className="detail-date">
                Release date : {movieDetail.release_date}
              </div>
              <div className="detail-text pt-4">
                <h3>Overview</h3>
                <p>{movieDetail.overview}</p>
              </div>
          
              <div className="mt-3 buttons-details">
                {movieDetail && movieDetail.homepage && (
                  <a
                    className="btn btn-warning text-white fw-bold"
                    href={movieDetail.homepage}
                    target="_blank"
                    rel="noreferrer"
                  >
                    HomePage
                    <FiExternalLink className="ms-2 fs-4" />
                  </a>
                )}
          
                <a
                  className="btn btn-danger text-white fw-bold  "
                  href={"https://www.imdb.com/title/" + movieDetail.imdb_id}
                  target="_blank"
                  rel="noreferrer"
                >
                  watched
                  <BiCameraMovie className="ms-2 fs-4" />
                </a>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Detail;
