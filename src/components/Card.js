import React, { useEffect, useRef, useState } from "react";

import { useCart, useDispatchCart } from "../components/ContextReducer";

export default function Card(props) {

    const priceRef = useRef();

    let dispatch = useDispatchCart();
    let data = useCart();

    const [qty, setQty] = useState(1);
    const [size, setSize] = useState("");

    const options = props.options;
    const priceOptions = options ? Object.keys(options) : [];
    const handleAddToCard =async () => {
        await dispatch({type:"ADD",id:props.foodItems._id, name:props.foodItems.name, price:props.finalPrice, qty:qty, size:size} )
       await console.log(data)

    }

    let finalPrice = qty*parseInt(options[size]);

    useEffect(()=>{
        setSize(priceRef.current.value)
    },[]);

  return (
    <div className="">    
     <div className="card mt-3   " style={{ width: "18rem", maxHeight: "360",}}>
            <img
                src={props.foodItems.img}
                className="card-img-top "
                alt="..."
                style={{ height: "120px", objectFit: "fill" }}
            />

            <div className="card-body">
                <h5 className="card-title">{props.foodItems.name}</h5>
                <div className="container  w-100 ">
                    <select className="container m-2 w-50 h-100 bg-success rounded"  onChange= {(e)=>setQty(e.target.value)} >
                        {Array.from(Array(6), (e, i) => {
                            return (
                                <option key= {i + 1} value={i + 1}>
                                    {i + 1}
                                </option>
                            );
                        })}
                    </select>

                    <select className="container m-2 w-50  h-100 bg-success rounded  " 
                    ref={priceRef}  
                    onChange={(e)=> setSize(e.target.value)}>
                        {priceOptions.map((data) => {
                            return (
                                <option key={data} value={data}>
                                    {data}
                                </option>
                            );
                        })}
                    </select>

                    <div className="d-inline h-100 fs-5">
                    Rs.{finalPrice}/-
                    </div>
                </div>
                <hr/>

                <button className={`btn btn-success justify-center ms-2`} onClick={handleAddToCard}>Add to Card</button>
            </div>
      </div>
      </div>
 
    
  );
}











