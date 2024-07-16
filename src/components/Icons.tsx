import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type IconsType = {
  className?: string;
  allWebsiteIcons132?: string;
  marginGain?: string;
  prop?: string;

  /** Style props */
  propFlex?: CSSProperties["flex"];
  propGap?: CSSProperties["gap"];
};

const Icons: FunctionComponent<IconsType> = ({
  className = "",
  allWebsiteIcons132,
  marginGain,
  prop,
  propFlex,
  propGap,
}) => {
  const iconsStyle: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
      gap: propGap,
    };
  }, [propFlex, propGap]);

  return (
    <div
      className={`flex-[0.949] shadow-[0px_6px_35px_rgba(180,_182,_187,_0.5)] rounded-mini bg-white flex flex-col items-start justify-start pt-[33px] pb-[38.5px] pr-[26px] pl-7 box-border gap-[24.5px] min-w-[277px] max-w-full text-center text-7xl text-dark-blue-sw font-x-hp-title mq925:flex-1 ${className}`}
      style={iconsStyle}
    >
      <div className="w-[426px] h-[296px] relative shadow-[0px_6px_35px_rgba(180,_182,_187,_0.5)] rounded-mini bg-white hidden max-w-full" />
      <div className="self-stretch flex flex-row items-start justify-center py-0 pr-0.5 pl-0">
        <img
          className="h-[105px] w-[105px] relative object-cover z-[1]"
          loading="lazy"
          alt=""
          src={allWebsiteIcons132}
        />
      </div>
      <div className="self-stretch relative tracking-[-0.02em] font-semibold z-[1] mq450:text-2xl">
        <p className="[margin-block-start:0] [margin-block-end:1px]">
          {marginGain}
        </p>
        <p className="m-0 text-17xl text-blue-sw">{prop}</p>
      </div>
    </div>
  );
};

export default Icons;
