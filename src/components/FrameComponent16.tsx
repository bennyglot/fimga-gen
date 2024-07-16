import { FunctionComponent } from "react";
import FrameComponent2 from "./FrameComponent2";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
}) => {
  return (
    <div
      className={`w-[1875px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full ${className}`}
    >
      <div className="w-[1433px] flex flex-row items-end justify-between max-w-full gap-[20px] mq1750:flex-wrap mq1750:justify-center">
        <img
          className="w-[716px] relative max-h-full object-cover min-h-[334px] max-w-full mq1750:flex-1"
          loading="lazy"
          alt=""
          src="/hp-img--0002-vectorsmartobject@2x.png"
        />
        <FrameComponent2
          whatIsLogisticsCloud="Are you an Existing Logistics.Cloud Customer?"
          lobsterLogisticsCloudIsTh="Get ready to transform your business. Find out more about what Stargo can do for your business today. "
          learnMore="Get a Demo"
          propAlignSelf="unset"
          propGap="25px"
          propWidth="627px"
          propMinWidth="627px"
        />
      </div>
    </div>
  );
};

export default FrameComponent;
