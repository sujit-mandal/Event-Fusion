import { AiOutlineGoogle } from 'react-icons/ai';
const SocialLogin = () => {
  return (
    <div className="m-5">
      <div className="flex items-center gap-3 ">
        <hr className="w-1/2 border-[1px] border-primary-color" />
        <div className="">OR</div>
        <hr className="w-1/2 border-[1px] border-primary-color" />
      </div>
      <button className="bg-primary-color hover:bg-[#fb3688] flex items-center mx-auto mt-3 text-white text-lg py-3 w-fit px-4 rounded-3xl"><AiOutlineGoogle className='text-4xl'></AiOutlineGoogle>Login with Google</button>
    </div>
  );
};

export default SocialLogin;
