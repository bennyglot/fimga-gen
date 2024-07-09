import { FunctionComponent } from "react";
import GroupComponent1 from "./GroupComponent1";
import FrameComponent3 from "./FrameComponent3";
import ProductivityIcon from "./ProductivityIcon";

export type FrameComponent2Type = {
  className?: string;
};

const FrameComponent2: FunctionComponent<FrameComponent2Type> = ({
  className = "",
}) => {
  return (
    <section
      className={`w-[1872px] flex flex-row items-start justify-center pt-0 px-5 pb-[125px] box-border max-w-full text-center text-5xl text-dark-blue-sw font-x-hp-title mq450:pb-[34px] mq450:box-border mq925:pb-[53px] mq925:box-border mq1350:pb-[81px] mq1350:box-border ${className}`}
    >
      <div className="w-[1468px] flex flex-col items-start justify-start gap-[118px] max-w-full mq450:gap-[29px] mq925:gap-[59px]">
        <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[17px] box-border max-w-full">
          <div className="flex-1 flex flex-col items-start justify-start gap-[69px] max-w-full mq450:gap-[17px] mq925:gap-[34px]">
            <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[3px] box-border max-w-full">
              <div className="flex-1 flex flex-row flex-wrap items-start justify-start gap-[151px] max-w-full mq450:gap-[19px] mq925:gap-[38px] mq1350:gap-[75px]">
                <div className="flex-1 flex flex-row items-start justify-start gap-[41px] min-w-[423px] max-w-full mq925:flex-wrap mq925:gap-[20px] mq925:min-w-full">
                  <div className="flex-1 flex flex-col items-start justify-start gap-[30px] min-w-[198px]">
                    <GroupComponent1
                      processCost="Process cost"
                      allWebsiteIcons7="/all-website-icons7@2x.png"
                      prop="~$60 "
                      prop1="→ $3.60"
                    />
                    <GroupComponent1
                      processCost="Data accuracy"
                      allWebsiteIcons7="/all-website-icons5@2x.png"
                      prop="40-60% "
                      prop1="→ 100%"
                    />
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start gap-[30px] min-w-[198px]">
                    <GroupComponent1
                      processCost="Process time"
                      allWebsiteIcons7="/all-website-icons6@2x.png"
                      prop="Hours "
                      prop1="→ Seconds"
                    />
                    <GroupComponent1
                      processCost="Productivity loss"
                      allWebsiteIcons7="/all-website-icons8@2x.png"
                      prop="~40min. "
                      prop1="→ Zero"
                    />
                  </div>
                </div>
                <div className="flex-1 flex flex-col items-start justify-start pt-[114.3px] px-0 pb-0 box-border min-w-[420px] max-w-full text-left text-29xl-7 mq450:pt-[74px] mq450:box-border mq925:min-w-full">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[26.7px] max-w-full">
                    <div className="self-stretch relative tracking-[-0.02em] leading-[58.46px] font-medium mq450:text-10xl mq450:leading-[35px] mq925:text-20xl mq925:leading-[47px]">
                      Turning Data Challenges into Revenue-Boosting Solutions
                    </div>
                    <div className="w-[588px] relative text-xl tracking-[-0.02em] leading-[32px] text-light-text-sw inline-block max-w-full mq450:text-base mq450:leading-[26px]">
                      Effortlessly collect, cleanse, and connect with Stardox
                      Gen-Ai. Transform Freight logistics and Spply chain chaos
                      into excellence, automating your processes
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[1393px] flex flex-row items-end justify-start gap-[142px] max-w-full mq450:gap-[18px] mq925:gap-[35px] mq1350:flex-wrap mq1350:gap-[71px]">
              <FrameComponent3
                transformYourFreightDocum="Solving the 20%"
                actionableInsights="Revenue Leak: Structured Data for Success!"
                stardoxAGenAiPoweredSolut="The freight logistics and supply chain industry's data problem hampers automation, growth, and customer acquisition. Solving it through reliable, structured data is key to future success"
                propWidth="unset"
                propFlexDirection="column"
                propFlex="1"
                propMinWidth="431px"
              />
              <img
                className="w-[588px] relative max-h-full object-cover max-w-full mq1350:flex-1"
                loading="lazy"
                alt=""
                src="/hp-img--0003-vectorsmartobject@2x.png"
              />
            </div>
          </div>
        </div>
        <div className="w-[1439px] flex flex-row items-end justify-between max-w-full gap-[20px] text-left text-base mq1350:flex-wrap">
          <div className="w-[699px] grid flex-row items-end justify-start gap-[29px] min-w-[699px] max-w-full grid-cols-[repeat(3,_minmax(164px,_1fr))] mq450:grid-cols-[minmax(164px,_1fr)] mq925:min-w-full mq925:justify-center mq925:grid-cols-[repeat(2,_minmax(164px,_285px))] mq1350:flex-1">
            <div className="flex flex-col items-start justify-start py-0 pr-1.5 pl-0 gap-[18px]">
              <img
                className="w-[197px] h-[197px] relative object-contain"
                loading="lazy"
                alt=""
                src="/all-website-icons14@2x.png"
              />
              <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-5">
                <div className="flex-1 relative tracking-[-0.02em] leading-[143.5%]">
                  <p className="[margin-block-start:0] [margin-block-end:13.93px] text-xl">
                    <b>Supercharge Productivity</b>
                  </p>
                  <p className="[margin-block-start:0] [margin-block-end:13.93px]">
                    Revolutionizing Proposals: From 5
                  </p>
                  <p className="m-0">Hours to 3.6 Seconds</p>
                </div>
              </div>
            </div>
            <ProductivityIcon
              allWebsiteIcons15="/all-website-icons15@2x.png"
              improveConversion="Improve Conversion"
              elevateYourSuccessInWeeks="Elevate Your Success in Weeks: Winning Better Deals, Faster"
            />
            <ProductivityIcon
              allWebsiteIcons15="/all-website-icons16@2x.png"
              improveConversion="Higher Margins"
              elevateYourSuccessInWeeks="Unlock Margin Potential in Real-Time: Optimize Routes and Rates"
            />
          </div>
          <div className="w-[617px] flex flex-col items-start justify-start pt-0 px-0 pb-[73px] box-border min-w-[617px] min-h-[278px] max-w-full text-27xl-5 mq925:min-w-full mq1350:flex-1">
            <div className="self-stretch flex flex-col items-start justify-start gap-[28.8px] max-w-full">
              <div className="self-stretch relative tracking-[-0.02em] leading-[55.84px] font-medium mq450:text-9xl mq450:leading-[34px] mq925:text-18xl mq925:leading-[45px]">
                Supercharge Your Growth with AI-Powered Pricing!
              </div>
              <div className="w-[603px] relative text-xl tracking-[-0.02em] leading-[32px] text-light-text-sw inline-block max-w-full mq450:text-base mq450:leading-[26px]">
                Stargo extracts, cleanses, and enriches data across the entire
                shipment lifecycle, regardless of format or source
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent2;
