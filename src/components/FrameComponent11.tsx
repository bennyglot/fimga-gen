import { FunctionComponent } from "react";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch bg-light-background-sw flex flex-col items-end justify-start py-[71px] pr-[250px] pl-[216px] box-border gap-[27px] max-w-full z-[1] text-center text-17xl text-dark-blue-sw font-x-hp-title mq1350:pl-[108px] mq1350:pr-[125px] mq1350:box-border mq450:pt-[30px] mq450:pb-[30px] mq450:box-border mq900:py-[46px] mq900:pr-[62px] mq900:pl-[54px] mq900:box-border ${className}`}
    >
      <div className="w-[1900px] h-[800px] relative bg-light-background-sw hidden max-w-full" />
      <div className="w-[1400px] flex flex-row items-start justify-center max-w-full">
        <h1 className="m-0 w-[646px] relative text-inherit tracking-[-0.02em] leading-[60px] font-normal font-inherit inline-block shrink-0 max-w-full z-[2] mq450:text-3xl mq450:leading-[36px] mq900:text-10xl mq900:leading-[48px]">
          Feature Highlights
        </h1>
      </div>
      <div className="self-stretch flex flex-col items-end justify-start gap-[40px] max-w-full text-base-1 text-bluish-grey-sw mq900:gap-[20px]">
        <div className="w-[1400px] flex flex-row flex-wrap items-start justify-center gap-[36px] max-w-full mq900:gap-[18px]">
          <div className="flex-1 flex flex-row items-start justify-start pt-1.5 px-0 pb-[5px] box-border relative min-w-[297px] max-w-full z-[2]">
            <div className="flex-1 relative tracking-[-0.02em] leading-[19px] inline-block max-w-full">
              GenAI Loading List Generation
            </div>
            <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] box-border z-[1] border-b-[1px] border-solid border-bluish-grey-sw" />
          </div>
          <div className="flex-1 flex flex-row items-start justify-start pt-1.5 px-0 pb-[5px] box-border relative min-w-[297px] max-w-full z-[2]">
            <div className="flex-1 relative tracking-[-0.02em] leading-[19px] inline-block max-w-full">
              Data Extraction and Enrichment
            </div>
            <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] box-border z-[1] border-b-[1px] border-solid border-bluish-grey-sw" />
          </div>
          <div className="flex-1 flex flex-row items-start justify-start pt-1.5 px-0 pb-[5px] box-border relative min-w-[297px] max-w-full z-[2] text-blue-sw">
            <div className="flex-1 relative tracking-[-0.02em] leading-[19px] font-medium inline-block max-w-full">
              Stargo LLM
            </div>
            <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] box-border z-[1] border-b-[1px] border-solid border-blue-sw" />
          </div>
          <div className="flex-1 flex flex-row items-start justify-start pt-1.5 px-0 pb-[5px] box-border relative min-w-[297px] max-w-full z-[2]">
            <div className="flex-1 relative tracking-[-0.02em] leading-[19px] inline-block max-w-full">
              Automated Notifications
            </div>
            <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] box-border z-[1] border-b-[1px] border-solid border-bluish-grey-sw" />
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-center gap-[70px] max-w-full text-left text-31xl text-dark-blue-sw mq450:gap-[17px] mq900:gap-[35px] mq1750:flex-wrap">
          <img
            className="h-[501px] flex-1 relative max-w-full overflow-hidden object-cover min-w-[498px] z-[2] mq1350:min-w-full"
            loading="lazy"
            alt=""
            src="/notifications--20-1@2x.png"
          />
          <div className="w-[598px] flex flex-col items-start justify-start pt-[52px] px-0 pb-0 box-border min-w-[598px] max-w-full mq1350:min-w-full mq1750:flex-1">
            <div className="self-stretch flex flex-col items-start justify-start gap-[23px] max-w-full">
              <h1 className="m-0 w-[573.5px] relative text-inherit tracking-[-0.02em] leading-[60px] font-medium font-inherit inline-block max-w-full z-[2] mq450:text-11xl mq450:leading-[36px] mq900:text-21xl mq900:leading-[48px]">
                Automated Notifications
              </h1>
              <div className="self-stretch relative text-xl tracking-[-0.02em] leading-[32px] text-light-text-sw z-[2] mq450:text-base mq450:leading-[26px]">
                Once generated, loading lists are automatically sent through to
                the relevant receiving party, including cross-dock, warehouse,
                or store, ensuring seamless inbound receiving processing.  
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent1;
