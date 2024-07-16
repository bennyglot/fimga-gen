import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type FrameComponent2Type = {
  className?: string;
  whatIsLogisticsCloud?: string;
  lobsterLogisticsCloudIsTh?: string;
  learnMore?: string;

  /** Style props */
  propAlignSelf?: CSSProperties["alignSelf"];
  propGap?: CSSProperties["gap"];
  propWidth?: CSSProperties["width"];
  propMinWidth?: CSSProperties["minWidth"];
};

const FrameComponent2: FunctionComponent<FrameComponent2Type> = ({
  className = "",
  whatIsLogisticsCloud,
  lobsterLogisticsCloudIsTh,
  learnMore,
  propAlignSelf,
  propGap,
  propWidth,
  propMinWidth,
}) => {
  const frameDiv1Style: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      gap: propGap,
      width: propWidth,
      minWidth: propMinWidth,
    };
  }, [propAlignSelf, propGap, propWidth, propMinWidth]);

  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start gap-[33px] shrink-0 max-w-[102%] text-left text-31xl text-gray font-x-hp-title mq900:gap-[16px] ${className}`}
      style={frameDiv1Style}
    >
      <div className="self-stretch flex flex-col items-start justify-start gap-[28px] max-w-full">
        <h1 className="m-0 self-stretch relative text-inherit tracking-[-0.02em] leading-[60px] font-medium font-inherit mq450:text-11xl mq450:leading-[36px] mq900:text-21xl mq900:leading-[48px]">
          {whatIsLogisticsCloud}
        </h1>
        <div className="w-[586px] relative text-xl tracking-[-0.02em] leading-[32px] inline-block max-w-full mq450:text-base mq450:leading-[26px]">
          {lobsterLogisticsCloudIsTh}
        </div>
      </div>
      <button className="cursor-pointer [border:none] py-[13px] px-[29px] bg-dark-blue rounded-6xl flex flex-row items-start justify-start whitespace-nowrap hover:bg-steelblue-200">
        <div className="relative text-base font-x-hp-title text-white text-left inline-block min-w-[91px]">
          {learnMore}
        </div>
      </button>
    </div>
  );
};

export default FrameComponent2;
