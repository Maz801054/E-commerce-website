import React from "react";
import { useState, useEffect } from "react";
import "../App.css";
import { Link } from "react-router-dom";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
        console.log(filter);
      }
      return () => {
        componentMounted = false;
      };
    };
    getProducts();
  }, []);

  const Loading = () => {
    return <>Loading...</>;
  };

  const filterProduct = (cat) => {
    const updatedList = data.filter((x) => x.category === cat);
    setFilter(updatedList);
  };

  const ShowProducts = () => {
    return (
      <>
        <div className="d-flex justify-content-center">
          <button
            className="btn btn-outline-dark ms-3 me-3 mb-5"
            type="submit"
            onClick={() => setFilter(data)}
          >
            All
          </button>
          <button
            className="btn btn-outline-dark ms-3 me-3 mb-5"
            type="submit"
            onClick={() => filterProduct("men's clothing")}
          >
            Men's Clothe
          </button>
          <button
            className="btn btn-outline-dark ms-3 me-3 mb-5"
            type="submit"
            onClick={() => filterProduct("women's clothing")}
          >
            Women's Clothing
          </button>
          <button
            className="btn btn-outline-dark ms-3 me-3 mb-5"
            type="submit"
            onClick={() => filterProduct("jewelery")}
          >
            Jewelery
          </button>
          <button
            className="btn btn-outline-dark ms-3 me-3 mb-5"
            type="submit"
            onClick={() => filterProduct("electronics")}
          >
            Electronic
          </button>
        </div>
        {filter.map((product) => {
          return (
            <>
              <div className="col-md-3 container mb-3">
                <div class="card p-4 mb-5" key={product.id}>
                  <img
                    src={product.image}
                    class="card-img-top imgSetup"
                    alt="..."
                  />
                  <div class="card-body text-center">
                    <h5 class="card-title">{product.title.substring(0, 20)}</h5>
                    <p class="card-text">${product.price}</p>
                    <Link to={`/products/${product.id}`} class="btn btn-dark">
                      Buy Now
                    </Link>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </>
    );
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 text-center mt-5 mb-5">
          <h1>Letest Products</h1>
          <hr />
        </div>
      </div>
      <div className="row justify-content-center">
        {loading ? <Loading /> : <ShowProducts />}
      </div>
    </div>
  );
};

export default Products;
