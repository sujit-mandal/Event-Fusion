import { useLoaderData } from "react-router-dom";
import Card from "../../Components/Card/Card";
import Banner from "../../Components/Header/Banner";
import Divider from "../../Components/Divider/Divider";
import Services from "../../Components/Services/Services";
import Testimonial from "../../Components/Testimonial/Testimonial";

const Home = () => {
  const services = useLoaderData();
  console.log(services);

  return (
    <div>
      <Banner />
      <Divider></Divider>
      <div className="text-center pt-2">
        <h1 className="text-2xl md:text-3xl font-medium ">
          <span className="pr-2 text-[#FD60A2]">Event Fusion</span>Services
        </h1>
        <p className="px-1 md:px-0 py-2 text-lg font-medium">
          We make your events smart & impactful by personalized event management
          services.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-3 gap-5 mt-5">
        {services.map((service) => (
          <Card key={service.id} service={service}></Card>
        ))}
      </div>
      <Services></Services>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
