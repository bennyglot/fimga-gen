import { FunctionComponent } from "react";

export type FrameComponent5Type = {
  className?: string;
};

const FrameComponent5: FunctionComponent<FrameComponent5Type> = ({
  className = "",
}) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-left text-31xl text-dark-blue-sw font-x-hp-title ${className}`}
    >
      <div className="w-[1400px] flex flex-row items-start justify-between max-w-full gap-[20px] mq1350:flex-wrap">
        <div className="w-[586px] flex flex-col items-start justify-start pt-14 px-0 pb-0 box-border min-w-[586px] max-w-full mq1350:flex-1 mq450:pt-9 mq450:box-border mq900:min-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-[34px] mq900:gap-[17px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[29px]">
              <h1 className="m-0 self-stretch relative text-inherit tracking-[-0.02em] leading-[60px] font-medium font-inherit mq450:text-11xl mq450:leading-[36px] mq900:text-21xl mq900:leading-[48px]">
                <p className="[margin-block-start:0] [margin-block-end:1px]">
                  When 1 + 1 =
                </p>
                <p className="m-0">Full Interoperability </p>
              </h1>
              <div className="self-stretch relative text-xl tracking-[-0.02em] leading-[32px] text-gray mq450:text-base mq450:leading-[26px]">
                This exciting partnership brings together Lobster
                Logistics.Cloud’s versatile, platform-agnostic integration
                capabilities and Stargo's data-agnostic data automation prowess
                in perfect synergy. 
              </div>
            </div>
            <button className="cursor-pointer [border:none] py-[13px] px-[29px] bg-dark-blue rounded-6xl flex flex-row items-start justify-start whitespace-nowrap hover:bg-steelblue-200">
              <div className="relative text-base font-x-hp-title text-white text-left inline-block min-w-[91px]">
                Learn more
              </div>
            </button>
          </div>
        </div>
        <div className="w-[598px] flex flex-col items-start justify-start gap-[33px] min-w-[598px] max-w-full text-center text-mini-2 text-light-text-sw mq1350:flex-1 mq900:gap-[16px] mq900:min-w-full">
          <div className="self-stretch shadow-[0px_6px_35px_rgba(180,_182,_187,_0.5)] rounded-mini bg-white flex flex-col items-start justify-start py-[34px] px-[51px] gap-[27px] mq900:pl-[25px] mq900:pr-[25px] mq900:box-border">
            <div className="self-stretch flex flex-row items-start justify-center">
              <img
                className="h-[52px] w-[229px] relative object-cover"
                loading="lazy"
                alt=""
                src="/lobster-pos-2@2x.png"
              />
            </div>
            <div className="self-stretch relative tracking-[-0.02em] leading-[22.9px]">
              <p className="[margin-block-start:0] [margin-block-end:2.79px] text-base-2 font-semibold text-dark-blue-sw">
                Platform Agnostic
              </p>
              <p className="[margin-block-start:0] [margin-block-end:2.79px]">
                A neutral data platform connecting the world of freight,
                logistics
              </p>
              <p className="m-0">
                and supply chain  through seamless data integration
              </p>
            </div>
          </div>
          <div className="self-stretch shadow-[0px_6px_35px_rgba(180,_182,_187,_0.5)] rounded-mini bg-white flex flex-col items-start justify-start pt-[29px] px-7 pb-[43px] box-border relative gap-[18px] max-w-full text-base-2 text-dark-blue-sw">
            <div className="w-[530px] flex flex-row items-start justify-center max-w-full">
              <img
                className="h-[57px] w-[174px] relative"
                alt=""
                src="/content-icons-ibm-1.svg"
              />
            </div>
            <div className="w-[530px] relative tracking-[-0.02em] leading-[22.9px] flex items-end max-w-full">
              <span className="w-full">
                <p className="[margin-block-start:0] [margin-block-end:2.79px] font-semibold whitespace-pre-wrap">
                  Data Agnostic
                </p>
                <p className="m-0 text-mini-2 text-light-text-sw">
                  A neutral data automation and management platform enriching
                  and structuring data from any origin, to any destination, with
                  100% data accuracy
                </p>
              </span>
            </div>
            <img
              className="w-14 h-14 absolute !m-[0] top-[-44px] left-[265px] z-[1]"
              loading="lazy"
              alt=""
              src="/group-240225.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent5;
