/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import  Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "./card.css";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { MdVisibility } from "react-icons/md";
import { IMG_URL } from "../../images/Url";
import Live from "../liveMovies/Live";

const Card = ({ mo }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {isLoading ? (
            <div className="cards col-12 col-md-5 col-lg-3 m-1 p-0">
        <SkeletonTheme  color="#202020" highlightColor="#444">
              <Skeleton height={300} duration={4} />
          </SkeletonTheme>
        </div>
      ) : (
        <div className="cards col-12 col-md-5 col-lg-3 m-1 p-0">
          <Link key={mo.id}>
            
              <img
                className="cards-image"
                src={IMG_URL + mo.poster_path}
                alt={mo.title}
                width={250}
                height={400}
              />
            
            <div className="card-overlay p-1 d-flex align-items-center justify-content-between">
              <span>
                <Link className=" text-white" to={`/movie/${mo.id}`}>
                  <MdVisibility className="fs-3 " />
                </Link>
                <Live mo={mo} />
              </span>
              <span className="d-flex align-items-center">
                {mo.vote_average.toFixed(1)}
                <FaStar className="ms-2 icon-star" />
              </span>
            </div>
          </Link>
        </div>
      )}
    </>
  );
};

export default Card;
