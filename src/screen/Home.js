// import React, { useEffect, useState } from "react";
// import NavBar from "../components/NavBar";
// import Footer from "../components/Footer";
// import Card from "../components/Card";


// export default function Home() {
//   const [search, setSearch] = useState("");

//   const [foodCat, setFoodCat] = useState([]);
//   const [foodItem, setFoodItem] = useState([]);

//   const loadData = async () => {
//     try {
//       let response = await fetch("http://localhost:5000/api/foodData", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         credentials: "include", // Add this line
//       });

//       response = await response.json();

//       //   console.log(response[0], response[1]);
//       setFoodItem(response[0]);
//       setFoodCat(response[1]);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   useEffect(() => {
//     loadData();
//   }, []);

//   return (
//     <div>
//       <div>
//         <NavBar></NavBar>
//       </div>
//       <div>
//         {/* <Carousel></Carousel> */}

//         <div>
//           <div
//             id="carouselExampleFade"
//             class="carousel slide carousel-fade"
//             data-bs-ride="carousel"
//             style={{ objectFit: "contain !important" }}
//           >
//             <div class="carousel-inner" id="carousel">
//               <div class="carousel-caption " style={{ zIndex: "10" }}>
//                 <div class="d-flex justify-content-center">
//                   <input
//                     class="form-control me-2"
//                     type="search"
//                     placeholder="Search"
//                     aria-label="Search"
//                     value={search}
//                     onChange={(e) => {
//                       setSearch(e.target.value);
//                     }}
//                   />
//                   {/* <button class="btn btn-outline-success text-white" type="submit">Search</button> */}
//                 </div>
//               </div>

//               <div class="carousel-item active">
//                 <img
//                   src="https://source.unsplash.com/random/300×300/?burger"
//                   class="d-block w-100"
//                   alt="..."
//                   style={{ filter: "brightness(30%)" }}
//                 />
//               </div>
//               <div class="carousel-item">
//                 <img
//                   src="https://source.unsplash.com/random/300×300/?sea"
//                   class="d-block w-100"
//                   alt="..."
//                   style={{ filter: "brightness(30%)" }}
//                 />
//               </div>
//               <div class="carousel-item">
//                 <img
//                   src="https://source.unsplash.com/random/960×700/?pastry"
//                   class="d-block w-100"
//                   alt="..."
//                   style={{ filter: "brightness(30%)" }}
//                 />
//               </div>
//             </div>
//             <button
//               class="carousel-control-prev"
//               type="button"
//               data-bs-target="#carouselExampleFade"
//               data-bs-slide="prev"
//             >
//               <span
//                 class="carousel-control-prev-icon"
//                 aria-hidden="true"
//               ></span>
//               <span class="visually-hidden">Previous</span>
//             </button>
//             <button
//               class="carousel-control-next"
//               type="button"
//               data-bs-target="#carouselExampleFade"
//               data-bs-slide="next"
//             >
//               <span
//                 class="carousel-control-next-icon"
//                 aria-hidden="true"
//               ></span>
//               <span class="visually-hidden">Next</span>
//             </button>
//           </div>
//         </div>
//       </div>

//       <div className="container">
//         {foodCat !== []
//           ? foodCat.map((data) => {
//               return (
//                 <div className="row mb-3">
//                   <div className="fs-3 m-3" key={data._id}>
//                     {" "}
//                     {data.CategoryName}
//                   </div>

//                   <hr></hr>
//                   {foodItem !== [] ? (
//   foodItem
//     .filter((item) => 
//       (item.CategoryName === data.CategoryName) &&
//       (item.name.toLowerCase().includes(search.toLowerCase()))
//     )
//     .map((filterItems) => {
//       return (
//         <div
//           className="col-12 col-md-6 col-lg-3"
//           key={filterItems._id}
//         >
//           <Card
//             foodItems = {filterItems}
//             options={filterItems.options[0]}
            
//           />
//         </div>
//       );
//     })
// ) : (
//   <div>No such data found</div>
// )}
//                 </div>
//               );
//             })
//           : " "}
//       </div>
//       <div>
//         <Footer></Footer>
//       </div>
//     </div>
//   );
// }








import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Card from "../components/Card";

export default function Home() {
  const [search, setSearch] = useState("");
  const [foodCat, setFoodCat] = useState([]);
  const [foodItem, setFoodItem] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/foodData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const data = await response.json();
      setFoodItem(data[0]);
      setFoodCat(data[1]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const filteredItems = foodItem.filter(
    (item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.CategoryName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <NavBar />
      {foodCat.length > 0 && (
        <div>
          <div
            id="carouselExampleFade"
            className="carousel slide carousel-fade"
            data-bs-ride="carousel"
            style={{ objectFit: "contain !important" }}
          >
            <div className="carousel-inner" id="carousel">
              <div className="carousel-caption " style={{ zIndex: "10" }}>
                <div className="d-flex justify-content-center">
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    value={search}
                    onChange={(e) => {
                      setSearch(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="carousel-item active">
                <img
                  src="https://source.unsplash.com/random/300×300/?burger"
                  className="d-block w-100"
                  alt="..."
                  style={{ filter: "brightness(30%)" }}
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://source.unsplash.com/random/300×300/?sea"
                  className="d-block w-100"
                  alt="..."
                  style={{ filter: "brightness(30%)" }}
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://source.unsplash.com/random/960×700/?pastry"
                  className="d-block w-100"
                  alt="..."
                  style={{ filter: "brightness(30%)" }}
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleFade"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleFade"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      )}
      <div className="container">
        {foodCat.map((data) => (
          <div className="row mb-3" key={data._id}>
            <div className="fs-3 m-3">{data.CategoryName}</div>
            <hr />
            {filteredItems.length > 0 ? (
              filteredItems
                .filter((item) => item.CategoryName === data.CategoryName)
                .map((filterItems) => (
                  <div className="col-12 col-md-6 col-lg-3" key={filterItems._id}>
                    <Card foodItems={filterItems} options={filterItems.options[0]} />
                  </div>
                ))
            ) : (
              <div>No such data found</div>
            )}
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}








