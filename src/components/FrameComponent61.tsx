import { FunctionComponent } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";

export type FrameComponent6Type = {
  className?: string;
};

const FrameComponent6: FunctionComponent<FrameComponent6Type> = ({
  className = "",
}) => {
  return (
    <div
      className={`w-[1587px] flex flex-col items-start justify-start gap-[25px] max-w-full text-left text-31xl text-dark-blue-sw font-x-hp-title ${className}`}
    >
      <header className="self-stretch h-[252px] flex flex-row items-start justify-between max-w-full gap-[20px] text-left text-xl text-lightslategray font-x-hp-title">
        <div className="self-stretch w-[1167px] flex flex-col items-start justify-start pt-px px-0 pb-0 box-border max-w-full">
          <div className="self-stretch flex-1 flex flex-row items-start justify-between max-w-full gap-[20px]">
            <div className="self-stretch w-[343px] flex flex-col items-start justify-start gap-[39px] max-w-full mq450:gap-[19px]">
              <div className="w-[293px] flex flex-row items-start justify-start py-0 px-[7px] box-border">
                <img
                  className="h-[92px] flex-1 relative max-w-full overflow-hidden z-[1]"
                  loading="lazy"
                  alt=""
                  src="/content-icons-ibm.svg"
                />
              </div>
              <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[22px]">
                <div className="w-[120px] flex flex-row items-start justify-start py-0 px-[7px] box-border">
                  <div className="flex-1 relative tracking-[-0.02em] leading-[20px] z-[1]">
                    Partners
                  </div>
                </div>
                <img
                  className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover z-[1]"
                  loading="lazy"
                  alt=""
                  src="/lobster-pos-1@2x.png"
                />
              </div>
            </div>
            <div className="w-[740px] flex flex-col items-start justify-start pt-[15px] px-0 pb-0 box-border max-w-full text-base text-blue-sw">
              <div className="self-stretch flex flex-row items-start justify-between gap-[20px] z-[1]">
                <a className="[text-decoration:underline] w-[61px] relative text-[inherit] flex items-center shrink-0">
                  Home
                </a>
                <Form.Select className="font-x-hp-title text-base text-dark-blue-sw" />
                <Form.Select className="font-x-hp-title text-base text-dark-blue-sw" />
                <Form.Select className="font-x-hp-title text-base text-dark-blue-sw" />
                <Form.Select className="w-20 font-x-hp-title text-base text-dark-blue-sw" />
                <a className="[text-decoration:none] relative text-dark-blue-sw inline-block min-w-[67px]">
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
        <button className="cursor-pointer [border:none] py-[15px] px-[29px] bg-white shadow-[5px_5px_15px_rgba(5,_39,_72,_0.2)] rounded-93xl-5 flex flex-row items-start justify-start gap-[5px] z-[1]">
          <div className="flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0">
            <a className="[text-decoration:none] relative text-base font-x-hp-title text-dark-blue-sw text-left inline-block min-w-[97px] whitespace-nowrap">
              Portal Log In
            </a>
          </div>
          <img
            className="h-[29px] w-[29px] relative min-h-[29px]"
            alt=""
            src="/navigation-icons-ibm1.svg"
          />
        </button>
      </header>
      <div className="w-[1504px] flex flex-row items-start justify-start py-0 px-[7px] box-border max-w-full">
        <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] mq1750:flex-wrap">
          <div className="w-[701px] flex flex-col items-start justify-start gap-[28px] min-w-[701px] max-w-full mq900:min-w-full mq1750:flex-1">
            <div className="self-stretch flex flex-col items-start justify-start gap-[15px] max-w-full">
              <h1 className="m-0 self-stretch relative text-inherit tracking-[-0.02em] leading-[60px] font-medium font-inherit z-[1] mq450:text-11xl mq450:leading-[36px] mq900:text-21xl mq900:leading-[48px]">
                <p className="[margin-block-start:0] [margin-block-end:1px]">
                  Stargo Partners with Lobster Logistics.Cloud
                </p>
              </h1>
              <h3 className="m-0 w-[614px] relative text-3xl tracking-[-0.02em] leading-[33px] font-normal font-inherit text-gray inline-block max-w-full box-border pr-5 z-[1] mq450:text-lg mq450:leading-[26px]">
                Stargo is proud to partner with Lobster Logistics.Cloud,
                bringing industry-leading GenAI-powered data automation and
                structuring technology to the world’s largest data integration
                platform. 
              </h3>
            </div>
            <button className="cursor-pointer [border:none] py-[15.5px] px-[47px] bg-dark-blue-sw rounded-93xl-5 flex flex-row items-start justify-start whitespace-nowrap z-[1] hover:bg-steelblue-100">
              <div className="relative text-base font-x-hp-title text-white text-left inline-block min-w-[96px]">
                Get a Demo
              </div>
            </button>
          </div>
          <div className="w-[605px] flex flex-col items-start justify-start pt-[43.4px] px-0 pb-0 box-border min-w-[605px] max-w-full text-center text-xl text-white mq900:min-w-full mq1750:flex-1">
            <div className="self-stretch bg-remarks flex flex-row items-start justify-start pt-[23.6px] px-12 pb-[24.6px] box-border max-w-full z-[1] mq900:pl-6 mq900:pr-6 mq900:box-border">
              <div className="h-[103.2px] w-[605px] relative bg-remarks hidden max-w-full" />
              <div className="h-[55px] flex-1 relative tracking-[-0.02em] leading-[32px] font-black flex items-center justify-center max-w-full z-[1] mq450:text-base mq450:leading-[26px]">{`Maybe something related to Lobster `}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent6;
