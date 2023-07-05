import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box } from "@mui/system";
import "./medicine.css";
import Button from "react-bootstrap/Button";
import Sidebar from "../../Sidebar.tsx";
import Cart from "./Cart";
import {FaShoppingCart} from "react-icons/fa"
const Medicine = () => {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    const fetchMedicine = async () => {
      const res = await axios.get(`http://localhost:8000/medicines?q=${query}`);
      console.log(res);
      setData(res.data);
    };
    fetchMedicine();
  }, [query]);

  const addToCart = (medicine) => {
    setCart((prevCart) => [...prevCart, medicine]);
  };

  const toggleCart = () => {
    setShowCart((prevShowCart) => !prevShowCart);
  };

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, mt: 13, ml: 1 }}>
          <div className="whole">
		  <div className="cart-icon" onClick={toggleCart}>
			 <FaShoppingCart></FaShoppingCart>
			 <span>  View Cart </span>
            </div>
            {showCart && <Cart cart={cart} />}
            <h1 className="heading">Buy Medicine Now at Lowest Price</h1>
            <input
              type="text"
              placeholder="Enter Medicine Name."
              className="search"
              onChange={(e) => setQuery(e.target.value)}
            />

            <div className="medicines">
              {data.map((medicine) => (
                <div className="medicine" key={medicine.idmedicine}>
                  {medicine.cover && (
                    <img src={medicine.cover} className="img123" alt="" />
                  )}
                  <h4>{medicine.title}</h4>
                  <p className="title">{medicine.desc}</p>
                  <span>Price: ₹{medicine.price}</span>
                  <br />
                  <Button
                    variant="outline-primary"
                    type="submit"
                    style={{
                      color: "#FFFFFF",
                      background: "#57B7CE",
                      width: "150px",
                      borderColor: "#ffffff",
                      height: "35px",
                      marginTop: "10px",
					  marginLeft:"25px"
                    }}
                    onClick={() => addToCart(medicine)}
                  >
                    <b>Add to Cart</b>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </Box>
      </Box>
    </>
  );
};

export default Medicine;
