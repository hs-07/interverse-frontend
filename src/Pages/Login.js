import { FcGoogle } from "react-icons/fc";
import { AiOutlineApple } from "react-icons/ai";
import { RiTwitterLine } from "react-icons/ri";

const Login = () => {
  return (
    <div className="h-screen bg-[#0B0B0F] w-full flex justify-center py-16">
      <div className="w-full md:w-1/3 flex flex-col md:border-2 md:border-[#181818] p-8 rounded-2xl justify-around max-h-[32rem]">
        <div className="flex w-full justify-center">
          <h1 className="text-3xl text-white font-bold ">Login</h1>
        </div>
        <div className="w-full flex flex-col gap-8">
          <button className="rounded-3xl w-full bg-[#1C1C1C] p-2 md:p-3 items-center flex justify-center gap-4 hover:scale-105 transition duration-300 ease-in-out active:scale-95">
            <FcGoogle className="text-3xl" />
            <span className="text-white font-semibold">Login with Google</span>
          </button>
          <button className="rounded-3xl w-full bg-[#1C1C1C] p-2 md:p-3 items-center flex justify-center gap-4 ">
            <AiOutlineApple className="text-3xl text-grey-300" />
            <button className="text-grey-300 font-semibold" disabled>
              Login with Apple
            </button>
          </button>
          <button className="rounded-3xl w-full bg-[#1C1C1C] p-2 md:p-3 items-center flex justify-center gap-4">
            <RiTwitterLine className="text-3xl text-grey-300" />
            <button className="text-grey-300 font-semibold" disabled>
              Login with Twitter
            </button>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
