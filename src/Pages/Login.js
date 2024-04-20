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

// function Login() {
//   const { login } = useAppContext();

//   return (
//     <div
//       style={{
//         backgroundColor: "#282828",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         height: "100vh",
//         fontSize: "24px",
//         color: "#4B6CC2",
//         fontFamily: "'Odibee Sans'",
//       }}
//     >
//       <div
//         style={{
//           borderRadius: "20px",
//           backgroundColor: "#181818",
//           border: "1px solid #181818",
//           boxSizing: "border-box",
//           width: "622px",
//           height: "628px",
//           overflow: "hidden",
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           justifyContent: "center",
//           padding: "20px",
//           gap: "20px",
//         }}
//       >
//         <div
//           style={{
//             width: "200px",
//             height: "46px",
//             overflow: "hidden",
//             flexShrink: "0",
//             display: "flex",
//             flexDirection: "row",
//             alignItems: "center",
//             justifyContent: "flex-start",
//             padding: "2px 0px",
//             boxSizing: "border-box",
//             textAlign: "center",
//             fontSize: "20px",
//             color: "#4B6CC2",
//             fontFamily: "'Odibee Sans'",
//           }}
//           //   onClick={() => logout()}
//         >
//           <div
//             style={{
//               position: "relative",
//               letterSpacing: "0.3px",
//               lineHeight: "100%",
//               display: "flex",
//               alignItems: "center",
//               width: "200px",
//               height: "35px",
//               flexShrink: "0",
//             }}
//           >
//             <div
//               style={{
//                 display: "flex",
//                 justifyContent: "center",
//                 alignItems: "center",
//                 width: "100%",
//               }}
//             >
//               <img
//                 src={logo1}
//                 alt="Logo"
//                 style={{ maxWidth: "100%", maxHeight: "100%" }}
//               />{" "}
//               {/* Adjust maxWidth and maxHeight as needed */}
//             </div>
//           </div>
//         </div>
//         <div
//           style={{
//             width: "450px",
//             height: "241px",
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "flex-start",
//             justifyContent: "center",
//             gap: "19px",
//             textAlign: "left",
//             fontSize: "16px",
//             color: "#fff",
//             fontFamily: "Manrope",
//           }}
//         >
//           <Button
//             style={{
//               borderRadius: "23px",
//               border: "1px solid #fff",
//               boxSizing: "border-box",
//               width: "450px",
//               height: "46px",
//               display: "flex",
//               flexDirection: "row",
//               alignItems: "center",
//               justifyContent: "center",
//               padding: "8px 20px",
//               gap: "18px",
//             }}
//             onClick={login}
//           >
//             <img
//               style={{
//                 position: "relative",
//                 width: "23.18px",
//                 height: "23.18px",
//                 overflow: "hidden",
//                 flexShrink: "0",
//               }}
//               alt=""
//               src="/search 1.svg"
//             />
//             <div
//               style={{
//                 position: "relative",
//                 letterSpacing: "0.3px",
//                 lineHeight: "150%",
//                 fontWeight: "500",
//               }}
//             >
//               Login with Google
//             </div>
//           </Button>
//           <Button
//             style={{
//               borderRadius: "23px",
//               border: "1px solid #fff",
//               boxSizing: "border-box",
//               width: "450px",
//               height: "46px",
//               display: "flex",
//               flexDirection: "row",
//               alignItems: "center",
//               justifyContent: "center",
//               padding: "8px 20px",
//               gap: "18px",
//             }}
//             //   onClick={() => loginWithRedirect()}
//           >
//             <img
//               style={{
//                 position: "relative",
//                 width: "27.18px",
//                 height: "27.18px",
//                 overflow: "hidden",
//                 flexShrink: "0",
//               }}
//               alt=""
//               src="/apple.svg"
//             />
//             <div
//               style={{
//                 position: "relative",
//                 letterSpacing: "0.3px",
//                 lineHeight: "150%",
//                 fontWeight: "500",
//               }}
//             >
//               Login with Apple
//             </div>
//           </Button>
//           <Button
//             style={{
//               borderRadius: "23px",
//               border: "1px solid #fff",
//               boxSizing: "border-box",
//               width: "450px",
//               height: "46px",
//               display: "flex",
//               flexDirection: "row",
//               alignItems: "center",
//               justifyContent: "center",
//               padding: "8px 20px",
//               gap: "18px",
//             }}
//           >
//             <img
//               style={{ position: "relative", width: "22px", height: "20px" }}
//               alt=""
//               src="/twitter.svg"
//             />
//             <div
//               style={{
//                 position: "relative",
//                 letterSpacing: "0.3px",
//                 lineHeight: "150%",
//                 fontWeight: "500",
//               }}
//             >
//               Login with Twitter
//             </div>
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// }

const Login = () => {
  const { login } = useAppContext();
  return (
    <div className="h-[90vh] bg-[#0B0B0F] w-full flex justify-center py-16">
      <div className="w-full md:w-1/3 flex flex-col md:border-2 md:border-[#181818] p-8 rounded-2xl justify-around">
        <div className="flex w-full justify-center">
          <img src={logoicon} alt="" className="w-12" />
          <img src={logotext} alt="" className="w-48" />
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
