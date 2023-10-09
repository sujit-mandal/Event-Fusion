import { MdLocationOn } from "react-icons/md";
import { AiOutlineCalendar } from "react-icons/ai";

const EventsCard = (props) => {
    const {img, title, time, place}=props.props;
  return (
    <div className="space-y-2 my-3  md:my-10 border-[#FD60A2] border-2 p-2 rounded-lg">
      <img
        src={img}
        alt={title} className="w-full"
      />
      <h3 className="text-3xl font-semibold">{title}</h3>
      <p className="text-lg flex items-center gap-2">
        <MdLocationOn></MdLocationOn>{time}
      </p>
      <p className="text-lg flex items-center gap-2">
        <AiOutlineCalendar></AiOutlineCalendar> {place}
      </p>
    </div>
  );
};

export default EventsCard;
