import { useLoaderData } from "react-router-dom";

const CountrySpot = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <h1>Tourist Spots of</h1>
      {data.map((singleData) => (
        <div key={singleData._id} className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              src={singleData.photo}
              alt="Shoes"
            />
          </figure>
          <div className=" p-4">
            <h2 className="card-title">Spot Name : {singleData.spot_name}</h2>
            <h2 className="card-title">Country Name : {singleData.country_name}</h2>
            <h2 className="card-title">Location : {singleData.location}</h2>
            <div className="flex justify-between my-5">
                <p> Seasonality : {singleData.seasonality}</p>
                <p> Average Cost : {singleData.cost}</p>
            </div>
            <p>{singleData.description}</p>
            <div className="card-actions justify-end mt-5">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CountrySpot;
