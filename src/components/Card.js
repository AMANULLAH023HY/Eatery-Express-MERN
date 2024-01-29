import React from 'react'

export default function Card() {
    return (
        <div>

            <div className="card mt-3" style={{ "width": "18rem", "maxHeight": "360" }}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ-JaRDhmQifNzOqTjZ83NBLUn0VKn-AmmaA&usqp=CAU" className="card-img-top " alt="..." />

                
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is important Text</p>
                    <div className='container  w-100 '>
                        <select className='container m-2 w-50 h-100 bg-success rounded'>
                            {Array.from(Array(6), (e, i) => {
                                return (
                                    <option key={i + 1} value={i + 1}>{i + 1}</option>
                                )

                            })}
                        </select>

                        <select className='container m-2 w-50  h-100 bg-success rounded '>
                            <option value="half">Half</option>
                            <option value="full">Full</option>
                        </select>

                        <div className='d-inline h-100 fs-5'>Total Price</div>


                    </div>

                </div>
            </div>
        </div>
    )
}
