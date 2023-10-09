import EventsCard from "./EventsCard";

const Events = () => {
  return (
    <div>
      <h1 className="text-4xl text-center my-5">Upcoming Events</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-5 gap-2 md:gap-5">
        <EventsCard
          props={{
            title: "Engagement Party",
            time: "15 Oct, 2023 , 03 PM - 11 PM",
            place: "Hotel Westin, Dhaka",
            img: "https://i.ibb.co/3W06X0D/ca-2.jpg",
          }}
        ></EventsCard>
        <EventsCard
          props={{
            title: "Annoprashon",
            time: "17 Oct, 2023 , 07 AM - 11 PM",
            place: "Senakunjo, Mirpur, Dhaka",
            img: "https://i.ibb.co/pWdY449/ca-1.jpg",
          }}
        ></EventsCard>
        <EventsCard
          props={{
            title: "Wedding",
            time: "15 Oct, 2023 , 03 PM - 11 PM",
            place: "Hotel Grand Park, Barishal",
            img: "https://i.ibb.co/wJJXttV/ca-3.jpg",
          }}
        ></EventsCard>
        <EventsCard
          props={{
            title: "Birthday Party",
            time: "15 Oct, 2023 , 03 PM - 11 PM",
            place: "Hotel Westin, Dhaka",
            img: "https://i.ibb.co/C28LLdd/ca-4.jpg",
          }}
        ></EventsCard>
        
      </div>
    </div>
  );
};

export default Events;
