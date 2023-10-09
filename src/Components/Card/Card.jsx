import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const Card = ({ service }) => {
  const { id, image, name, price, shortDescription } = service;

  return (
    <div className="space-y-3 shadow-md p-3 border-2  rounded-lg md:border-0 md:hover:border-2 transition duration-500 border-[#ef95ba]">
      <img src={image} alt="" />
      <h2 className="text-xl md:text-3xl font-medium">{name}</h2>
      <h3 className="text-base md:text-xl text-gray-500">
        Starts From: <span className="font-semibold text-black">{price}</span>
      </h3>
      <p className="w-full md:w-5/6 font-normal md:font-medium pb-2">
        {shortDescription}
      </p>
      <Link to={`/service-details/${id}`}>
        <button className="bg-[#FD60A2] px-4 py-2 text-lg text-white rounded-lg float-left md:float-right hover:border-2 hover:border-[#FD60A2] hover:bg-transparent hover:text-black">
          Booking <BsArrowRight className="inline text-2xl"></BsArrowRight>
        </button>
      </Link>
    </div>
  );
};

export default Card;
