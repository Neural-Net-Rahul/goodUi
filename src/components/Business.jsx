import { features } from "../constants";
import styles, {layout} from '../style'
import Button from './Button'

const Business = () => {
  return (
    <div className="sm:flex sm:justify-between flex sm:flex-row flex-col ml-10 sm:mr-0 mr-10 sm:gap-20">
      <div className="text-white mt-20 ss:w-full w-1/2">
        <div className="flex flex-col gap-3">
          <div style={{ overflowY: "hidden" }} className="text-5xl font-bold">
            You do the business,
          </div>
          <div style={{ overflowY: "hidden" }} className="text-5xl font-bold">
            we'll handle the money.
          </div>
        </div>
        <div className="mt-6 text-dimWhite">
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </div>
        <button className="p-3 text-black rounded-3xl font-bold mt-6 bg-gradient">Get started</button>
      </div>
      <div className="mr-10 mt-20 w-1/2 ss:w-full">
        {features.map((ithfeature) => (
          <>
            <div
              key={ithfeature.id}
              className="flex gap-5 items-center  bg-slate-800 px-4 py-4 rounded-3xl"
            >
              <div className="mb-[30px] bg-blue-900 p-2 rounded-full">
                <img src={ithfeature.icon} alt={ithfeature.title} />
              </div>
              <div className="flex flex-col gap-1">
                <div className="text-white font-bold">{ithfeature.title}</div>
                <div className="text-dimWhite">{ithfeature.content}</div>
              </div>
            </div>
            <br />
          </>
        ))}
      </div>
    </div>
  );
};

export default Business;
