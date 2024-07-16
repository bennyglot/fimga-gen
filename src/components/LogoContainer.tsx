import { FunctionComponent } from "react";

export type LogoContainerType = {
  className?: string;
};

const LogoContainer: FunctionComponent<LogoContainerType> = ({
  className = "",
}) => {
  return (
    <header
      className={`w-[1760px] flex flex-row items-start justify-between py-0 pr-5 pl-0 box-border gap-[20px] max-w-full text-center text-2xl text-blue-sw font-font-awesome-6-pro ${className}`}
    >
      <div className="w-[1320px] flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border max-w-full">
        <div className="self-stretch flex flex-row items-start justify-between gap-[20px] max-w-full">
          <div className="w-[50px] flex flex-col items-start justify-start pt-[21px] px-0 pb-0 box-border">
            <div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
              <div className="self-stretch shadow-[3px_3px_14px_rgba(0,_40,_70,_0.2)] rounded-tl-none rounded-tr-3xs rounded-br-3xs rounded-bl-none bg-white flex flex-row items-start justify-start p-2.5 z-[1]">
                <div className="h-[50px] w-[50px] relative shadow-[3px_3px_14px_rgba(0,_40,_70,_0.2)] rounded-tl-none rounded-tr-3xs rounded-br-3xs rounded-bl-none bg-white hidden" />
                <div className="flex-1 relative leading-[150%] font-light z-[2]">
                  
                </div>
              </div>
              <div className="self-stretch shadow-[3px_3px_14px_rgba(0,_40,_70,_0.2)] rounded-tl-none rounded-tr-3xs rounded-br-3xs rounded-bl-none bg-white flex flex-row items-start justify-start p-2.5 z-[1]">
                <div className="h-[50px] w-[50px] relative rounded-tl-none rounded-tr-3xs rounded-br-3xs rounded-bl-none bg-white hidden" />
                <div className="flex-1 relative leading-[150%] font-light z-[2]">
                  
                </div>
              </div>
            </div>
          </div>
          <div className="h-[92px] w-[310px] flex flex-col items-start justify-start py-0 pr-[31px] pl-0 box-border">
            <img
              className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full z-[1]"
              loading="lazy"
              alt=""
              src="/stargo-logo.svg"
            />
          </div>
          <div className="w-[740px] flex flex-col items-start justify-start pt-[15px] px-0 pb-0 box-border max-w-full text-left text-base text-dark-blue-sw font-x-hp-title">
            <div className="self-stretch flex flex-row items-start justify-between gap-[20px] z-[1]">
              <a className="[text-decoration:none] w-[61px] relative text-[inherit] flex items-center shrink-0">
                Home
              </a>
              <div className="flex flex-row items-start justify-start text-blue-sw">
                <a className="[text-decoration:underline] relative text-[inherit] inline-block min-w-[80px]">
                  Solutions
                </a>
                <img
                  className="h-6 w-6 relative object-cover min-h-[24px]"
                  alt=""
                  src="/component-4@2x.png"
                />
              </div>
              <div className="flex flex-row items-start justify-start">
                <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[90px] whitespace-nowrap">
                  Use Cases
                </a>
                <img
                  className="h-6 w-6 relative object-cover min-h-[24px]"
                  alt=""
                  src="/component-4-1@2x.png"
                />
              </div>
              <div className="flex flex-row items-start justify-start">
                <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[90px]">
                  Resources
                </a>
                <img
                  className="h-6 w-6 relative object-cover min-h-[24px]"
                  alt=""
                  src="/component-4-1@2x.png"
                />
              </div>
              <div className="w-20 flex flex-row items-start justify-start">
                <a className="[text-decoration:none] flex-1 relative text-[inherit]">
                  About
                </a>
                <img
                  className="h-6 w-6 relative object-cover min-h-[24px]"
                  alt=""
                  src="/component-4-1@2x.png"
                />
              </div>
              <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[67px]">
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
      <button className="cursor-pointer [border:none] py-[15px] px-[29px] bg-white shadow-[3px_3px_14px_rgba(0,_40,_70,_0.2)] rounded-93xl-5 flex flex-row items-start justify-start gap-[5px] z-[1]">
        <div className="flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0">
          <a className="[text-decoration:none] relative text-base font-x-hp-title text-dark-blue-sw text-left inline-block min-w-[97px] whitespace-nowrap">
            Portal Log In
          </a>
        </div>
        <img
          className="h-[29px] w-[29px] relative min-h-[29px]"
          alt=""
          src="/navigation-icons-ibm.svg"
        />
      </button>
    </header>
  );
};

export default LogoContainer;
