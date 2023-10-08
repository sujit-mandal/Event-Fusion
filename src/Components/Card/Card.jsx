import { BsArrowRight } from "react-icons/bs";
import { useNavigate, useParams } from "react-router-dom";

const Card = ({ service }) => {
  const navigate = useNavigate();
  const {id, image, name, price, shortDescription } = service;
  const handleClick=()=>{
    navigate(`/service-details/${id}`)
  }


  

  return (
    <div className="space-y-3 shadow-md p-3 hover:p-2 rounded-lg hover:border-2 transition duration-500 border-[#ef95ba]">
      <img src={image} alt="" />
      <h2 className="text-3xl font-medium">{name}</h2>
      <h3 className="text-xl text-gray-500">Starts From: <span className="font-semibold text-black">{price}</span></h3>
      <p className="w-5/6 font-medium">{shortDescription}</p>
      <button onClick={handleClick} className="bg-[#FD60A2] px-4 py-2 text-lg text-white rounded-lg float-right hover:border-2 hover:border-[#FD60A2] hover:bg-transparent hover:text-black">
        Booking <BsArrowRight className="inline text-2xl"></BsArrowRight>{" "}
      </button>
    </div>
  );
};

export default Card;
