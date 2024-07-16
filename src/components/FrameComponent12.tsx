import { FunctionComponent } from "react";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch bg-white flex flex-col items-center justify-start pt-[71px] px-5 pb-[35px] box-border gap-[35px] max-w-full text-center text-17xl text-dark-blue-sw font-x-hp-title mq450:pt-[30px] mq450:pb-5 mq450:box-border mq900:gap-[17px] mq900:pt-[46px] mq900:pb-[23px] mq900:box-border ${className}`}
    >
      <div className="w-[1900px] h-[800px] relative bg-white hidden max-w-full" />
      <div className="w-[1400px] flex flex-col items-start justify-start gap-[27px] max-w-full">
        <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
          <h1 className="m-0 w-[646px] relative text-inherit tracking-[-0.02em] leading-[60px] font-normal font-inherit inline-block shrink-0 max-w-full z-[1] mq450:text-3xl mq450:leading-[36px] mq900:text-10xl mq900:leading-[48px]">
            Stargo Benefits
          </h1>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-[36px] max-w-full text-base-1 text-bluish-grey-sw mq900:gap-[18px]">
          <div className="flex-1 flex flex-row items-start justify-start pt-1.5 px-0 pb-[5px] box-border relative min-w-[297px] max-w-full z-[1] text-blue-sw">
            <div className="flex-1 relative tracking-[-0.02em] leading-[19px] font-medium inline-block max-w-full">
              100% Accuracy
            </div>
            <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] box-border z-[1] border-b-[1px] border-solid border-blue-sw" />
          </div>
          <div className="flex-1 flex flex-row items-start justify-start pt-1.5 px-0 pb-[5px] box-border relative min-w-[297px] max-w-full z-[1]">
            <div className="flex-1 relative tracking-[-0.02em] leading-[19px] inline-block max-w-full">
              Enhanced Customs Compliance
            </div>
            <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] box-border z-[1] border-b-[1px] border-solid border-bluish-grey-sw" />
          </div>
          <div className="flex-1 flex flex-row items-start justify-start pt-1.5 px-0 pb-[5px] box-border relative min-w-[297px] max-w-full z-[1]">
            <div className="flex-1 relative tracking-[-0.02em] leading-[19px] inline-block max-w-full">
              Improved Operational Efficiency
            </div>
            <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] box-border z-[1] border-b-[1px] border-solid border-bluish-grey-sw" />
          </div>
          <div className="flex-1 flex flex-row items-start justify-start pt-1.5 px-0 pb-[5px] box-border relative min-w-[297px] max-w-full z-[1]">
            <div className="flex-1 relative tracking-[-0.02em] leading-[19px] inline-block max-w-full">
              Enhanced Visibility
            </div>
            <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] box-border z-[1] border-b-[1px] border-solid border-bluish-grey-sw" />
          </div>
        </div>
      </div>
      <div className="w-[1400px] flex flex-row items-start justify-start gap-[115px] max-w-full text-left text-31xl mq1350:flex-wrap mq450:gap-[29px] mq900:gap-[57px]">
        <div className="w-[586px] flex flex-col items-start justify-start pt-[127px] px-0 pb-0 box-border min-w-[586px] max-w-full mq1350:flex-1 mq450:pt-[83px] mq450:box-border mq900:min-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-[40px] max-w-full mq900:gap-[20px]">
            <div className="w-[562px] relative tracking-[-0.02em] leading-[60px] font-medium inline-block max-w-full z-[1] mq450:text-11xl mq450:leading-[36px] mq900:text-21xl mq900:leading-[48px]">
              100% Accuracy
            </div>
            <div className="self-stretch relative text-xl tracking-[-0.02em] leading-[32px] text-light-text-sw z-[1] mq450:text-base mq450:leading-[26px]">
              Stargo leverages industry-leading GenAI to verify all initial
              values, identify and autocorrect errors and complete all missing
              information in order to create 100% accurate, 100% compliant
              commercial invoices. 
            </div>
          </div>
        </div>
        <img
          className="h-[542px] flex-1 relative max-w-full overflow-hidden object-cover min-w-[454px] z-[1] mq900:min-w-full"
          loading="lazy"
          alt=""
          src="/website-images-ggs-jan24-stargo-2-edited17@2x.png"
        />
      </div>
    </section>
  );
};

export default FrameComponent;
