const TestimonialCard = ({ testimonial }) => {
  const { image, name, feedback } = testimonial;

  return (
    <div>
      <div className="relative shadow-md shadow-[#FD60A2] flex w-full max-w-[20rem] flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 p-4">
        <div className="mb-6 p-0">
          <p className="block font-sans text-black text-base h-44 leading-relaxed text-center">
            "{feedback}"
          </p>
        </div>

        <div className="flex items-center justify-around">
          <img
            src={image}
            alt={image}
            className="relative inline-block h-[58px] w-[58px] !rounded-full object-cover object-center"
          />
          <h5 className="block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            {name}
          </h5>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
