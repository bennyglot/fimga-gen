import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type FrameComponent9Type = {
  className?: string;
  allWebsiteIcons6?: string;
  tenderReconciliationTime?: string;
  h40Sec?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
  propGap?: CSSProperties["gap"];
  propMinWidth?: CSSProperties["minWidth"];
};

const FrameComponent9: FunctionComponent<FrameComponent9Type> = ({
  className = "",
  allWebsiteIcons6,
  tenderReconciliationTime,
  h40Sec,
  propPadding,
  propGap,
  propMinWidth,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
      gap: propGap,
      minWidth: propMinWidth,
    };
  }, [propPadding, propGap, propMinWidth]);

  return (
    <div
      className={`flex-1 shadow-[0px_6px_35px_rgba(180,_182,_187,_0.5)] rounded-mini bg-white flex flex-col items-start justify-start pt-9 px-[23px] pb-[46.5px] box-border gap-[13.5px] min-w-[319px] max-w-full text-center text-7xl text-dark-blue-sw font-x-hp-title ${className}`}
      style={frameDivStyle}
    >
      <div className="w-[426px] h-[296px] relative shadow-[0px_6px_35px_rgba(180,_182,_187,_0.5)] rounded-mini bg-white hidden max-w-full" />
      <div className="self-stretch flex flex-row items-start justify-center py-0 pr-px pl-0">
        <img
          className="h-[105px] w-[105px] relative object-cover z-[1]"
          loading="lazy"
          alt=""
          src={allWebsiteIcons6}
        />
      </div>
      <div className="self-stretch relative tracking-[-0.02em] font-semibold z-[1] mq450:text-2xl">
        <p className="[margin-block-start:0] [margin-block-end:1px]">
          {tenderReconciliationTime}
        </p>
        <p className="m-0 text-17xl text-blue-sw">{h40Sec}</p>
      </div>
    </div>
  );
};

export default FrameComponent9;
