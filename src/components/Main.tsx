import { FunctionComponent } from "react";

export type MainType = {
  className?: string;
};

const Main: FunctionComponent<MainType> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch bg-white flex flex-col items-center justify-start pt-[70px] px-5 pb-[51px] box-border gap-[27px] max-w-full text-center text-17xl text-dark-blue-sw font-x-hp-title mq925:pt-[45px] mq925:pb-[33px] mq925:box-border mq450:pt-[29px] mq450:pb-[21px] mq450:box-border ${className}`}
    >
      <div className="w-[1900px] h-[800px] relative bg-white hidden max-w-full" />
      <div className="w-[1400px] flex flex-row items-start justify-center max-w-full">
        <h1 className="m-0 w-[646px] relative text-inherit tracking-[-0.02em] leading-[60px] font-normal font-inherit inline-block shrink-0 max-w-full z-[1] mq925:text-10xl mq925:leading-[48px] mq450:text-3xl mq450:leading-[36px]">
          Stargo Benefits
        </h1>
      </div>
      <div className="w-[1400px] flex flex-col items-start justify-start gap-[36px] max-w-full text-base-1 text-bluish-grey-sw mq925:gap-[18px]">
        <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-[36px] max-w-full mq925:gap-[18px]">
          <div className="flex-1 flex flex-row items-start justify-start pt-1.5 px-0 pb-[5px] box-border relative min-w-[297px] max-w-full z-[1]">
            <div className="flex-1 relative tracking-[-0.02em] leading-[19px] inline-block max-w-full">
              Enhanced Agility
            </div>
            <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] box-border z-[1] border-b-[1px] border-solid border-bluish-grey-sw" />
          </div>
          <div className="flex-1 flex flex-row items-start justify-start pt-1.5 px-0 pb-[5px] box-border relative min-w-[297px] max-w-full z-[1]">
            <div className="flex-1 relative tracking-[-0.02em] leading-[19px] inline-block max-w-full">
              Optimized Decision Making
            </div>
            <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] box-border z-[1] border-b-[1px] border-solid border-bluish-grey-sw" />
          </div>
          <div className="flex-1 flex flex-row items-start justify-start pt-1.5 px-0 pb-[5px] box-border relative min-w-[297px] max-w-full z-[1] text-blue-sw">
            <div className="flex-1 relative tracking-[-0.02em] leading-[19px] font-medium inline-block max-w-full">
              Maximized Margins
            </div>
            <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] box-border z-[1] border-b-[1px] border-solid border-blue-sw" />
          </div>
          <div className="flex-1 flex flex-row items-start justify-start pt-1.5 px-0 pb-[5px] box-border relative min-w-[297px] max-w-full z-[1]">
            <div className="flex-1 relative tracking-[-0.02em] leading-[19px] inline-block max-w-full">
              100% Visibility
            </div>
            <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] box-border z-[1] border-b-[1px] border-solid border-bluish-grey-sw" />
          </div>
        </div>
        <div className="w-[1328px] flex flex-row items-start justify-center gap-[138px] max-w-full text-left text-31xl text-dark-blue-sw mq925:gap-[34px] mq1350:flex-wrap mq1350:gap-[69px] mq450:gap-[17px]">
          <div className="w-[562px] flex flex-col items-start justify-start pt-[78px] px-0 pb-0 box-border min-w-[562px] max-w-full mq925:min-w-full mq1350:flex-1 mq450:pt-[51px] mq450:box-border">
            <div className="self-stretch flex flex-col items-start justify-start gap-[27px]">
              <h1 className="m-0 self-stretch relative text-inherit tracking-[-0.02em] leading-[60px] font-medium font-inherit z-[1] mq925:text-21xl mq925:leading-[48px] mq450:text-11xl mq450:leading-[36px]">
                <p className="[margin-block-start:0] [margin-block-end:1px]">
                  Maximized
                </p>
                <p className="m-0">Margins</p>
              </h1>
              <div className="self-stretch relative text-xl tracking-[-0.02em] leading-[32px] text-light-text-sw z-[1] mq450:text-base mq450:leading-[26px]">
                Stargo applies end-to-end automation to the complex contracted
                buy price reconciliation process, running real-time analysis of
                shipment profitability and automatically selecting the most
                favorable contracted buy prices to optimize margin gain.  
              </div>
            </div>
          </div>
          <img
            className="h-[526px] flex-1 relative max-w-full overflow-hidden object-cover min-w-[408px] z-[1] mq925:min-w-full"
            loading="lazy"
            alt=""
            src="/maximize-margins--19-1@2x.png"
          />
        </div>
      </div>
    </section>
  );
};

export default Main;
