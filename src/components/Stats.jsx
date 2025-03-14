const Stats = () => {
  return (
    <div className="flex flex-row text-white w-full justify-center items-center md:gap-16 ss:gap-9 gap-3">
      <div className="flex justify-center items-center gap-2 md:flex-row flex-col">
        <span className="font-bold text-3xl" style={{ overflowY: "hidden" }}>
          3800+
        </span>
        <span className="bg-blue-gradient">USER ACTIVE</span>
      </div>
      <div>|</div>
      <div className="flex justify-center items-center gap-2 md:flex-row flex-col">
        <span className="font-bold text-3xl" style={{ overflowY: "hidden" }}>
          230+
        </span>
        <span className="bg-blue-gradient">TRUSTED BY COMPANY</span>
      </div>
      <div>|</div>
      <div className="flex justify-center items-center gap-2 md:flex-row flex-col">
        <span className="font-bold text-3xl" style={{ overflowY: "hidden" }}>
          $230M+
        </span>
        <span className="bg-blue-gradient">TRANSACTION</span>
      </div>
    </div>
  );
};

export default Stats;
