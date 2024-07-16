import { FunctionComponent } from "react";
import FrameComponent2 from "./FrameComponent2";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  className = "",
}) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-center pt-0 pb-10 pr-[33px] pl-5 box-border max-w-full text-left text-31xl text-gray font-x-hp-title ${className}`}
    >
      <div className="flex flex-row items-start justify-center [row-gap:20px] max-w-full mq1750:flex-wrap">
        <div className="w-[700px] flex flex-col items-start justify-start pt-[9px] px-0 pb-0 box-border min-w-[700px] max-w-full mq900:min-w-full mq1750:flex-1">
          <FrameComponent2
            whatIsLogisticsCloud="What is Logistics.Cloud? "
            lobsterLogisticsCloudIsTh="Lobster Logistics.Cloud is the world’s foremost freight, logistics and supply chain integration platform. Neutral, reliable, interoperable and agnostic, Lobster Logistics.Cloud allows you to connect all your supply chain systems, new and old, via a single point of connection, enabling the free flow of data up and down your supply chain "
            learnMore="Learn more"
          />
        </div>
        <div className="w-[687px] flex flex-row items-start justify-start min-w-[687px] shrink-0 max-w-full z-[1] mq900:min-w-full mq1750:flex-1">
          <div className="h-[345px] flex-1 relative max-w-full">
            <div className="absolute top-[0px] left-[181.3px] shadow-[0px_4.7px_27.64px_rgba(180,_182,_187,_0.5)] rounded-[3.95px] bg-white w-[505.7px] h-[297px]" />
            <img
              className="absolute top-[18px] left-[201.1px] w-[466.1px] h-[261px] object-cover z-[1]"
              loading="lazy"
              alt=""
              src="/edifactvorlagen1024x583@2x.png"
            />
            <div className="absolute top-[48px] left-[0px] shadow-[0px_4.7px_27.64px_rgba(180,_182,_187,_0.5)] rounded-[3.95px] bg-white w-[505.7px] h-[297px] z-[2]">
              <div className="absolute top-[0px] left-[0px] shadow-[0px_4.7px_27.64px_rgba(180,_182,_187,_0.5)] rounded-[3.95px] bg-white w-full h-full hidden" />
              <img
                className="absolute top-[16.5px] left-[18.3px] w-[469.2px] h-[262.5px] object-cover z-[1]"
                alt=""
                src="/vorlagenuebersicht1024x585@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;
