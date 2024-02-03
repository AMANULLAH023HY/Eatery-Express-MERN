import React from "react";

export default function Card(props) {
 

  const options = props.option;
  const priceOptions = options ? Object.keys(options) : [];

  return (
    <div className="">    
     <div className="card mt-3  " style={{ width: "18rem", maxHeight: "360",}}>
            <img
                src={props.imgSrc}
                className="card-img-top "
                alt="..."
                style={{ height: "120px", objectFit: "fill" }}
            />

            <div className="card-body">
                <h5 className="card-title">{props.foodName}</h5>
                <div className="container  w-100 ">
                    <select className="container m-2 w-50 h-100 bg-success rounded">
                        {Array.from(Array(6), (e, i) => {
                            return (
                                <option key={i + 1} value={i + 1}>
                                    {i + 1}
                                </option>
                            );
                        })}
                    </select>

                    <select className="container m-2 w-50  h-100 bg-success rounded ">
                        {priceOptions.map((data) => {
                            return (
                                <option key={data} value={data}>
                                    {data}
                                </option>
                            );
                        })}
                    </select>

                    <div className="d-inline h-100 fs-5">Total Price</div>
                </div>
            </div>
      </div>
      </div>
 
    
  );
}
