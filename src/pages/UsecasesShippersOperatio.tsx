import { FunctionComponent } from "react";
import DeepCenter from "../components/DeepCenter";
import MenuExpand from "../components/MenuExpand";
import Bottom from "../components/Bottom";
import FrameComponent1 from "../components/FrameComponent11";
import FrameComponent from "../components/FrameComponent12";
import Component from "../components/Component";
import ROIBottomBanner from "../components/ROIBottomBanner1";
import FooterSW from "../components/FooterSW1";

const UsecasesShippersOperatio: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal]">
      <section className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[72.6px] box-border max-w-full mq450:pb-[31px] mq450:box-border mq900:pb-[47px] mq900:box-border">
        <div className="flex-1 [background:linear-gradient(0deg,_#edf0f2,_rgba(217,_217,_217,_0))] flex flex-col items-start justify-start pt-7 px-0 pb-[50px] box-border gap-[4px] max-w-full mq900:pt-5 mq900:pb-8 mq900:box-border">
          <div className="self-stretch h-[741px] relative [background:linear-gradient(0deg,_#edf0f2,_rgba(217,_217,_217,_0))] hidden" />
          <DeepCenter />
          <MenuExpand />
        </div>
      </section>
      <Bottom />
      <FrameComponent1 />
      <FrameComponent />
      <Component />
      <section className="self-stretch flex flex-col items-start justify-start max-w-full">
        <ROIBottomBanner />
        <FooterSW />
      </section>
    </div>
  );
};

export default UsecasesShippersOperatio;
