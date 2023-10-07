import topper from'../../assets/topper.webp';
const Divider = () => {
  return (
    <div className="m-5 ">
      <img src={topper} alt="" className='mx-auto'/>
      <h1 className='w-2/4 text-center mx-auto font-semibold text-6xl pt-2'>Let’s Plan Your Next Event Together</h1>
    </div>
  );
};

export default Divider;
