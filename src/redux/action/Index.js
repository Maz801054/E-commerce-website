// For add item to Cart

export const addCart = (Product) => {
  return {
    type: "ADDITEM",
    payload: Product,
  };
};

export const delCart = (Product) => {
  return {
    type: "DELITEM",
    payload: Product,
  };
};
