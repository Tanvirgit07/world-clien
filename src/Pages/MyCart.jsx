import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { LuArrowBigUpDash } from "react-icons/lu";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";

const MyCart = () => {
  const { user } = useContext(AuthContext);
  const [cartData, setCartData] = useState([]);
  // console.log(user)
  useEffect(() => {
    fetch(`http://localhost:5000/myCart/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCartData(data);
      });
  }, [user]);
  return (
    <div className="mt-14 mb-36">
      <h1 className="text-center my-6">This is my cart</h1>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>No:</th>
              <th>Country Name</th>
              <th>Spot Name</th>
              <th>Location</th>
              <th>user Email</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {cartData.map((singleCart, index) => (
              <tr className="" key={singleCart._id}>
                <th>{index + 1}</th>
                <td>{singleCart.country_name}</td>
                <td>{singleCart.spot_name}</td>
                <td>{singleCart.location}</td>
                <td>{singleCart.email}</td>
                <Link to={`/update/${singleCart._id}`}>
                <td className="text-2xl"><LuArrowBigUpDash /></td>
                </Link>
                <td className="text-2xl"><MdDelete /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyCart;
