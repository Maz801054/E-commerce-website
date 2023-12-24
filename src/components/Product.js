import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "../App.css";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      setProduct(await response.json());
      setLoading(false);
    };
    getProduct();
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="text-center mt-5 mb-3">Loading...</div>
      </>
    );
  };

  const ShowProduct = () => {
    return (
      <>
        <div className="container row">
          <div className="col-md-6">
            <img src={product.image} alt={product.title} className="Imgid" />
          </div>
          <div className="col-md-6 p-5">
            <h4 className="Fset">{product.category}</h4>
            <h1 className="mt-3">{product.title}</h1>
            <p className="mt-3 fs-4 fw-bold">
              Rating {product.rating && product.rating.rate}
              <i className="fa-solid fa-star ms-3"></i>
            </p>
            <h1 className="fw-bold mt-3 mb-3"> $ {product.price} </h1>
            <h5>{product.description} </h5>
            <Link
              to={`/card/${product.id}`}
              type="button"
              className="btn btn-dark mt-3"
            >
              Add to Cart
            </Link>
            <Link to="" type="button" className="btn btn-dark mt-3 ms-3">
              Go to Cart
            </Link>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="container">
      <div className="row">{loading ? <Loading /> : <ShowProduct />}</div>
    </div>
  );
};

export default Product;
