import { FunctionComponent } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Dropdown, DropdownButton, ButtonGroup, Form } from "react-bootstrap";

export type FrameComponent3Type = {
  className?: string;
};

const FrameComponent3: FunctionComponent<FrameComponent3Type> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start relative max-w-full ${className}`}
    >
      <div className="h-[1135px] w-[1449px] absolute !m-[0] bottom-[-1017px] left-[206px]">
        <img
          className="absolute top-[562px] left-[673px] w-[776px] h-[573px] object-contain z-[1]"
          loading="lazy"
          alt=""
          src="/hp-img-02-1@2x.png"
        />
        <img
          className="absolute top-[0px] left-[0px] w-[868px] h-[602px] object-contain z-[2]"
          alt=""
          src="/homepage-secondary--eliminate-human-error--2@2x.png"
        />
      </div>
      <div className="w-[219.2px] !m-[0] absolute right-[-0.2px] bottom-[108.2px] shadow-[0px_4.4px_25.66px_rgba(180,_182,_187,_0.5)] rounded-tl-[62.32px] rounded-tr-none rounded-br-none rounded-bl-[62.32px] bg-white flex flex-row items-start justify-start pt-[14.7px] pb-[14.1px] pr-[21px] pl-[22px] box-border z-[3]">
        <div className="h-[129.8px] w-[219.2px] relative shadow-[0px_4.4px_25.66px_rgba(180,_182,_187,_0.5)] rounded-tl-[62.32px] rounded-tr-none rounded-br-none rounded-bl-[62.32px] bg-white hidden" />
        <div className="h-[101px] flex-1 relative">
          <img
            className="absolute h-full top-[0px] bottom-[0px] left-[0px] max-h-full w-[100.7px] object-cover z-[1]"
            alt=""
            src="/iso-badge@2x.png"
          />
          <div className="absolute h-[calc(100%_-_0.3px)] top-[0px] bottom-[0.3px] left-[75px] w-[101.2px] z-[2]">
            <div className="absolute top-[0px] left-[0.7px] rounded-[50%] bg-white w-full h-full" />
            <img
              className="absolute top-[0px] left-[0px] w-full h-full object-cover z-[1]"
              loading="lazy"
              alt=""
              src="/gdpr@2x.png"
            />
          </div>
        </div>
      </div>
      <div className="flex-1 flex flex-row items-start justify-start pt-0 px-0 pb-[170px] box-border max-w-full mq450:pb-[71px] mq450:box-border mq925:pb-[110px] mq925:box-border">
        <header className="flex-1 [background:linear-gradient(0deg,_#edf0f2,_rgba(217,_217,_217,_0))] flex flex-row items-start justify-start pt-7 px-0 pb-[73px] box-border gap-[110px] max-w-full text-center text-2xl text-blue-sw font-font-awesome-6-pro mq450:gap-[27px] mq925:gap-[55px] mq925:pt-5 mq925:pb-[47px] mq925:box-border">
          <div className="h-[741px] w-[1900px] relative [background:linear-gradient(0deg,_#edf0f2,_rgba(217,_217,_217,_0))] hidden max-w-full" />
          <div className="w-[50px] flex flex-col items-start justify-start pt-[23px] px-0 pb-0 box-border">
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
              <div className="self-stretch shadow-[3px_3px_14px_rgba(0,_40,_70,_0.2)] rounded-tl-none rounded-tr-3xs rounded-br-3xs rounded-bl-none bg-white flex flex-row items-start justify-start p-2.5 z-[1]">
                <div className="h-[50px] w-[50px] relative rounded-tl-none rounded-tr-3xs rounded-br-3xs rounded-bl-none bg-white hidden" />
                <div className="flex-1 relative leading-[150%] font-light z-[2]">
                  
                </div>
              </div>
            </div>
          </div>
          <div className="h-[640px] w-[1635px] relative max-w-full text-left text-58xl text-dark-blue-sw font-x-hp-title">
            <DropdownButton
              className="absolute top-[0px] left-[1390px] shadow-[3px_3px_14px_rgba(0,_40,_70,_0.2)] z-[1]"
              as={ButtonGroup}
              style={{
                width: "190",
                height: "59",
                backgroundColor: "#fff",
                borderRadius: "112.5px",
              }}
            >{` `}</DropdownButton>
            <button className="cursor-pointer [border:none] py-[15.5px] px-[37px] bg-dark-blue-sw absolute top-[522px] left-[0px] rounded-93xl-5 flex flex-row items-start justify-start whitespace-nowrap z-[1] hover:bg-steelblue-100">
              <div className="relative text-base font-x-hp-title text-white text-left inline-block min-w-[115px]">
                ROI Calculator
              </div>
            </button>
            <button className="cursor-pointer [border:none] py-[15.5px] px-6 bg-bluish-grey-sw absolute top-[522px] left-[217px] rounded-93xl-5 flex flex-row items-start justify-start whitespace-nowrap z-[1] hover:bg-slategray">
              <div className="relative text-base font-x-hp-title text-white text-left">
                Schedule a Demo
              </div>
            </button>
            <h1 className="m-0 absolute top-[171px] left-[0px] text-inherit tracking-[-0.02em] leading-[73px] font-normal font-inherit flex items-center w-[667px] h-[146px] z-[1]">
              Turn your data into revenue
            </h1>
            <div className="absolute top-[337px] left-[0px] text-xl tracking-[-0.02em] leading-[32px] text-light-text-sw inline-block w-[533px] h-24 z-[1]">
              Stardox empowers businesses to optimize revenue and margins with
              AI and Machine Learning, extracting and analyzing shipping data in
              seconds
            </div>
            <div className="absolute top-[17px] left-[420px] w-[740px] flex flex-row items-start justify-between gap-[20px] max-w-full z-[1] text-base text-blue-sw">
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
            <img
              className="absolute top-[2px] left-[0px] w-[279px] h-[92px] z-[1]"
              loading="lazy"
              alt=""
              src="/stargo-logo.svg"
            />
            <img
              className="absolute top-[80px] left-[619px] w-[1016px] h-[560px] object-contain z-[3]"
              loading="lazy"
              alt=""
              src="/homepage-main--2@2x.png"
            />
          </div>
        </header>
      </div>
    </section>
  );
};

export default FrameComponent3;