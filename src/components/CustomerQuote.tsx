import { FunctionComponent } from "react";

export type CustomerQuoteType = {
  className?: string;
};

const CustomerQuote: FunctionComponent<CustomerQuoteType> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch flex flex-row items-end justify-between pt-[48.2px] px-[250px] pb-[71.6px] box-border relative max-w-full gap-[20px] text-left text-21xl text-dark-blue-sw font-x-hp-title mq450:pt-[31px] mq450:pb-[47px] mq450:box-border mq925:pl-[62px] mq925:pr-[62px] mq925:box-border mq1350:pl-[125px] mq1350:pr-[125px] mq1350:box-border mq1825:flex-wrap mq1825:justify-center ${className}`}
    >
      <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] bg-light-background-sw" />
      <div className="w-[700px] flex flex-col items-start justify-end pt-0 px-0 pb-2 box-border min-w-[700px] max-w-full mq1350:min-w-full mq1825:flex-1">
        <div className="self-stretch flex flex-col items-start justify-start gap-[11.8px] max-w-full z-[1]">
          <h1 className="m-0 self-stretch relative text-inherit tracking-[-0.02em] leading-[60px] font-medium font-inherit mq450:text-5xl mq450:leading-[36px] mq925:text-13xl mq925:leading-[48px]">
            Success Stories
          </h1>
          <div className="w-[534px] h-[128.9px] relative text-lgi tracking-[-0.02em] leading-[33.28px] text-gray-100 inline-block shrink-0 max-w-full">
            We’re proud to work with some of the biggest organizations in the
            supply chain, unlocking shipping efficiency at every opportunity. 
          </div>
        </div>
      </div>
      <div className="w-[600px] flex flex-col items-start justify-start gap-[19.7px] min-w-[600px] max-w-full text-5xl mq1350:min-w-full mq1825:flex-1">
        <img
          className="w-[81px] h-[57px] relative z-[1]"
          loading="lazy"
          alt=""
          src="/primary.svg"
        />
        <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-1 box-border max-w-full">
          <div className="flex-1 flex flex-col items-start justify-start gap-[14.2px] max-w-full">
            <h3 className="m-0 self-stretch relative text-inherit leading-[134.8%] font-semibold font-inherit shrink-0 z-[1] mq450:text-lgi mq450:leading-[26px]">
              <p className="m-0">{`The Stargo Solution dramatically improves `}</p>
              <p className="m-0">
                manual processes and turns them into an automated one in
                minutes.
              </p>
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

export default CustomerQuote;
