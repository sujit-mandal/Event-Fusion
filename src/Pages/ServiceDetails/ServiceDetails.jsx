import { useLoaderData, useParams } from "react-router-dom";

const ServiceDetails = () => {
  const services = useLoaderData();
  const { id } = useParams();
  const findService = services.find((service) => service.id === id);
  return (
    <div className="pl-10 p-4 my-2 border-2 border-[#FD60A2]">
      <h1 className="text-center w-fit text-4xl font-semibold object-contain p-4 rounded-lg m-10 border-2 border-[#FD60A2]">
        Package Details
      </h1>
      <h1 className="text-2xl font-semibold text-primary-text mt-2 mb-5 underline">
        {findService.name}:
      </h1>
      <h3 className="text-xl font-semibold">
        Estimate Budget: {findService.price}
      </h3>
      <p className="text-lg font-medium text-justify my-2">
        {findService.description}
      </p>
      <h5 className="text-4xl">Mostly Focus On:</h5>
      
      <ul className="list-disc pl-6 tex-2xl space-y-2 font-semibold">
        {findService.features.map((feature, index) => (
          <li key={index}>{feature.trim()}</li>
        ))}
      </ul>
      <button className="bg-gradient-to-r w-fit mx-auto from-[#ea95b9] to-[#FD60A2] py-2 px-4 rounded-xl text-white mt-5 mb-20">
        Confirm Booking
      </button>
    </div>
  );
};

export default ServiceDetails;
