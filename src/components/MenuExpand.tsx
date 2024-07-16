import { FunctionComponent } from "react";

export type MenuExpandType = {
  className?: string;
};

const MenuExpand: FunctionComponent<MenuExpandType> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-start pt-px px-40 pb-0 box-border relative gap-[89px] max-w-full text-center text-2xl text-blue-sw font-font-awesome-6-pro mq1350:gap-[44px] mq1350:pl-20 mq1350:pr-20 mq1350:box-border mq900:gap-[22px] mq900:pl-10 mq900:pr-10 mq900:box-border mq1750:flex-wrap ${className}`}
    >
      <div className="w-[50px] !m-[0] absolute top-[0px] left-[0px] shadow-[3px_3px_14px_rgba(0,_40,_70,_0.2)] rounded-tl-none rounded-tr-3xs rounded-br-3xs rounded-bl-none bg-white flex flex-row items-start justify-start p-2.5 box-border z-[1]">
        <div className="h-[50px] w-[50px] relative rounded-tl-none rounded-tr-3xs rounded-br-3xs rounded-bl-none bg-white hidden" />
        <div className="flex-1 relative leading-[150%] font-light z-[2] mq450:text-mid mq450:leading-[25px]">
          
        </div>
      </div>
      <div className="w-[690px] flex flex-col items-start justify-start pt-[19px] px-0 pb-0 box-border min-w-[690px] max-w-full text-left text-base text-bluish-grey-sw font-x-hp-title mq1350:min-w-full mq1750:flex-1">
        <div className="self-stretch flex flex-col items-start justify-start gap-[56px] max-w-full mq900:gap-[28px]">
          <div className="w-[663px] flex flex-col items-start justify-start pt-0 px-0 pb-[26px] box-border gap-[40px] max-w-full mq900:gap-[20px]">
            <div className="flex flex-row items-start justify-start gap-[15px] max-w-full z-[1] mq450:flex-wrap">
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
              <div className="relative tracking-[-0.02em] leading-[28px] font-light inline-block min-w-[85px]">
                Operations
              </div>
              <div className="flex flex-col items-start justify-start pt-[8.7px] px-0 pb-0">
                <img
                  className="w-1.5 h-[10.6px] relative object-contain"
                  alt=""
                  src="/expand-more-1.svg"
                />
              </div>
              <div className="relative tracking-[-0.02em] leading-[28px] text-dark-blue-sw inline-block min-w-[98px]">
                Loading Lists
              </div>
            </div>
            <h1 className="m-0 self-stretch relative text-31xl tracking-[-0.02em] leading-[60px] font-medium font-inherit text-dark-blue-sw z-[1] mq450:text-11xl mq450:leading-[36px] mq900:text-21xl mq900:leading-[48px]">
              Loading Lists
            </h1>
          </div>
          <div className="self-stretch relative text-xl tracking-[-0.02em] leading-[32px] text-light-text-sw z-[1] mq450:text-base mq450:leading-[26px]">
            Boost efficiency and streamline loading and offloading of inbound
            and outbound stock with automated loading list generation and
            management. Stargo uses advanced GenAI to create 100% accurate,
            fully optimized loading lists in under a minute.
          </div>
          <div className="flex flex-row items-start justify-start gap-[27px] max-w-full mq900:flex-wrap">
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
        className="h-[531px] flex-1 relative max-w-full overflow-hidden object-contain min-w-[521px] z-[1] mq900:min-w-full"
        loading="lazy"
        alt=""
        src="/loading-list--23-1@2x.png"
      />
    </div>
  );
};

export default MenuExpand;
