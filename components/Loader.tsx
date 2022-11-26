// import { ThreeBounce } from "better-react-spinkit";
import Image from "next/legacy/image";
import { PulseLoader } from "react-spinners";

function Loader() {
  return (
    <div className="h-screen bg-black">
      <div className="pt-40 flex flex-col items-center space-y-4">
        <span className="relative w-[400px] h-[250px] lg:w-[550px] lg:h-[240px]">
          <Image
            src="https://media.discordapp.net/attachments/1011970131112505376/1044514089591918662/Frame_1.png?width=738&height=311"
            layout="fill"
            objectFit="contain"
            className="animate-pulse"
            alt=""
          />
        </span>
        <PulseLoader color="#15883e" size={23} />
      </div>
    </div>
  );
}

export default Loader;
