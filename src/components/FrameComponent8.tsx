import { FunctionComponent } from "react";
import FrameComponent9 from "./FrameComponent9";

export type FrameComponent8Type = {
  className?: string;
};

const FrameComponent8: FunctionComponent<FrameComponent8Type> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-0 pb-[107px] pr-5 pl-[21px] box-border max-w-full text-center text-7xl text-dark-blue-sw font-x-hp-title mq925:pb-[45px] mq925:box-border mq1350:pb-[70px] mq1350:box-border ${className}`}
    >
      <div className="w-[1403px] flex flex-col items-start justify-start gap-[56.5px] max-w-full mq925:gap-[28px]">
        <div className="self-stretch flex flex-row items-start justify-start py-0 px-[7px] box-border max-w-full shrink-0 text-17xl text-light-text-sw">
          <div className="flex-1 flex flex-col items-start justify-start gap-[3.1px] max-w-full">
            <div className="self-stretch flex flex-col items-start justify-start max-w-full">
              <div className="self-stretch flex flex-row items-start justify-center py-0 pr-[21px] pl-5 box-border max-w-full">
                <h1 className="m-0 w-[646px] relative text-inherit tracking-[-0.02em] leading-[60px] font-normal font-inherit inline-block shrink-0 max-w-full z-[1] mq925:text-10xl mq925:leading-[48px] mq450:text-3xl mq450:leading-[36px]">
                  <p className="[margin-block-start:0] [margin-block-end:1px]">
                    Stargo Solution by Numbers
                  </p>
                </h1>
              </div>
              <h1 className="m-0 self-stretch relative text-25xl tracking-[-0.02em] leading-[61.9px] font-medium font-inherit text-dark-blue-sw mt-[-4.7px] mq925:text-16xl mq925:leading-[48px] mq450:text-7xl mq450:leading-[36px]">
                Supercharge carrier and forwarder selection processes
              </h1>
            </div>
            <div className="self-stretch relative text-xl tracking-[-0.02em] leading-[32px] mq450:text-base mq450:leading-[26px]">{`Leverage the power of the Stargo LLM to fully automate carrier contract rate reconciliation. Effortlessly balance cost versus delivery deadline requirements for maximum profitability on every shipment, while automatically identifying overcharge discrepancies. Stargo makes it easy to evaluate shipping proposals and tenders applying advanced comparative analytics to optimize procurement based on your business priorities. `}</div>
          </div>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[62.5px] max-w-full shrink-0 mq925:gap-[31px] mq450:gap-[16px]">
          <FrameComponent9
            allWebsiteIcons6="/all-website-icons6@2x.png"
            tenderReconciliationTime="Tender reconciliation time"
            h40Sec="60 h. → 40 sec."
          />
          <FrameComponent9
            allWebsiteIcons6="/all-website-icons8@2x.png"
            tenderReconciliationTime="Vendor cost reduction"
            h40Sec="10-20%"
            propPadding="44px 23px 46.5px"
            propGap="5.5px"
            propMinWidth="319px"
          />
          <FrameComponent9
            allWebsiteIcons6="/all-website-icons2-2@2x.png"
            tenderReconciliationTime="Vendor qualification time"
            h40Sec="+60%"
            propPadding="44px 22px 46.5px"
            propGap="20.5px"
            propMinWidth="319px"
          />
        </div>
        <div className="self-stretch flex flex-row items-start justify-center py-0 pr-[21px] pl-5 box-border max-w-full shrink-0">
          <div className="w-[914px] flex flex-row items-start justify-start gap-[62px] max-w-full mq925:flex-wrap mq925:gap-[31px] mq450:gap-[15px]">
            <div className="flex-[0.949] shadow-[0px_6px_35px_rgba(180,_182,_187,_0.5)] rounded-mini bg-white flex flex-col items-start justify-start pt-[33px] pb-[38.5px] pr-[26px] pl-7 box-border gap-[24.5px] min-w-[277px] max-w-full mq925:flex-1">
              <div className="w-[426px] h-[296px] relative shadow-[0px_6px_35px_rgba(180,_182,_187,_0.5)] rounded-mini bg-white hidden max-w-full" />
              <div className="self-stretch flex flex-row items-start justify-center py-0 pr-0.5 pl-0">
                <img
                  className="h-[105px] w-[105px] relative object-cover z-[1]"
                  loading="lazy"
                  alt=""
                  src="/all-website-icons13-2@2x.png"
                />
              </div>
              <div className="self-stretch relative tracking-[-0.02em] font-semibold z-[1] mq450:text-2xl">
                <p className="[margin-block-start:0] [margin-block-end:1px]">
                  Margin gain
                </p>
                <p className="m-0 text-17xl text-blue-sw">+4%</p>
              </div>
            </div>
            <FrameComponent9
              allWebsiteIcons6="/all-website-icons111@2x.png"
              tenderReconciliationTime="Productivity improvement"
              h40Sec="+26%"
              propPadding="31px 17px 43.5px"
              propGap="16.5px"
              propMinWidth="277px"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent8;
