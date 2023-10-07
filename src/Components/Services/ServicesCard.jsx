const ServicesCard = ( props ) => {

  return <div className={`flex flex-col justify-center items-center py-3 px-5 ${props.text.br}`}><p className="text-6xl text-[#FD60A2] mb-6">{props.icon}</p>
  <p className="text-2xl font-semibold pb-2">{props.text.title}</p>
  <p className="text-gray-400">{props.text.des}</p>
  </div>
};

export default ServicesCard;
