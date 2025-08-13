import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import productService from "../service/productservice";


const EditProduct = () => {
  const [product, setProduct] = useState({
    id: "",
    productName: "",
    description: "",
    price: "",
    status: "",
  });

  const navigate = useNavigate();
  const { id } = useParams();
  const [msg, setMsg] = useState("");

  useEffect(() => {
    productService
      .getProductById(id)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const handleChange = (e) => {
    const value = e.target.value;
    setProduct({ ...product, [e.target.name]: value });
  };

  const ProductUpdate = (e) => {
    e.preventDefault();

    productService
      .editProduct(product)
      .then(() => {
        setMsg("Product Updated Successfully");
        setTimeout(() => navigate("/"), 1000);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="form-container">
      <div className="form-card">
        <h2 className="form-title">Edit Product</h2>
        {msg && <p className="success-msg">{msg}</p>}

        <form onSubmit={ProductUpdate}>
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

          <button type="submit">Update</button>
        </form>
      </div>
    </div>
  );
};

export default EditProduct;
