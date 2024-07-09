import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type AccurateVisibilityGridType = {
  className?: string;
  allWebsiteIcons2?: string;
  accurateRealTimeVisibilit?: string;
  bringingStakeholders?: string;
  togetherAccuratePricing?: string;
  enhancedVisibility?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propFlex?: CSSProperties["flex"];
  propMinWidth?: CSSProperties["minWidth"];
  propGap?: CSSProperties["gap"];
};

const AccurateVisibilityGrid: FunctionComponent<AccurateVisibilityGridType> = ({
  className = "",
  allWebsiteIcons2,
  accurateRealTimeVisibilit,
  bringingStakeholders,
  togetherAccuratePricing,
  enhancedVisibility,
  propWidth,
  propFlex,
  propMinWidth,
  propGap,
}) => {
  const accurateVisibilityGridStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      flex: propFlex,
      minWidth: propMinWidth,
      gap: propGap,
    };
  }, [propWidth, propFlex, propMinWidth, propGap]);

  return (
    <div
      className={`w-[216px] flex flex-col items-start justify-start gap-[10.1px] text-center text-xs text-dark-blue-sw font-x-hp-title ${className}`}
      style={accurateVisibilityGridStyle}
    >
      <div className="flex flex-row items-start justify-start py-0 px-[78px]">
        <img
          className="h-[59.9px] w-[59.9px] relative object-cover shrink-0"
          loading="lazy"
          alt=""
          src={allWebsiteIcons2}
        />
      </div>
      <div className="self-stretch relative tracking-[-0.02em] shrink-0">
        <p className="[margin-block-start:0] [margin-block-end:13.93px] text-lg">
          <b className="leading-[24px]">{accurateRealTimeVisibilit}</b>
        </p>
        <p className="[margin-block-start:0] [margin-block-end:13.93px] leading-[155%]">
          {bringingStakeholders}
        </p>
        <p className="[margin-block-start:0] [margin-block-end:13.93px] leading-[155%]">
          {togetherAccuratePricing}
        </p>
        <p className="m-0 leading-[155%]">{enhancedVisibility}</p>
      </div>
    </div>
  );
};

export default AccurateVisibilityGrid;
