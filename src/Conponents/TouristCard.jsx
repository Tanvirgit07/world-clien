import PropTypes from "prop-types";
const TouristCard = ({ singleAdd }) => {
  // console.log(singleAdd);
  const { photo,description,spot_name } = singleAdd;
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img
        className="h-[250px]"
          src={photo}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{spot_name}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">View Details page</button>
        </div>
      </div>
    </div>
  );
};

TouristCard.propTypes = {
  singleAdd: PropTypes.object,
};

export default TouristCard;
