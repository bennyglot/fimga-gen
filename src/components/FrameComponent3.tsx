import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type FrameComponent3Type = {
  className?: string;
  transformYourFreightDocum?: string;
  actionableInsights?: string;
  stardoxAGenAiPoweredSolut?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propFlexDirection?: CSSProperties["flexDirection"];
  propFlex?: CSSProperties["flex"];
  propMinWidth?: CSSProperties["minWidth"];
};

const FrameComponent3: FunctionComponent<FrameComponent3Type> = ({
  className = "",
  transformYourFreightDocum,
  actionableInsights,
  stardoxAGenAiPoweredSolut,
  propWidth,
  propFlexDirection,
  propFlex,
  propMinWidth,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      flexDirection: propFlexDirection,
      flex: propFlex,
      minWidth: propMinWidth,
    };
  }, [propWidth, propFlexDirection, propFlex, propMinWidth]);

  return (
    <div
      className={`w-[949px] flex flex-row items-start justify-center pt-0 px-5 pb-[255px] box-border max-w-full text-left text-31xl text-dark-blue-sw font-x-hp-title mq925:pb-[166px] mq925:box-border ${className}`}
      style={frameDivStyle}
    >
      <div className="w-[663px] flex flex-col items-start justify-start gap-[22px] max-w-full">
        <h1 className="m-0 self-stretch relative text-inherit tracking-[-0.02em] leading-[60px] font-medium font-inherit mq450:text-11xl mq450:leading-[36px] mq925:text-21xl mq925:leading-[48px]">
          <p className="[margin-block-start:0] [margin-block-end:1px]">
            {transformYourFreightDocum}
          </p>
          <p className="m-0">{actionableInsights}</p>
        </h1>
        <div className="w-[533px] relative text-xl tracking-[-0.02em] leading-[32px] text-light-text-sw inline-block max-w-full mq450:text-base mq450:leading-[26px]">
          {stardoxAGenAiPoweredSolut}
        </div>
      </div>
    </div>
  );
};

export default FrameComponent3;
