import styles from "../style";
import { arrowUp } from "../assets";

const GetStarted = () => {
  return (
    <div
      className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-400 p-[2px] cursor-pointer`}
    >
      <div
        className={`${styles.flexCenter} flex-col bg-primary 
    w-[100%] h-[100%] rounded-full`}
      >
        <div className={`${styles.flexStart} flex-row`}>
          <p className="font-poppins font-medium text-[18px] leading-[23px]">
            <div className="flex">
              <span className="bg-gradient bg-clip-text text-transparent">
                Get
              </span>
              <img
                src={arrowUp}
                alt="arrow"
                className="w-[32px] h-[32px] object-contain ml-3"
              />
            </div>
            <span className="bg-gradient bg-clip-text text-transparent">
              Started
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
