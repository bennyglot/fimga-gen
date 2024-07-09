import { FunctionComponent } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";

export type FrameComponent3Type = {
  className?: string;
};

const FrameComponent3: FunctionComponent<FrameComponent3Type> = ({
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
              <div className="self-stretch h-[50px] relative shadow-[3px_3px_14px_rgba(0,_40,_70,_0.2)] rounded-tl-none rounded-tr-3xs rounded-br-3xs rounded-bl-none bg-white">
                <div className="absolute top-[0px] left-[0px] shadow-[3px_3px_14px_rgba(0,_40,_70,_0.2)] rounded-tl-none rounded-tr-3xs rounded-br-3xs rounded-bl-none bg-white w-full h-full hidden" />
                <div className="absolute top-[0px] left-[0px] shadow-[3px_3px_14px_rgba(0,_40,_70,_0.2)] rounded-tl-none rounded-tr-3xs rounded-br-3xs rounded-bl-none bg-white w-full h-full z-[3]">
                  <div className="absolute top-[10px] left-[10px] leading-[150%] font-light hidden items-center justify-center w-[30px] h-[30px]">
                    
                  </div>
                  <div className="absolute top-[0px] left-[0px] shadow-[3px_3px_14px_rgba(0,_40,_70,_0.2)] rounded-tl-none rounded-tr-3xs rounded-br-3xs rounded-bl-none bg-white w-full h-full hidden" />
                  <div className="absolute top-[10px] left-[10px] leading-[150%] font-light flex items-center justify-center w-[30px] h-[30px] z-[4]">
                    
                  </div>
                </div>
              </div>
              <div className="self-stretch h-[50px] relative shadow-[3px_3px_14px_rgba(0,_40,_70,_0.2)] rounded-tl-none rounded-tr-3xs rounded-br-3xs rounded-bl-none bg-white">
                <div className="absolute top-[0px] left-[0px] rounded-tl-none rounded-tr-3xs rounded-br-3xs rounded-bl-none bg-white w-full h-full hidden" />
                <div className="absolute top-[0px] left-[0px] shadow-[3px_3px_14px_rgba(0,_40,_70,_0.2)] rounded-tl-none rounded-tr-3xs rounded-br-3xs rounded-bl-none bg-white w-full h-full z-[3]">
                  <div className="absolute top-[10px] left-[10px] leading-[150%] font-light hidden items-center justify-center w-[30px] h-[30px]">
                    
                  </div>
                  <div className="absolute top-[0px] left-[0px] rounded-tl-none rounded-tr-3xs rounded-br-3xs rounded-bl-none bg-white w-full h-full hidden" />
                  <div className="absolute top-[10px] left-[10px] leading-[150%] font-light flex items-center justify-center w-[30px] h-[30px] z-[4]">
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[92px] w-[310px] flex flex-col items-start justify-start py-0 pr-[31px] pl-0 box-border">
            <img
              className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full z-[3]"
              loading="lazy"
              alt=""
              src="/stargo-logo.svg"
            />
          </div>
          <div className="w-[740px] flex flex-col items-start justify-start pt-[15px] px-0 pb-0 box-border max-w-full text-left text-base text-dark-blue-sw font-x-hp-title">
            <div className="self-stretch flex flex-row items-start justify-between gap-[20px] z-[3]">
              <a className="[text-decoration:none] w-[61px] relative text-[inherit] flex items-center shrink-0">
                Home
              </a>
              <Form.Select className="font-x-hp-title text-base text-blue-sw" />
              <Form.Select className="font-x-hp-title text-base text-dark-blue-sw" />
              <Form.Select className="font-x-hp-title text-base text-dark-blue-sw" />
              <Form.Select className="w-20 font-x-hp-title text-base text-dark-blue-sw" />
              <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[67px]">
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="shadow-[3px_3px_14px_rgba(0,_40,_70,_0.2)] rounded-93xl-5 bg-white flex flex-row items-start justify-start py-[15px] px-[29px] gap-[5px] z-[3] text-left text-base text-dark-blue-sw font-x-hp-title">
        <div className="flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0">
          <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[97px] whitespace-nowrap">
            Portal Log In
          </a>
        </div>
        <img
          className="h-[29px] w-[29px] relative min-h-[29px]"
          loading="lazy"
          alt=""
          src="/navigation-icons-ibm.svg"
        />
      </div>
    </header>
  );
};

export default FrameComponent3;
