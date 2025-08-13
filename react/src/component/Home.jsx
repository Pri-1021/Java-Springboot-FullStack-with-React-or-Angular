import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import productService from "../service/productservice";


const Home = () => {
  const [productList, setProductList] = useState([]);
  const [msg, setMsg] = useState("");

  useEffect(() => {
    init();
  }, []);

  const init = () => {
    productService
      .getAllProduct()
      .then((res) => {
        setProductList(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteProduct = (id) => {
    productService
      .deleteProduct(id)
      .then(() => {
        setMsg("Deleted Successfully");
        init();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="home-container">
      <div className="home-card">
        <h2 className="form-title">All Product List</h2>
        {msg && <p className="success-msg">{msg}</p>}

        <table className="custom-table">
          <thead>
            <tr>
              <th>Sl No</th>
              <th>Product Name</th>
              <th>Description</th>
              <th>Price</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {productList.map((p, num) => (
              <tr key={p.id}>
                <td>{num + 1}</td>
                <td>{p.productName}</td>
                <td>{p.description}</td>
                <td>{p.price}</td>
                <td>{p.status}</td>
                <td>
                  <Link to={`editProduct/${p.id}`} className="action-btn edit-btn">
                    Edit
                  </Link>
                  <button
                    onClick={() => deleteProduct(p.id)}
                    className="action-btn delete-btn"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
