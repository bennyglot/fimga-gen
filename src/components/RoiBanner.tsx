import { FunctionComponent } from "react";
import ROIBottomBanner from "./ROIBottomBanner";

export type RoiBannerType = {
  className?: string;
};

const RoiBanner: FunctionComponent<RoiBannerType> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[77px] box-border max-w-full text-left text-18xl text-light-background-sw font-x-hp-title mq450:pb-[50px] mq450:box-border ${className}`}
    >
      <div className="h-[100px] w-[100px] relative overflow-hidden shrink-0 hidden" />
      <ROIBottomBanner />
    </section>
  );
};

export default RoiBanner;