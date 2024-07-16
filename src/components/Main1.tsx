import { FunctionComponent } from "react";

export type Main1Type = {
  className?: string;
};

const Main1: FunctionComponent<Main1Type> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch bg-light-background-sw flex flex-col items-end justify-start pt-[71px] pb-[43px] pr-[250px] pl-[213px] box-border gap-[48px] max-w-full text-center text-17xl text-dark-blue-sw font-x-hp-title mq925:gap-[24px] mq925:pt-[46px] mq925:pb-7 mq925:pr-[62px] mq925:pl-[53px] mq925:box-border mq1350:pl-[106px] mq1350:pr-[125px] mq1350:box-border mq450:pt-[30px] mq450:pb-5 mq450:box-border ${className}`}
    >
      <div className="w-[1900px] h-[800px] relative bg-light-background-sw hidden max-w-full" />
      <div className="w-[1400px] flex flex-col items-start justify-start gap-[27px] max-w-full">
        <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
          <h1 className="m-0 w-[646px] relative text-inherit tracking-[-0.02em] leading-[60px] font-normal font-inherit inline-block shrink-0 max-w-full z-[1] mq925:text-10xl mq925:leading-[48px] mq450:text-3xl mq450:leading-[36px]">
            Feature Highlights
          </h1>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-[36px] max-w-full text-base-1 text-bluish-grey-sw mq925:gap-[18px]">
          <div className="flex-1 flex flex-row items-start justify-start pt-1.5 px-0 pb-[5px] box-border relative min-w-[297px] max-w-full z-[1]">
            <div className="flex-1 relative tracking-[-0.02em] leading-[19px] inline-block max-w-full">
              GenAI-powered reconciliation
            </div>
            <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] box-border z-[1] border-b-[1px] border-solid border-bluish-grey-sw" />
          </div>
          <div className="flex-1 flex flex-row items-start justify-start pt-1.5 px-0 pb-[5px] box-border relative min-w-[297px] max-w-full z-[1]">
            <div className="flex-1 relative tracking-[-0.02em] leading-[19px] inline-block max-w-full">
              Data extraction
            </div>
            <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] box-border z-[1] border-b-[1px] border-solid border-bluish-grey-sw" />
          </div>
          <div className="flex-1 flex flex-row items-start justify-start pt-1.5 px-0 pb-[5px] box-border relative min-w-[297px] max-w-full z-[1] text-blue-sw">
            <div className="flex-1 relative tracking-[-0.02em] leading-[19px] font-medium inline-block max-w-full">
              Stargo LLM
            </div>
            <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] box-border z-[1] border-b-[1px] border-solid border-blue-sw" />
          </div>
          <div className="flex-1 flex flex-row items-start justify-start pt-1.5 px-0 pb-[5px] box-border relative min-w-[297px] max-w-full z-[1]">
            <div className="flex-1 relative tracking-[-0.02em] leading-[19px] inline-block max-w-full">
              Instant Appraisal and Analysis
            </div>
            <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] box-border z-[1] border-b-[1px] border-solid border-bluish-grey-sw" />
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start gap-[55px] max-w-full text-left text-31xl mq925:gap-[27px] mq1825:flex-wrap">
        <img
          className="h-[521px] flex-1 relative max-w-full overflow-hidden object-cover min-w-[510px] z-[1] mq1350:min-w-full"
          loading="lazy"
          alt=""
          src="/sllm--machine-learning--14-1@2x.png"
        />
        <div className="w-[598px] flex flex-col items-start justify-start pt-[104px] px-0 pb-0 box-border min-w-[598px] max-w-full mq1350:min-w-full mq1825:flex-1">
          <div className="self-stretch flex flex-col items-start justify-start gap-[23px] max-w-full">
            <h1 className="m-0 w-[573.5px] relative text-inherit tracking-[-0.02em] leading-[60px] font-medium font-inherit inline-block max-w-full z-[1] mq925:text-21xl mq925:leading-[48px] mq450:text-11xl mq450:leading-[36px]">
              Stargo LLM
            </h1>
            <div className="self-stretch relative text-xl tracking-[-0.02em] leading-[32px] text-light-text-sw z-[1] mq450:text-base mq450:leading-[26px]">
              The first LLM built and trained for freight, logistics, and supply
              chain, the SLLM harnesses real-time data to apply deep industry
              context to the data automation process, analyzing historical and
              current data to predict trends, solve problems, and identify
              cost-savings.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main1;
