import { FunctionComponent } from "react";
import AccuracyDeliverability from "./AccuracyDeliverability";

export type BottomType = {
  className?: string;
};

const Bottom: FunctionComponent<BottomType> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-[126px] box-border max-w-full text-center text-17xl text-light-text-sw font-x-hp-title mq1350:pb-[82px] mq1350:box-border mq900:pb-[53px] mq900:box-border ${className}`}
    >
      <div className="w-[1400px] flex flex-col items-start justify-start gap-[40px] max-w-full mq900:gap-[20px]">
        <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[11px] pl-1.5 box-border max-w-full shrink-0">
          <div className="flex-1 flex flex-col items-end justify-start gap-[12.1px] max-w-full">
            <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[26px] box-border max-w-full">
              <div className="w-[1011px] flex flex-col items-start justify-start max-w-full">
                <div className="self-stretch flex flex-row items-start justify-center py-0 pr-[21px] pl-5 box-border max-w-full">
                  <h1 className="m-0 w-[646px] relative text-inherit tracking-[-0.02em] leading-[60px] font-normal font-inherit inline-block shrink-0 max-w-full z-[1] mq450:text-3xl mq450:leading-[36px] mq900:text-10xl mq900:leading-[48px]">
                    <p className="[margin-block-start:0] [margin-block-end:1px]">
                      Stargo Solution by Numbers
                    </p>
                  </h1>
                </div>
                <h1 className="m-0 self-stretch relative text-25xl tracking-[-0.02em] leading-[61.9px] font-medium font-inherit text-dark-blue-sw mt-[-4.7px] mq450:text-7xl mq450:leading-[36px] mq900:text-16xl mq900:leading-[48px]">
                  Supercharge inventory transport efficiency
                </h1>
              </div>
            </div>
            <div className="self-stretch relative text-lgi tracking-[-0.02em] leading-[32px]">
              Stargo’s advanced GenAI automatically extracts and structures
              relevant data from POs, BoLs, commercial invoices, and other
              documentation to generate accurate, fully optimized loading lists.
              Once generated, Stargo distributes loading lists to relevant
              stakeholders automatically via e-mail or API/EDI for smoother
              delivery and receiving processes, whilst ensuring loading list
              documentation meets regional customs compliance requirements. 
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start pt-0 px-0 pb-[15px] box-border gap-[66px] max-w-full shrink-0 text-7xl text-dark-blue-sw mq450:gap-[16px] mq900:gap-[33px]">
          <AccuracyDeliverability
            websiteIcons18="/website-icons-18@2x.png"
            customsClearanceAccuracy="Customs Clearance Accuracy  "
            prop="40% → 100%"
          />
          <AccuracyDeliverability
            websiteIcons18="/website-icons-22@2x.png"
            customsClearanceAccuracy="On-time delivery rate improvement"
            prop="+15%"
            propPadding="45px 38px 38px"
            propGap="24.7px"
          />
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[68px] max-w-full shrink-0 mq450:gap-[17px] mq900:gap-[34px]">
          <AccuracyDeliverability
            websiteIcons18="/all-website-icons6@2x.png"
            customsClearanceAccuracy="Deliverability improvement"
            prop="+5%"
            propPadding="49px 38px 35px"
            propGap="16px"
          />
          <AccuracyDeliverability
            websiteIcons18="/all-website-icons112@2x.png"
            customsClearanceAccuracy="Productivity improvement"
            prop="+2-5%"
            propPadding="59px 36px 35px"
            propGap="7px"
          />
        </div>
      </div>
    </section>
  );
};

export default Bottom;
