import { FunctionComponent } from "react";

export type FrameComponent4Type = {
  className?: string;
};

const FrameComponent4: FunctionComponent<FrameComponent4Type> = ({
  className = "",
}) => {
  return (
    <div
      className={`self-stretch bg-light-background-sw flex flex-col items-center justify-start pt-[65px] px-5 pb-[43px] box-border gap-[47px] max-w-full text-center text-17xl text-dark-blue-sw font-x-hp-title mq450:pt-[27px] mq450:pb-5 mq450:box-border mq900:gap-[23px] mq900:pt-[42px] mq900:pb-7 mq900:box-border ${className}`}
    >
      <div className="w-[1900px] h-[850px] relative bg-light-background-sw hidden max-w-full" />
      <div className="w-[1398px] flex flex-row items-start justify-center max-w-full">
        <div className="w-[806px] flex flex-col items-start justify-start gap-[6px] max-w-full">
          <div className="self-stretch flex flex-row items-start justify-start py-0 px-[53px] box-border max-w-full mq900:pl-[26px] mq900:pr-[26px] mq900:box-border">
            <h1 className="m-0 flex-1 relative text-inherit tracking-[-0.02em] leading-[60px] font-semibold font-inherit inline-block max-w-full z-[1] mq450:text-3xl mq450:leading-[36px] mq900:text-10xl mq900:leading-[48px]">
              What Can StarDox Do For You?
            </h1>
          </div>
          <h3 className="m-0 self-stretch relative text-3xl tracking-[-0.02em] leading-[34px] font-normal font-inherit text-gray z-[1] mq450:text-lg mq450:leading-[27px]">
            Solving the problem of low-quality semi-structured data, for good.
          </h3>
        </div>
      </div>
      <div className="w-[1398px] flex flex-col items-start justify-start gap-[23px] max-w-full text-base-1 text-bluish-grey-sw">
        <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-[24px]">
          <div className="flex-1 flex flex-row items-start justify-start pt-1.5 px-0 pb-[5px] box-border relative min-w-[209px] max-w-[213px] z-[1]">
            <div className="flex-1 relative tracking-[-0.02em] leading-[19px] font-medium">{`Cleansing & Extraction`}</div>
            <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] box-border z-[1] border-b-[1px] border-solid border-bluish-grey-sw" />
          </div>
          <div className="flex-1 flex flex-row items-start justify-start pt-1.5 px-0 pb-[5px] box-border relative min-w-[209px] max-w-[213px] z-[1]">
            <div className="flex-1 relative tracking-[-0.02em] leading-[19px]">
              Data Quality 
            </div>
            <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] box-border z-[1] border-b-[1px] border-solid border-bluish-grey-sw" />
          </div>
          <div className="flex-1 flex flex-row items-start justify-start pt-1.5 px-0 pb-[5px] box-border relative min-w-[209px] max-w-[213px] z-[1]">
            <div className="flex-1 relative tracking-[-0.02em] leading-[19px]">
              Full Interoperability
            </div>
            <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] box-border z-[1] border-b-[1px] border-solid border-bluish-grey-sw" />
          </div>
          <div className="flex-1 flex flex-row items-start justify-start pt-1.5 px-0 pb-[5px] box-border relative min-w-[209px] max-w-[213px] z-[1] text-blue-sw">
            <div className="flex-1 relative tracking-[-0.02em] leading-[19px] font-medium">
              100% Data Accuracy
            </div>
            <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] box-border z-[1] border-b-[1px] border-solid border-blue-sw" />
          </div>
          <div className="flex-1 flex flex-row items-start justify-start pt-1.5 px-0 pb-[5px] box-border relative min-w-[209px] max-w-[213px] z-[1]">
            <div className="flex-1 relative tracking-[-0.02em] leading-[19px]">
              100% Data Visibility
            </div>
            <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] box-border z-[1] border-b-[1px] border-solid border-bluish-grey-sw" />
          </div>
          <div className="flex-1 flex flex-row items-start justify-start pt-1.5 px-0 pb-[5px] box-border relative min-w-[209px] max-w-[213px] z-[1]">
            <div className="flex-1 relative tracking-[-0.02em] leading-[19px]">
              End-to-End Automation
            </div>
            <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] box-border z-[1] border-b-[1px] border-solid border-bluish-grey-sw" />
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-center gap-[99px] max-w-full text-left text-31xl text-dark-blue-sw mq1350:flex-wrap mq450:gap-[25px] mq900:gap-[49px]">
          <img
            className="h-[542px] flex-1 relative max-w-full overflow-hidden object-cover min-w-[454px] z-[1] mq900:min-w-full"
            loading="lazy"
            alt=""
            src="/website-images-ggs-jan24-stargo-2-edited17@2x.png"
          />
          <div className="w-[600px] flex flex-col items-start justify-start pt-40 px-0 pb-0 box-border min-w-[600px] max-w-full mq1350:flex-1 mq900:min-w-full">
            <div className="self-stretch flex flex-col items-start justify-start gap-[27px]">
              <h1 className="m-0 self-stretch relative text-inherit tracking-[-0.02em] leading-[60px] font-medium font-inherit z-[1] mq450:text-11xl mq450:leading-[36px] mq900:text-21xl mq900:leading-[48px]">{`100% Data Accuracy `}</h1>
              <div className="self-stretch relative text-xl tracking-[-0.02em] leading-[32px] text-light-text-sw z-[1] mq450:text-base mq450:leading-[26px]">
                Stargo’s advanced GenAI and ML technology ensures 100% data
                accuracy throughout your freight, logistics, or supply chain
                ecosystem. 
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent4;
