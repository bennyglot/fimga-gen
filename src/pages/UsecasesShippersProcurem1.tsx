import { FunctionComponent } from "react";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent1 from "../components/FrameComponent1";
import Main1 from "../components/Main1";
import Main from "../components/Main";
import Component from "../components/Component";
import ROIBottomBanner from "../components/ROIBottomBanner";
import FooterSW from "../components/FooterSW";

const UsecasesShippersProcurem: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-end justify-start leading-[normal] tracking-[normal]">
      <section className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[89.6px] box-border max-w-full mq925:pb-[58px] mq925:box-border mq450:pb-[38px] mq450:box-border">
        <div className="flex-1 [background:linear-gradient(0deg,_#edf0f2,_rgba(217,_217,_217,_0))] flex flex-col items-start justify-start pt-7 px-0 pb-[113px] box-border gap-[4px] max-w-full mq925:pt-5 mq925:pb-[73px] mq925:box-border">
          <div className="self-stretch h-[741px] relative [background:linear-gradient(0deg,_#edf0f2,_rgba(217,_217,_217,_0))] hidden" />
          <FrameComponent3 />
          <FrameComponent2 />
        </div>
      </section>
      <FrameComponent1 />
      <Main1 />
      <Main />
      <Component />
      <section className="self-stretch flex flex-col items-start justify-start max-w-full">
        <ROIBottomBanner />
        <FooterSW />
      </section>
    </div>
  );
};

export default UsecasesShippersProcurem;
