import { FunctionComponent } from "react";

export type RoiBannerType = {
  className?: string;
};

const RoiBanner: FunctionComponent<RoiBannerType> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[77px] box-border max-w-full text-left text-18xl text-light-background-sw font-x-hp-title mq450:pb-[50px] mq450:box-border ${className}`}
    >
      <div className="h-[100px] w-[100px] relative overflow-hidden shrink-0 hidden" />
      <div className="flex-1 flex flex-row items-start justify-start py-[35px] px-[249px] box-border relative min-h-[320px] max-w-full z-[1] mq450:pl-5 mq450:pr-5 mq450:box-border mq925:pl-[62px] mq925:pr-[62px] mq925:box-border mq1350:pl-[124px] mq1350:pr-[124px] mq1350:box-border">
        <img
          className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
          loading="lazy"
          alt=""
          src="/111-1@2x.png"
        />
        <div className="w-[701px] flex flex-col items-start justify-start gap-[26px] max-w-full z-[1]">
          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-px box-border max-w-full">
            <div className="flex-1 flex flex-col items-start justify-start gap-[2px] max-w-full">
              <h1 className="m-0 self-stretch relative text-inherit tracking-[-0.02em] leading-[60px] font-semibold font-inherit mq450:text-3xl mq450:leading-[36px] mq925:text-11xl mq925:leading-[48px]">
                See ROI in 12 weeks
              </h1>
              <div className="w-[600px] relative text-xl font-light text-line-sw inline-block max-w-full mq450:text-base">
                <p className="m-0">{`Stargo users see a proven return on investment `}</p>
                <p className="m-0">
                  and operational profitability gains in just 12 weeks.
                </p>
                <p className="m-0">
                  Non-disruptive implementation in 4 weeks or less.
                </p>
              </div>
            </div>
          </div>
          <button className="cursor-pointer [border:none] py-[13px] px-8 bg-blue-sw rounded-6xl flex flex-row items-start justify-start whitespace-nowrap hover:bg-dodgerblue">
            <div className="relative text-base font-x-hp-title text-white text-left inline-block min-w-[115px]">
              ROI Calculator
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default RoiBanner;
