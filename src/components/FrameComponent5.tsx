import { FunctionComponent } from "react";
import AccuracyCategory from "./AccuracyCategory";

export type FrameComponent5Type = {
  className?: string;
};

const FrameComponent5: FunctionComponent<FrameComponent5Type> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-[102px] box-border max-w-full text-center text-17xl text-light-text-sw font-x-hp-title mq925:pb-[43px] mq925:box-border mq1350:pb-[66px] mq1350:box-border ${className}`}
    >
      <div className="w-[1388px] flex flex-col items-start justify-start gap-[55px] max-w-full mq925:gap-[27px]">
        <div className="w-[1364px] flex flex-row items-start justify-start py-0 px-3 box-border max-w-full shrink-0">
          <div className="flex-1 flex flex-col items-end justify-start gap-[31.6px] max-w-full mq925:gap-[16px]">
            <div className="w-[1315px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
              <div className="w-[1011px] flex flex-col items-start justify-start max-w-full">
                <div className="self-stretch flex flex-row items-start justify-center py-0 pr-[21px] pl-5 box-border max-w-full">
                  <h1 className="m-0 w-[646px] relative text-inherit tracking-[-0.02em] leading-[60px] font-normal font-inherit inline-block shrink-0 max-w-full z-[1] mq925:text-10xl mq925:leading-[48px] mq450:text-3xl mq450:leading-[36px]">
                    <p className="[margin-block-start:0] [margin-block-end:1px]">
                      Stargo Solution by Numbers
                    </p>
                  </h1>
                </div>
                <h1 className="m-0 self-stretch h-[50px] relative text-25xl tracking-[-0.02em] leading-[60px] font-medium font-inherit text-dark-blue-sw inline-block mt-[-4.7px] mq925:text-16xl mq925:leading-[48px] mq450:text-7xl mq450:leading-[36px]">
                  Zero error. Maximum customer satisfaction.
                </h1>
              </div>
            </div>
            <div className="self-stretch relative text-xl tracking-[-0.02em] leading-[32px] mq450:text-base mq450:leading-[26px]">
              Stargo uses advanced GenAI and ML to streamline PO processing,
              eliminating manual data entry errors and improving semi-structured
              data quality from APIs and EDIs to 100% accuracy. Automatic
              invoice generation and return expedites the sales cycle by
              reducing response times for enhanced customer satisfaction.
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[56px] max-w-full shrink-0 text-7xl text-dark-blue-sw mq925:gap-[28px]">
          <AccuracyCategory
            allWebsiteIcons5="/all-website-icons5@2x.png"
            purchaseOrderAccuracy="Purchase order accuracy"
            prop="30% → 100%"
          />
          <AccuracyCategory
            allWebsiteIcons5="/all-website-icons3-1@2x.png"
            purchaseOrderAccuracy="Invoice accuracy"
            prop="60% → 100%"
            propGap="23px"
            propPadding="57px 36px 35px 41px"
          />
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[56px] max-w-full shrink-0 mq925:gap-[28px]">
          <AccuracyCategory
            allWebsiteIcons5="/all-website-icons18-1@2x.png"
            purchaseOrderAccuracy="Deliverability improvement"
            prop="+5%"
            propGap="21px"
            propPadding="38px 38px 35px"
          />
          <AccuracyCategory
            allWebsiteIcons5="/all-website-icons112@2x.png"
            purchaseOrderAccuracy="Productivity improvement"
            prop="+26%"
            propGap="24px"
            propPadding="42px 36px 35px"
          />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent5;
