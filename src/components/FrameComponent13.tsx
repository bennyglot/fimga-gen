import { FunctionComponent } from "react";
import Types from "./Types";
import Icons from "./Icons";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-0 pb-[107px] pr-5 pl-[21px] box-border max-w-full text-center text-7xl text-dark-blue-sw font-x-hp-title mq925:pb-[45px] mq925:box-border mq1350:pb-[70px] mq1350:box-border ${className}`}
    >
      <div className="w-[1403px] flex flex-col items-start justify-start gap-[53px] max-w-full mq925:gap-[26px]">
        <div className="self-stretch flex flex-row items-start justify-start py-0 px-[7px] box-border max-w-full shrink-0 text-17xl text-light-text-sw">
          <div className="flex-1 flex flex-col items-start justify-start gap-[3.5px] max-w-full">
            <div className="self-stretch flex flex-col items-start justify-start max-w-full">
              <div className="self-stretch flex flex-row items-start justify-center py-0 pr-[21px] pl-5 box-border max-w-full shrink-0">
                <h1 className="m-0 w-[646px] relative text-inherit tracking-[-0.02em] leading-[60px] font-normal font-inherit inline-block shrink-0 max-w-full z-[1] mq925:text-10xl mq925:leading-[48px] mq450:text-3xl mq450:leading-[36px]">
                  <p className="[margin-block-start:0] [margin-block-end:1px]">
                    Stargo Solution by Numbers
                  </p>
                </h1>
              </div>
              <h1 className="m-0 self-stretch relative text-25xl tracking-[-0.02em] leading-[61.4px] font-medium font-inherit text-dark-blue-sw mt-[-4.6px] mq925:text-16xl mq925:leading-[48px] mq450:text-7xl mq450:leading-[36px]">
                Eliminate manual spot buy price processes
              </h1>
            </div>
            <div className="self-stretch relative text-xl tracking-[-0.02em] leading-[32px] mq450:text-base mq450:leading-[26px]">
              <p className="[margin-block-start:0] [margin-block-end:1px]">
                Stargo’s advanced GenAI and ML engines analyze carrier spot buy
                price data from all sources, including your email inbox,
              </p>
              <p className="[margin-block-start:0] [margin-block-end:1px]">{` to identify the best routes and rates for every shipment in seconds, allowing you to respond quickly and effectively to even the most urgent `}</p>
              <p className="m-0">
                or unexpected shipment POs without compromising on margin. 
              </p>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start pt-0 px-0 pb-[5px] box-border gap-[62.5px] max-w-full shrink-0 mq925:gap-[31px] mq450:gap-[16px]">
          <Types
            allWebsiteIcons6="/all-website-icons6@2x.png"
            reconciliationTime="Reconciliation time"
            h40Sec="60 h. → 40 sec."
          />
          <Types
            allWebsiteIcons6="/all-website-icons8@2x.png"
            reconciliationTime="Vendor cost reduction"
            h40Sec="10-20%"
            propPadding="44px 23px 46.5px"
            propGap="5.5px"
          />
          <Types
            allWebsiteIcons6="/all-website-icons2-2@2x.png"
            reconciliationTime="Vendor qualification time"
            h40Sec="+60%"
            propPadding="44px 22px 46.5px"
            propGap="20.5px"
          />
        </div>
        <div className="self-stretch flex flex-row items-start justify-center py-0 pr-[21px] pl-5 box-border max-w-full shrink-0">
          <div className="w-[914px] flex flex-row items-start justify-start gap-[62px] max-w-full mq925:flex-wrap mq925:gap-[31px] mq450:gap-[15px]">
            <Icons
              allWebsiteIcons132="/all-website-icons13-2@2x.png"
              marginGain="Margin gain"
              prop="+4%"
            />
            <Icons
              allWebsiteIcons132="/all-website-icons111@2x.png"
              marginGain="Productivity improvement"
              prop="+26%"
              propFlex="1"
              propGap="16.5px"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent1;
