import ServicesCard from "./ServicesCard";
import { FaRegHandshake,FaGlassCheers, FaBirthdayCake } from "react-icons/fa";
import { BsBalloon } from "react-icons/bs";
import { BiPhoneCall } from "react-icons/bi";
import { HiLightBulb } from "react-icons/hi";

const Services = () => {
  return (
    <div className="grid grid-cols-1 px-2 md:px-10 lg:px-2 lg:grid-cols-3  gap-5 row-span-2 my-20">
      <div className="flex flex-col text-center lg:text-left justify-center">
        <p className="font-mono tracking-widest pb-3 text-xl">We ARE EVENT FUSION</p>
        <h1 className="text-black text-5xl font-semibold pb-8">
          <span className="font-bold">No. 1</span> Social Event Management.
        </h1>
        <p className="pb-5">
          "Event Fusion: Your Ultimate Destination for Seamless Social Event
          Planning and Management. Create, Organize, and Elevate Your Events
          with Ease."
        </p>
        <button className="bg-gradient-to-r w-fit mx-auto from-[#ea95b9] to-[#FD60A2] py-2 px-4 rounded-xl text-white ">About Us</button>
      </div>
      <div className="col-auto md:col-span-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <ServicesCard
          text={{
            title: "Friendly Team",
            des: "More than 100 teammates.",
            br: "border-[1px] border-gray-400 border-l-0 border-t-0 border-r-0 md:border-r-[1px]",
          }}
          icon={<FaRegHandshake />}
        />
        <ServicesCard
          text={{ title: "Perfect Venues", des: "We choose comfortable venues.",
          br: "border-[1px] border-gray-400 border-l-0 border-t-0 border-r-0 lg:border-r-[1px]" }}
          icon={<BsBalloon />}
        />
        <ServicesCard
          text={{ title: "Unique Scenario", des: "We think out of the box.",
          br: "border-[1px] border-gray-400 border-l-0 border-t-0 border-r-0 md:border-r-[1px] lg:border-r-0 " }}
          icon={<FaGlassCheers />}
        />
        <ServicesCard
          text={{ title: "Unforgettable Time", des: "We make perfect event.",
          br: "border-[1px] border-gray-400 border-l-0 border-t-0 border-r-0 lg:border-r-[1px]" }}
          icon={<FaBirthdayCake />}
        />
        <ServicesCard
          text={{ title: "24/7 Hours Support", des: "Anytime anywhere.",
          br: "border-[1px] border-gray-400 border-l-0 border-t-0 border-r-0 md:border-r-[1px]" }}
          icon={<BiPhoneCall />}
        />
        <ServicesCard
          text={{ title: "Brilliant Idea", des: "We have million idea.",
          br: "border-0 border-gray-400 md:border-b-[1px]" }}
          icon={<HiLightBulb />}
        />
      </div>
    </div>
  );
};

export default Services;
