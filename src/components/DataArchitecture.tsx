import { FunctionComponent } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import FrameComponent from "./FrameComponent";

export type DataArchitectureType = {
  className?: string;
};

const DataArchitecture: FunctionComponent<DataArchitectureType> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-0 pb-[89.1px] pr-8 pl-5 box-border max-w-full text-left text-21xl text-dark-blue-sw font-x-hp-title mq450:pb-[58px] mq450:box-border ${className}`}
    >
      <div className="w-[1388px] flex flex-row items-end justify-start gap-[49px] max-w-full mq925:gap-[24px] mq1350:flex-wrap">
        <div className="flex-1 flex flex-col items-start justify-start gap-[36.4px] min-w-[489px] max-w-full mq925:gap-[18px] mq925:min-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-[17px] max-w-full">
            <h1 className="m-0 w-[700px] relative text-inherit tracking-[-0.02em] leading-[46px] font-medium font-inherit inline-block max-w-full mq450:text-5xl mq450:leading-[28px] mq925:text-13xl mq925:leading-[37px]">
              <p className="[margin-block-start:0] [margin-block-end:1px]">{`Self-maintaining data `}</p>
              <p className="m-0">architecture</p>
            </h1>
            <div className="self-stretch relative text-lgi tracking-[-0.02em] leading-[33.28px] text-light-text-sw">
              Achieve operational profit gains in 12 weeks when all your
              stakeholders use accurate, data-driven shipping instructions from
              origin to destination.
            </div>
          </div>
          <div className="w-[685px] flex flex-col items-start justify-start gap-[18.1px] max-w-full">
            <div className="self-stretch h-[0.9px] flex flex-row items-start justify-start py-0 pr-0 pl-[3px] box-border max-w-full">
              <div className="self-stretch flex-1 relative box-border max-w-full border-t-[0.9px] border-solid border-line-sw" />
            </div>
            <div className="w-[658.8px] flex flex-row items-start justify-start py-0 px-2 box-border max-w-full shrink-0">
              <Form.Select className="flex-1 font-x-hp-title text-lg-8 text-dark-blue-sw max-w-full mq925:flex-wrap mq925:gap-[17px]" />
            </div>
            <div className="self-stretch h-[0.9px] relative box-border border-t-[0.9px] border-solid border-line-sw" />
            <div className="w-[657.8px] flex flex-row items-start justify-start py-0 px-[7px] box-border max-w-full shrink-0">
              <Form.Select className="flex-1 font-x-hp-title text-lg-8 text-dark-blue-sw max-w-full mq925:flex-wrap mq925:gap-[20px]" />
            </div>
            <div className="self-stretch h-[0.9px] relative box-border border-t-[0.9px] border-solid border-line-sw" />
          </div>
        </div>
        <div className="w-[586px] flex flex-row items-start justify-start gap-[44.2px] min-w-[586px] max-w-full text-base-9 mq925:flex-wrap mq925:gap-[22px] mq925:min-w-full mq1350:flex-1">
          <FrameComponent
            depositphotos95894906Orig="/depositphotos-95894906-original-1@2x.png"
            howDigitalTwinsCouldTrans="How digital twins could transform the supply chain"
            vector="/vector-2.svg"
          />
          <FrameComponent
            depositphotos95894906Orig="/depositphotos-95894906-original-1-1@2x.png"
            howDigitalTwinsCouldTrans="How the freight and logistics industry is tackling emissions"
            vector="/vector-3.svg"
          />
        </div>
      </div>
    </section>
  );
};

export default DataArchitecture;