import { FunctionComponent } from "react";

export type FrameComponent3Type = {
  className?: string;
};

const FrameComponent3: FunctionComponent<FrameComponent3Type> = ({
  className = "",
}) => {
  return (
    <div
      className={`w-[1797px] flex flex-row items-start justify-center pt-0 px-5 pb-[35px] box-border max-w-full text-left text-31xl text-dark-blue-sw font-x-hp-title ${className}`}
    >
      <div className="w-[1525px] flex flex-row items-end justify-between max-w-full gap-[20px] mq1750:flex-wrap">
        <div className="h-[334px] w-[844px] flex flex-col items-start justify-end pt-0 px-0 pb-[3px] box-border min-w-[844px] max-w-full mq1350:min-w-full mq1750:flex-1">
          <img
            className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover mq1750:self-stretch mq1750:w-auto"
            loading="lazy"
            alt=""
            src="/lobster-page-logos-copy-1@2x.png"
          />
        </div>
        <div className="w-[586px] flex flex-col items-start justify-start gap-[34px] min-w-[586px] max-w-full mq900:gap-[17px] mq900:min-w-full mq1750:flex-1">
          <div className="self-stretch flex flex-col items-start justify-start gap-[19px] max-w-full">
            <h1 className="m-0 self-stretch relative text-inherit tracking-[-0.02em] leading-[60px] font-medium font-inherit mq450:text-11xl mq450:leading-[36px] mq900:text-21xl mq900:leading-[48px]">
              <p className="[margin-block-start:0] [margin-block-end:1px]">
                Platform
              </p>
              <p className="m-0">Integration </p>
            </h1>
            <div className="w-[459px] relative text-xl tracking-[-0.02em] leading-[32px] text-gray inline-block max-w-full mq450:text-base mq450:leading-[26px]">
              <p className="[margin-block-start:0] [margin-block-end:1px]">
                Stargo now integrates with the world’s
              </p>
              <p className="m-0">largest supply chain platforms. </p>
            </div>
          </div>
          <button className="cursor-pointer [border:none] py-[13px] px-[27px] bg-dark-blue rounded-6xl flex flex-row items-start justify-start whitespace-nowrap hover:bg-steelblue-200">
            <div className="relative text-base font-x-hp-title text-white text-left inline-block min-w-[96px]">
              Get a Demo
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent3;
