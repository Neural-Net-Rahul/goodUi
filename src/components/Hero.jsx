import styles from "../style";
import { discount, robot } from "../assets";
import GetStarted from './GetStarted'

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row items-center py-[4px] px-4 bg-gray-800 rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} text-white font-normal`}>
            20% discount for 1 Month Account
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[60px] text-[52px] text-white ss:leading-[100px]leading-[75px]">
            The Next
            <br className="sm:block hidden" />{" "}
            <span className="bg-gradient bg-clip-text text-transparent">
              Generation
            </span>
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>

        <p className="flex-1 font-poppins font-semibold ss:text-[60px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full">
          Payment Method.
        </p>

        <p className={`${styles.paragraph} max-w-[470px] `}>
          Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. We examine annual percentage rates,
          annual fees.
        </p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10`}>
        <img
          src={robot}
          alt="robot"
          className="mr-0 w-[580px] h-[500px] realtive z-[5"
        />
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] bottom-40 white__gradient" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 blue__gradient bottom-20" />
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted/>
      </div>

      

    </section>
  );
};

export default Hero;
