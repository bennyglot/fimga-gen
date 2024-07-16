import { FunctionComponent } from "react";

export type FrameComponent2Type = {
  className?: string;
};

const FrameComponent2: FunctionComponent<FrameComponent2Type> = ({
  className = "",
}) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-start pt-[17px] pb-0 pr-[159px] pl-40 box-border relative gap-[24px] max-w-full text-center text-2xl text-blue-sw font-font-awesome-6-pro mq925:pl-10 mq925:pr-[39px] mq925:box-border mq1350:pl-20 mq1350:pr-[79px] mq1350:box-border mq1825:flex-wrap ${className}`}
    >
      <div className="w-[50px] !m-[0] absolute top-[0px] left-[0px] shadow-[3px_3px_14px_rgba(0,_40,_70,_0.2)] rounded-tl-none rounded-tr-3xs rounded-br-3xs rounded-bl-none bg-white flex flex-row items-start justify-start p-2.5 box-border z-[1]">
        <div className="h-[50px] w-[50px] relative rounded-tl-none rounded-tr-3xs rounded-br-3xs rounded-bl-none bg-white hidden" />
        <div className="flex-1 relative leading-[150%] font-light z-[2] mq450:text-mid mq450:leading-[25px]">
          
        </div>
      </div>
      <div className="flex-1 flex flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border min-w-[519px] max-w-full text-left text-base text-bluish-grey-sw font-x-hp-title mq925:min-w-full">
        <div className="self-stretch flex flex-col items-start justify-start gap-[50px] max-w-full mq450:gap-[25px]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[20px] max-w-full">
            <div className="flex flex-row items-start justify-start gap-[15px] max-w-full z-[1] mq925:flex-wrap">
              <div className="relative tracking-[-0.02em] leading-[28px] font-light inline-block min-w-[67px]">
                Shippers
              </div>
              <div className="flex flex-col items-start justify-start pt-[8.7px] px-0 pb-0">
                <img
                  className="w-1.5 h-[10.6px] relative object-contain"
                  alt=""
                  src="/expand-more.svg"
                />
              </div>
              <div className="relative tracking-[-0.02em] leading-[28px] font-light inline-block min-w-[100px]">
                Procurement
              </div>
              <div className="flex flex-col items-start justify-start pt-[8.7px] px-0 pb-0">
                <img
                  className="w-1.5 h-[10.6px] relative object-contain"
                  alt=""
                  src="/expand-more-1.svg"
                />
              </div>
              <div className="relative tracking-[-0.02em] leading-[28px] text-dark-blue-sw">
                Carrier Contracted Buy Prices
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[16px] max-w-full text-31xl text-dark-blue-sw">
              <h1 className="m-0 self-stretch relative text-inherit tracking-[-0.02em] leading-[60px] font-medium font-inherit z-[1] mq925:text-21xl mq925:leading-[48px] mq450:text-11xl mq450:leading-[36px]">
                <p className="[margin-block-start:0] [margin-block-end:1px]">{`Carrier Spot `}</p>
                <p className="m-0">Buy Prices</p>
              </h1>
              <div className="w-[738px] relative text-xl tracking-[-0.02em] leading-[32px] text-light-text-sw inline-block max-w-full z-[1] mq450:text-base mq450:leading-[26px]">
                Increase margin resilience and mitigate shipping costs with
                GenAI/ML-powered carrier spot buy price reconciliation. Stargo
                analyzes historical and current carrier spot buy prices in
                real-time, identifying the most profitable shipping options for
                your cargo. Supercharge your pricing strategies with 100%
                visibility into the best spot buy prices for every shipment. 
              </div>
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[27px] max-w-full mq925:flex-wrap">
            <button className="cursor-pointer [border:none] py-[15.5px] px-[31px] bg-dark-blue-sw rounded-93xl-5 flex flex-row items-start justify-start whitespace-nowrap z-[1] hover:bg-steelblue-100">
              <div className="relative text-base font-x-hp-title text-white text-left inline-block min-w-[128px]">
                Use Case Demo
              </div>
            </button>
            <button className="cursor-pointer [border:none] py-[15.5px] px-[37px] bg-dark-blue rounded-93xl-5 flex flex-row items-start justify-start whitespace-nowrap z-[1] hover:bg-steelblue-200">
              <div className="relative text-base font-x-hp-title text-white text-left inline-block min-w-[115px]">
                ROI Calculator
              </div>
            </button>
          </div>
        </div>
      </div>
      <img
        className="w-[759px] relative max-h-full object-cover max-w-full z-[1] mq1825:flex-1"
        loading="lazy"
        alt=""
        src="/website-images-ggs-jan24-stargo-2-edited7@2x.png"
      />
    </div>
  );
};

export default FrameComponent2;
