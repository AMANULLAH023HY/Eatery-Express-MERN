import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Carousel from "../components/Carousel";

export default function Home() {
  const [foodCat, setFoodCat] = useState([]);
  const [foodItem, setFoodItem] = useState([]);

  const loadData = async () => {
    try {
      let response = await fetch("http://localhost:5000/api/foodData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include", // Add this line
      });

      response = await response.json();

      //   console.log(response[0], response[1]);
      setFoodItem(response[0]);
      setFoodCat(response[1]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
        <div>
            <div>
                <NavBar></NavBar>
            </div>
            <div>
                <Carousel></Carousel>
            </div>

            <div className="container">
            {
                foodCat !==[]
                ?foodCat.map((data)=>{ 
                    return(
                        <div className="row mb-3">                       
                         <div className="fs-3 m-3"
                          key={data._id}> {data.CategoryName}</div>

                          <hr></hr>
                          {
                            foodItem !==[]
                            ? foodItem.filter((item)=>item.CategoryName === data.CategoryName).map(filterItems=>{
                                return(
                                    <div className="col-12 col-md-6 col-lg-3" key={filterItems._id}>
                                        <Card
                                            foodName={filterItems.name}
                                            options={filterItems.options    }
                                            imgSrc={filterItems.img}
                                        />
                                    </div>

                                )
                            }):<div>No such data found</div>
                          }

                        </div>

                    )
            }):" "
            }
       
            </div>
            <div>
                <Footer></Footer>
            </div>
    </div>
  );
}
