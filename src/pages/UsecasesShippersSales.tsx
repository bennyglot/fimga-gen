import { FunctionComponent } from "react";
import FrameComponent3 from "../components/FrameComponent3";
import PageTitle from "../components/PageTitle";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import Component from "../components/Component";
import ROIBottomBanner from "../components/ROIBottomBanner";
import FooterSW from "../components/FooterSW";

const UsecasesShippersSales: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal]">
      <section className="self-stretch flex flex-col items-start justify-start pt-7 px-0 pb-[100px] box-border relative gap-[4px] min-h-[814px] max-w-full mq925:pt-5 mq925:pb-[65px] mq925:box-border">
        <div className="w-full h-[calc(100%_-_72.6px)] absolute !m-[0] top-[0px] right-[0px] bottom-[72.6px] left-[0px] [background:linear-gradient(0deg,_#edf0f2,_rgba(217,_217,_217,_0))] z-[2]" />
        <FrameComponent3 />
        <PageTitle />
      </section>
      <FrameComponent2 />
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

export default UsecasesShippersSales;
