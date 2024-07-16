import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type AccuracyDeliverabilityType = {
  className?: string;
  websiteIcons18?: string;
  customsClearanceAccuracy?: string;
  prop?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
  propGap?: CSSProperties["gap"];
};

const AccuracyDeliverability: FunctionComponent<AccuracyDeliverabilityType> = ({
  className = "",
  websiteIcons18,
  customsClearanceAccuracy,
  prop,
  propPadding,
  propGap,
}) => {
  const accuracyDeliverabilityStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
      gap: propGap,
    };
  }, [propPadding, propGap]);

  return (
    <div
      className={`flex-1 shadow-[0px_6px_35px_rgba(180,_182,_187,_0.5)] rounded-mini bg-white flex flex-col items-start justify-start pt-9 pb-[35px] pr-[38px] pl-[39px] box-border gap-[18.6px] min-w-[434px] max-w-full text-center text-7xl text-dark-blue-sw font-x-hp-title mq900:min-w-full ${className}`}
      style={accuracyDeliverabilityStyle}
    >
      <div className="w-[666px] h-[300px] relative shadow-[0px_6px_35px_rgba(180,_182,_187,_0.5)] rounded-mini bg-white hidden max-w-full" />
      <div className="self-stretch flex flex-row items-start justify-center py-0 pr-0.5 pl-0">
        <img
          className="h-[115.4px] w-[115.4px] relative object-cover z-[1]"
          loading="lazy"
          alt=""
          src={websiteIcons18}
        />
      </div>
      <div className="self-stretch relative font-semibold z-[1] mq450:text-2xl">
        <p className="[margin-block-start:0] [margin-block-end:1px] tracking-[-0.04em] capitalize whitespace-pre-wrap">
          {customsClearanceAccuracy}
        </p>
        <p className="m-0 text-17xl tracking-[-0.02em] text-blue-sw">{prop}</p>
      </div>
    </div>
  );
};

export default AccuracyDeliverability;
