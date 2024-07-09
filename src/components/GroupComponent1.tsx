import { FunctionComponent } from "react";

export type GroupComponent1Type = {
  className?: string;
  processCost?: string;
  allWebsiteIcons7?: string;
  prop?: string;
  prop1?: string;
};

const GroupComponent1: FunctionComponent<GroupComponent1Type> = ({
  className = "",
  processCost,
  allWebsiteIcons7,
  prop,
  prop1,
}) => {
  return (
    <div
      className={`self-stretch shadow-[0px_6px_35px_rgba(180,_182,_187,_0.5)] rounded-mini bg-white flex flex-col items-start justify-start pt-[29px] px-[29px] pb-6 gap-[11.5px] text-center text-5xl text-dark-blue-sw font-x-hp-title ${className}`}
    >
      <div className="w-[305px] h-[255px] relative shadow-[0px_6px_35px_rgba(180,_182,_187,_0.5)] rounded-mini bg-white hidden" />
      <h3 className="m-0 self-stretch relative text-inherit tracking-[-0.02em] font-bold font-inherit z-[1] mq450:text-lgi">
        {processCost}
      </h3>
      <div className="self-stretch flex flex-row items-start justify-start py-0 px-[71px]">
        <img
          className="h-[105px] w-[105px] relative object-cover z-[1]"
          loading="lazy"
          alt=""
          src={allWebsiteIcons7}
        />
      </div>
      <div className="self-stretch relative tracking-[-0.02em] z-[1] text-2xl mq450:text-mid">
        <span className="font-medium">{prop}</span>
        <b className="text-6xl text-blue-sw">{prop1}</b>
      </div>
    </div>
  );
};

export default GroupComponent1;
