import { useCart, useDispatchCart } from "../components/ContextReducer";
import trash from '../images/trash.png'
export default function Cart() {
  const data = useCart();
  const dispatch = useDispatchCart();

  if (data.length === 0) {
    return (
      <div>
        <div className="m-5 w-100 text-center fs-3">The Cart is Empty</div>
      </div>
    );
  }

  let totalPrice = data.reduce((total, food) => total + food.price, 0);
  return (
    <div>
      <div className=" conatiner m-auto mt-5 table-responsive table-responsive-sm table-responsive-md ">
        <table className="table table-hover">
          <thead className="text-success fs-4 ">
            <tr>
              <th className="col">#</th>
              <th className="col">Name</th>
              <th className="col">Quantity</th>
              <th className="col">Option</th>
              <th className="col">Amount</th>
              <th className="col">#</th>
            </tr>
          </thead>
          <tbody>
            {data.map((food, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{food.name}</td>
                <td>{food.qty}</td>
                <td>{food.size}</td>
                <td>{food.price}</td>
                <td>
                  <button type="button" className="btn p-0 ">
                    <img
                      src={trash}
                      alt="Delete"
                      onClick={() => {
                        dispatch({type:"REMOVE",index:index})
                      }}
                    />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div>
          <h1 className="fs-2">Total Price: {totalPrice}/-</h1>
        </div>
        <div>
          <button className="btn bg-success mt-5">Check Out</button>
        </div>
      </div>
    </div>
  );
}
