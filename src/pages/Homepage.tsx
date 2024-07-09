import { FunctionComponent } from "react";
import FrameComponent4 from "../components/FrameComponent4";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent1 from "../components/FrameComponent1";
import RoiBanner from "../components/RoiBanner";
import DataArchitecture from "../components/DataArchitecture";
import CustomerQuote from "../components/CustomerQuote";
import GroupComponent from "../components/GroupComponent";
import FooterSW from "../components/FooterSW";

const Homepage: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-end justify-start leading-[normal] tracking-[normal]">
      <FrameComponent4 />
      <FrameComponent3
        transformYourFreightDocum="Transform your freight documents into"
        actionableInsights="actionable insights"
        stardoxAGenAiPoweredSolut="Stardox, a Gen-Ai-powered solution, is at the forefront of revolutionizing the freight, logistics, and supply chain industry by fully automating procurement, sales, and operations, ensuring seamless and efficient processes"
      />
      <section className="self-stretch flex flex-row items-start justify-center pt-0 pb-[186px] pr-[757px] pl-5 box-border max-w-full text-left text-31xl text-dark-blue-sw font-x-hp-title mq450:pr-5 mq450:pb-[121px] mq450:box-border mq925:pr-[189px] mq925:box-border mq1350:pr-[378px] mq1350:box-border">
        <div className="w-[663px] flex flex-col items-start justify-start gap-[24px] max-w-full">
          <h1 className="m-0 self-stretch relative text-inherit tracking-[-0.02em] leading-[60px] font-medium font-inherit mq450:text-11xl mq450:leading-[36px] mq925:text-21xl mq925:leading-[48px]">
            Stardox: Elevating Collaboration in Logistics!
          </h1>
          <div className="w-[562px] relative text-xl tracking-[-0.02em] leading-[32px] text-light-text-sw inline-block max-w-full mq450:text-base mq450:leading-[26px]">
            Utilize StarDox AI to boost KPIs, automate operations, and foster
            freight community collaboration, driving business growth and
            customer satisfaction
          </div>
        </div>
      </section>
      <FrameComponent2 />
      <FrameComponent1 />
      <RoiBanner />
      <DataArchitecture />
      <CustomerQuote />
      <div className="w-[984px] h-[538px] relative hidden max-w-full" />
      <GroupComponent />
      <FooterSW />
    </div>
  );
};

export default Homepage;
