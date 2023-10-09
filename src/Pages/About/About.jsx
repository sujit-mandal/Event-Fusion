const About = () => {
  return (
    <div className=" lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4 md:h-[83vh]">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="w-full lg:w-5/12 flex flex-col justify-center">
          <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-black pb-4">
            About Us
          </h1>
          <p className="font-medium font text-lg text-justify leading-6 text-black">
            At <span className="text-primary-color">Event Fusion</span>, we are
            passionate about turning your special moments into unforgettable
            memories. With a dedicated team of event planning experts, we
            specialize in curating and orchestrating a wide range of social
            events, including engagements, birthdays, weddings, baby showers,
            and more. Our mission is to make event planning a stress-free and
            delightful experience for our clients. We understand that each event
            is unique and deserves personal attention to detail. That's why we
            offer a diverse selection of event categories, ensuring that you
            find the perfect fit for your occasion. What sets us apart is our
            commitment to excellence.
          </p>
        </div>
        <div className="w-full lg:w-8/12">
          <img
            className="w-full h-auto lg:h-full rounded-lg"
            src="https://i.ibb.co/DtdZn1T/about.jpg"
            alt="A group of People"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
