import React from "react";
import img1 from "../Images/4028484.jpg";
import img2 from "../Images/free-psd-big-sale-youtube-thumbnail-design_634294-1799.jpg";
import img3 from "../Images/11750667_4810804.jpg";
import Products from "./Products";

const Home = () => {
  return (
    <div>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={img1}
              className="d-block w-100"
              style={{ height: "86vh" }}
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src={img2}
              className="d-block w-100"
              style={{ height: "86vh" }}
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src={img3}
              className="d-block w-100"
              style={{ height: "86vh" }}
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <Products />
    </div>
  );
};

export default Home;
