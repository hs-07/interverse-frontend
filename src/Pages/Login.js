// import "../styles/login.css";
import { Button } from "@mui/material";
import { useAppContext } from "../utils/appContext";
import { useNavigate } from "react-router-dom";
import logo1 from "../assests/logo1.png";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineApple } from "react-icons/ai";
import { RiTwitterLine } from "react-icons/ri";
import logotext from "../assests/logo-text.svg";
import logoicon from "../assests/logo-icon.svg";

const Login = () => {
  const { login } = useAppContext();
  return (
    <div className="h-[90vh] bg-[#0B0B0F] w-full flex justify-center py-16">
      <div className="w-full md:w-1/3 flex flex-col md:border-2 md:border-[#181818] p-8 rounded-2xl justify-around">
        <div className="flex w-full justify-center">
          <h1 className="text-3xl text-white font-bold ">Login</h1>
          {/* <img src={logoicon} alt="" className="w-12" /> */}
          {/* <img src={logotext} alt="" className="w-48" /> */}
        </div>
        <div className="w-full flex flex-col gap-8">
          <button
            className="rounded-3xl w-full bg-[#1C1C1C] p-2 md:p-3 items-center flex justify-center gap-4 hover:scale-105 transition duration-300 ease-in-out active:scale-95"
            onClick={() => login()}
          >
            <FcGoogle className="text-3xl" />
            <span className="text-white font-semibold">Login with Google</span>
          </button>
          <button className="rounded-3xl w-full bg-[#1C1C1C] p-2 md:p-3 items-center flex justify-center gap-4 hover:scale-105 transition duration-300 ease-in-out active:scale-95">
            <AiOutlineApple className="text-3xl text-white" />
            <span className="text-white font-semibold">Login with Apple</span>
          </button>
          <button className="rounded-3xl w-full bg-[#1C1C1C] p-2 md:p-3 items-center flex justify-center gap-4 hover:scale-105 transition duration-300 ease-in-out active:scale-95">
            <RiTwitterLine className="text-3xl text-white" />
            <span className="text-white font-semibold">Login with Twitter</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
