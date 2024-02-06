

import React, { useEffect, useRef, useState } from "react";
import { useCart, useDispatchCart } from "../components/ContextReducer";

export default function Card(props) {
  const priceRef = useRef();

  let dispatch = useDispatchCart();
  let data = useCart();

  const [qty, setQty] = useState(1);
  const [size, setSize] = useState(Object.keys(props.options)[0] || ""); // Set initial size
  const options = props.options;
  const priceOptions = Object.keys(options);

  const handleAddToCard = async () => {
    let food = [];

    for (const item of data) {
      if (item.id === props.foodItems._id) {
        food = item;
        break;
      }
    }




    if (food !== []) {
      if (food.size === size) {
        await dispatch({
                        type: "UPDATE",
                        id: props.foodItems._id,
                        price: finalPrice,
                        qty: qty,
        });
        return;
      } else if (food.size !== size) {
        await dispatch({
                        type: "ADD",
                        id: props.foodItems._id,
                        name: props.foodItems.name,
                        price: finalPrice, // Use finalPrice directly
                        qty: qty,
                        size: size,
        });
        return;
      }
      return;
    }

    await dispatch({
                    type: "ADD",
                    id: props.foodItems._id,
                    name: props.foodItems.name,
                    price: finalPrice, // Use finalPrice directly
                    qty: qty,
                    size: size,
    });
  };

  useEffect(() => {
    console.log(data); // Log the cart data when 'data' changes
  }, [data]);

  let finalPrice = size ? qty * parseInt(options[size]) : 0; // Check if size is not empty

  useEffect(() => {
    setSize((prevSize) => {
      // Ensure that the current size is a valid option, if not, set it to the first option
      return priceOptions.includes(prevSize) ? prevSize : priceOptions[0];
    });
  }, [priceOptions]);

  return (
    <div className="">
      <div className="card mt-3 " style={{ width: "18rem", maxHeight: "360" }}>
        <img
          src={props.foodItems.img}
          className="card-img-top "
          alt="..."
          style={{ height: "120px", objectFit: "fill" }}
        />

        <div className="card-body">
          <h5 className="card-title">{props.foodItems.name}</h5>
          <div className="container  w-100 ">
            <select
              className="container m-2 w-50 h-100 bg-success rounded"
              onChange={(e) => setQty(e.target.value)}
              value={qty}
            >
              {Array.from(Array(6), (e, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>

            <select
              className="container m-2 w-50 h-100 bg-success rounded "
              ref={priceRef}
              onChange={(e) => setSize(e.target.value)}
              value={size}
            >
              {priceOptions.map((data) => (
                <option key={data} value={data}>
                  {data}
                </option>
              ))}
            </select>

            <div className="d-inline h-100 fs-5">Rs.{finalPrice}/-</div>
          </div>
          <hr />

          <button
            className={`btn btn-success justify-center ms-2`}
            onClick={handleAddToCard}
          >
            Add to Card
          </button>
        </div>
      </div>
    </div>
  );
}
