import { FunctionComponent } from "react";

export type ComponentType = {
  className?: string;
};

const Component: FunctionComponent<ComponentType> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch bg-light-background-sw flex flex-row items-start justify-start pt-[48.2px] pb-[45.7px] pr-[223px] pl-[250px] box-border gap-[50px] max-w-full z-[2] text-left text-21xl text-dark-blue-sw font-x-hp-title mq1350:pl-[125px] mq1350:pr-[111px] mq1350:box-border mq450:pt-[31px] mq450:pb-[30px] mq450:box-border mq900:gap-[25px] mq900:pl-[62px] mq900:pr-[55px] mq900:box-border mq1750:flex-wrap ${className}`}
    >
      <div className="h-[360px] w-[1900px] relative bg-light-background-sw hidden max-w-full" />
      <div className="flex-1 flex flex-col items-start justify-start pt-[31.5px] px-0 pb-0 box-border min-w-[455px] max-w-full mq1350:min-w-full">
        <div className="self-stretch flex flex-col items-start justify-start gap-[11.8px] max-w-full">
          <h1 className="m-0 self-stretch relative text-inherit tracking-[-0.02em] leading-[60px] font-medium font-inherit shrink-0 z-[1] mq450:text-5xl mq450:leading-[36px] mq900:text-13xl mq900:leading-[48px]">
            Success Stories
          </h1>
          <div className="w-[534px] h-[128.9px] relative text-lgi tracking-[-0.02em] leading-[33.28px] text-gray inline-block shrink-0 max-w-full z-[1]">
            We’re proud to work with some of the biggest organizations in the
            supply chain, unlocking shipping efficiency at every opportunity. 
          </div>
        </div>
      </div>
      <div className="w-[677px] flex flex-col items-start justify-start gap-[19.8px] min-w-[677px] max-w-full text-5xl mq1350:min-w-full mq1750:flex-1">
        <img
          className="w-[81px] h-[57px] relative z-[1]"
          loading="lazy"
          alt=""
          src="/primary.svg"
        />
        <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-1 box-border max-w-full">
          <div className="flex-1 flex flex-col items-start justify-start gap-[8px] max-w-full">
            <h3 className="m-0 self-stretch relative text-inherit leading-[134.8%] font-semibold font-inherit shrink-0 z-[1] mq450:text-lgi mq450:leading-[26px]">
              Thanks to AI-driven automation and its own LLM, StarDox is able to
              amplify efficiency and productivity outcomes in ways that create a
              cascade of mutual advantages across the entire port ecosystem
            </h3>
            <div className="w-[252.9px] relative text-mid text-grey inline-block shrink-0 z-[1]">
              <p className="m-0">Person’s Title</p>
              <p className="m-0">Company Name</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Component;
