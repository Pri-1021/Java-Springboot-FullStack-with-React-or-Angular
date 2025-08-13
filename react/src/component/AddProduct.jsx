import React, { useState } from "react";
import productService from "../service/productservice";


const AddProduct = () => {
  const [product, setProduct] = useState({
    productName: "",
    description: "",
    price: "",
    status: "",
  });

  const [msg, setMsg] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setProduct({ ...product, [e.target.name]: value });
  };

  const ProductRegister = (e) => {
    e.preventDefault();

    productService
      .saveProduct(product)
      .then((res) => {
        console.log("Product Added Successfully");
        setMsg("Product Added Successfully");
        setProduct({
          productName: "",
          description: "",
          price: "",
          status: "",
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="form-container">
      <div className="form-card">
        <h2 className="form-title">Add Product</h2>
        {msg && <p className="success-msg">{msg}</p>}

        <form onSubmit={ProductRegister}>
          <label>Product Name</label>
          <input
            type="text"
            name="productName"
            onChange={handleChange}
            value={product.productName}
          />

          <label>Description</label>
          <input
            type="text"
            name="description"
            onChange={handleChange}
            value={product.description}
          />

          <label>Price</label>
          <input
            type="text"
            name="price"
            onChange={handleChange}
            value={product.price}
          />

          <label>Status</label>
          <input
            type="text"
            name="status"
            onChange={handleChange}
            value={product.status}
          />

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
