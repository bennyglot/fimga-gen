import { FunctionComponent } from "react";

export type FrameComponentType = {
  className?: string;
  depositphotos95894906Orig?: string;
  howDigitalTwinsCouldTrans?: string;
  vector?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
  depositphotos95894906Orig,
  howDigitalTwinsCouldTrans,
  vector,
}) => {
  return (
    <div
      className={`flex-1 flex flex-col items-start justify-start min-w-[176px] text-left text-base-9 text-dark-blue-sw font-x-hp-title ${className}`}
    >
      <div className="self-stretch bg-saddlebrown flex flex-row items-start justify-start z-[1]">
        <div className="self-stretch w-[270.9px] relative bg-saddlebrown hidden" />
        <img
          className="h-[183.6px] flex-1 relative max-w-full overflow-hidden object-cover z-[1]"
          loading="lazy"
          alt=""
          src={depositphotos95894906Orig}
        />
      </div>
      <div className="self-stretch bg-white flex flex-col items-start justify-start pt-[18.5px] pb-[14.8px] pr-3.5 pl-[15px] gap-[37.1px] mq450:gap-[19px]">
        <div className="w-[270.9px] h-[132.4px] relative bg-white hidden" />
        <div className="self-stretch relative leading-[22.06px] font-semibold z-[1]">
          {howDigitalTwinsCouldTrans}
        </div>
        <div className="flex flex-row items-start justify-start gap-[10.7px] text-mini-1 text-blue-sw font-roboto">
          <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[68.5px] z-[1]">
            Read more
          </a>
          <div className="flex flex-col items-start justify-start pt-[3.5px] px-0 pb-0">
            <img
              className="w-3.5 h-[10.4px] relative z-[1]"
              alt=""
              src={vector}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
