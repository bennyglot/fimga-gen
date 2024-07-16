import { FunctionComponent } from "react";

export type PageTitleType = {
  className?: string;
};

const PageTitle: FunctionComponent<PageTitleType> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-start pt-5 px-40 pb-0 box-border relative gap-[89px] max-w-full text-center text-2xl text-blue-sw font-font-awesome-6-pro mq925:gap-[22px] mq925:pl-10 mq925:pr-10 mq925:box-border mq1350:gap-[44px] mq1350:pl-20 mq1350:pr-20 mq1350:box-border mq1825:flex-wrap ${className}`}
    >
      <div className="h-[50px] w-[50px] absolute !m-[0] top-[0px] left-[0px] shadow-[3px_3px_14px_rgba(0,_40,_70,_0.2)] rounded-tl-none rounded-tr-3xs rounded-br-3xs rounded-bl-none bg-white">
        <div className="absolute top-[0px] left-[0px] rounded-tl-none rounded-tr-3xs rounded-br-3xs rounded-bl-none bg-white w-full h-full hidden" />
        <div className="absolute top-[0px] left-[0px] shadow-[3px_3px_14px_rgba(0,_40,_70,_0.2)] rounded-tl-none rounded-tr-3xs rounded-br-3xs rounded-bl-none bg-white w-full h-full z-[3]">
          <div className="absolute top-[10px] left-[10px] leading-[150%] font-light hidden items-center justify-center w-[30px] h-[30px] mq450:text-mid mq450:leading-[25px]">
            
          </div>
          <div className="absolute top-[0px] left-[0px] rounded-tl-none rounded-tr-3xs rounded-br-3xs rounded-bl-none bg-white w-full h-full hidden" />
          <div className="absolute top-[10px] left-[10px] leading-[150%] font-light flex items-center justify-center w-[30px] h-[30px] z-[4] mq450:text-mid mq450:leading-[25px]">
            
          </div>
        </div>
      </div>
      <div className="w-[690px] flex flex-col items-start justify-start gap-[34px] min-w-[690px] max-w-full text-left text-base text-bluish-grey-sw font-x-hp-title mq925:gap-[17px] mq1350:min-w-full mq1825:flex-1">
        <div className="self-stretch flex flex-col items-start justify-start gap-[40px] max-w-full mq925:gap-[20px]">
          <div className="flex flex-row items-start justify-start gap-[15px] z-[3] mq450:flex-wrap">
            <div className="relative tracking-[-0.02em] leading-[28px] font-light inline-block min-w-[67px]">
              Shippers
            </div>
            <div className="flex flex-col items-start justify-start pt-[8.7px] px-0 pb-0">
              <img
                className="w-1.5 h-[10.6px] relative object-contain"
                loading="lazy"
                alt=""
                src="/expand-more.svg"
              />
            </div>
            <div className="relative tracking-[-0.02em] leading-[28px] font-light inline-block min-w-[41px]">
              Sales
            </div>
            <div className="flex flex-col items-start justify-start pt-[8.7px] px-0 pb-0">
              <img
                className="w-1.5 h-[10.6px] relative object-contain"
                alt=""
                src="/expand-more-11.svg"
              />
            </div>
            <div className="relative tracking-[-0.02em] leading-[28px] text-dark-blue-sw inline-block min-w-[128px]">
              Purchase Orders
            </div>
          </div>
          <h1 className="m-0 w-[663px] relative text-31xl tracking-[-0.02em] leading-[60px] font-medium font-inherit text-dark-blue-sw inline-block max-w-full z-[3] mq925:text-21xl mq925:leading-[48px] mq450:text-11xl mq450:leading-[36px]">
            Purchase Orders
          </h1>
          <div className="self-stretch relative text-xl tracking-[-0.02em] leading-[32px] text-light-text-sw z-[3] mq450:text-base mq450:leading-[26px]">
            Increase on-time delivery rates, boost customer satisfaction, and
            eliminate hours of manual data processing with GenAI-powered
            automated PO processing. Stargo’s LLM automatically extracts,
            cleanses, enriches, and processes incoming PO data in any format and
            language, generating and dispatching 100% accurate invoices to
            buyers in seconds without manual interventions or API integrations. 
          </div>
        </div>
        <div className="flex flex-row items-start justify-start gap-[27px] max-w-full mq925:flex-wrap">
          <button className="cursor-pointer [border:none] py-[15.5px] px-[31px] bg-dark-blue-sw rounded-93xl-5 flex flex-row items-start justify-start whitespace-nowrap z-[3] hover:bg-steelblue-100">
            <div className="relative text-base font-x-hp-title text-white text-left inline-block min-w-[128px]">
              Use Case Demo
            </div>
          </button>
          <button className="cursor-pointer [border:none] py-[15.5px] px-[37px] bg-dark-blue rounded-93xl-5 flex flex-row items-start justify-start whitespace-nowrap z-[3] hover:bg-steelblue-200">
            <div className="relative text-base font-x-hp-title text-white text-left inline-block min-w-[115px]">
              ROI Calculator
            </div>
          </button>
        </div>
      </div>
      <img
        className="h-[462px] flex-1 relative max-w-full overflow-hidden object-contain min-w-[521px] z-[3] mq925:min-w-full"
        loading="lazy"
        alt=""
        src="/pos---shipping-efficiency--8-1@2x.png"
      />
    </div>
  );
};

export default PageTitle;