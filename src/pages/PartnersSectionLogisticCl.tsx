import { FunctionComponent } from "react";
import FrameComponent7 from "../components/FrameComponent7";
import FrameComponent6 from "../components/FrameComponent6";
import FrameComponent5 from "../components/FrameComponent5";
import FrameComponent4 from "../components/FrameComponent4";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import FooterSW from "../components/FooterSW";

const PartnersSectionLogisticCl: FunctionComponent = () => {
  return (
    <div className="w-full relative shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] bg-white overflow-hidden flex flex-col items-start justify-start gap-[76px] leading-[normal] tracking-[normal] mq1350:gap-[38px] mq900:gap-[19px]">
      <section className="self-stretch [background:linear-gradient(0deg,_#edf0f2,_rgba(217,_217,_217,_0))] flex flex-row items-start justify-start pt-7 px-0 pb-[85px] box-border gap-[103px] max-w-full mq450:gap-[26px] mq900:gap-[51px] mq900:pt-5 mq900:pb-[55px] mq900:box-border mq1750:flex-wrap">
        <div className="h-[741px] w-[1900px] relative [background:linear-gradient(0deg,_#edf0f2,_rgba(217,_217,_217,_0))] hidden max-w-full" />
        <div className="w-[50px] flex flex-col items-start justify-start pt-[23px] px-0 pb-0 box-border">
          <FrameComponent7 />
        </div>
        <FrameComponent6 />
      </section>
      <section className="self-stretch flex flex-col items-end justify-start pt-0 px-0 pb-20 box-border gap-[145px] max-w-full mq1350:gap-[72px] mq1350:pb-[34px] mq1350:box-border mq900:gap-[36px] mq900:pb-[22px] mq900:box-border">
        <div className="self-stretch flex flex-col items-start justify-start gap-[79px] max-w-full mq1350:gap-[39px] mq900:gap-[20px]">
          <FrameComponent5 />
          <FrameComponent4 />
        </div>
        <FrameComponent3 />
        <FrameComponent1 />
        <FrameComponent />
      </section>
      <FooterSW />
    </div>
  );
};

export default PartnersSectionLogisticCl;
