import { useContext } from "react";
import { IMG_CDN_URL } from "../config";
import UserContext from "../utils/UserContext";

const RestrauntCard = ({
    name,
    cuisines,
    cloudinaryImageId,
    lastMileTravelString,
  }) => {
    const {user}=useContext(UserContext);
    return (
      <div className="w-56 p-2 m-2 shadow-lg hover:bg-white bg-pink-50">
        <img
          src={IMG_CDN_URL
             +
            cloudinaryImageId
          }
        />
        <h2 className="font-bold text-xl">{name}</h2>
        <h3>{cuisines.join(", ")}</h3>
        <h4>{lastMileTravelString}</h4>
        <h5 className="font-bold">{user.name}</h5>
      </div>
    );
  };

  export default RestrauntCard;
  