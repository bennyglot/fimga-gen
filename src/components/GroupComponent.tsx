import { FunctionComponent } from "react";

export type GroupComponentType = {
  className?: string;
};

const GroupComponent: FunctionComponent<GroupComponentType> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch bg-white flex flex-row items-end justify-between py-[76px] pr-[249px] pl-[251px] box-border max-w-full gap-[20px] z-[4] text-left text-10xl-2 text-dark-blue-sw font-x-hp-title mq925:py-[49px] mq925:px-[62px] mq925:box-border mq1350:pl-[125px] mq1350:pr-[124px] mq1350:box-border mq1825:flex-wrap ${className}`}
    >
      <div className="h-[482px] w-[1900px] relative bg-white hidden max-w-full" />
      <div className="w-[493px] flex flex-col items-start justify-end pt-0 px-0 pb-[2.5px] box-border min-w-[493px] max-w-full mq1350:min-w-full mq1825:flex-1">
        <div className="self-stretch flex flex-col items-start justify-start gap-[60px] mq925:gap-[30px]">
          <div className="self-stretch relative tracking-[-0.02em] font-medium z-[1] mq450:text-4xl">
            We meticulously analyze and distill information from documents for
            the world's most prominent carriers, delivering this service to our
            international clientele
          </div>
          <div className="self-stretch flex flex-row items-start justify-start gap-[29.7px] text-base-1 text-blue-sw mq925:flex-wrap">
            <div className="flex-1 flex flex-row items-start justify-start pt-[3px] px-0 pb-2 box-border relative min-w-[92px] z-[1]">
              <input
                className="w-full [border:none] [outline:none] font-medium font-x-hp-title text-base-1 bg-[transparent] h-[19px] flex-1 relative tracking-[-0.02em] leading-[30px] text-gray-200 text-left flex items-center min-w-[85px] p-0"
                placeholder="Shipping Lines"
                type="text"
              />
              <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] box-border opacity-[0.3] z-[1] border-b-[2px] border-solid border-dark-blue-sw" />
            </div>
            <div className="flex-1 box-border flex flex-row items-start justify-start pt-[2.5px] px-0.5 pb-[5px] min-w-[92px] z-[1] border-b-[2px] border-solid border-blue-sw">
              <div className="w-[117.5px] relative tracking-[-0.02em] leading-[19.6px] font-medium flex items-center shrink-0">
                Air Lines
              </div>
              <div className="h-[30px] w-[141.3px] relative box-border hidden border-b-[2px] border-solid border-blue-sw" />
            </div>
            <div className="flex flex-row items-start justify-start pt-[3px] px-0 pb-2 relative z-[1] text-gray-200">
              <div className="relative tracking-[-0.02em] leading-[19px] font-medium">
                Domestic Truckers
              </div>
              <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] box-border opacity-[0.3] z-[1] border-b-[2px] border-solid border-dark-blue-sw" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-[680px] flex flex-row items-start justify-start gap-[43.4px] min-w-[680px] max-w-full mq925:flex-wrap mq925:gap-[22px] mq1350:min-w-full mq1825:flex-1">
        <div className="flex-1 flex flex-col items-start justify-start gap-[55.9px] min-w-[204px] mq450:gap-[28px]">
          <div className="self-stretch flex flex-row items-end justify-between gap-[20px] mq450:flex-wrap">
            <div className="h-[143.5px] w-[130px] flex flex-col items-start justify-end pt-0 px-0 pb-[6.1px] box-border min-w-[130px] mq450:flex-1">
              <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[56px]">
                <img
                  className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover mix-blend-luminosity z-[1]"
                  loading="lazy"
                  alt=""
                  src="/britishairwayslogo-1@2x.png"
                />
                <img
                  className="self-stretch h-[28.4px] relative max-w-full overflow-hidden shrink-0 object-cover mix-blend-luminosity z-[1]"
                  alt=""
                  src="/image014@2x.png"
                />
              </div>
            </div>
            <div className="w-[130.6px] flex flex-col items-start justify-start gap-[61.2px] min-w-[130.6px] mq450:flex-1">
              <img
                className="self-stretch h-[26.8px] relative max-w-full overflow-hidden shrink-0 object-cover mix-blend-luminosity z-[1]"
                alt=""
                src="/image015@2x.png"
              />
              <img
                className="self-stretch h-[42.5px] relative max-w-full overflow-hidden shrink-0 object-cover mix-blend-luminosity z-[1]"
                loading="lazy"
                alt=""
                src="/klm-logo@2x.png"
              />
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start gap-[44px] mq450:flex-wrap mq450:gap-[22px]">
            <div className="flex-1 flex flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border min-w-[84px]">
              <div className="self-stretch flex flex-col items-start justify-start gap-[51.6px]">
                <img
                  className="self-stretch h-[30.4px] relative max-w-full overflow-hidden shrink-0 object-cover mix-blend-luminosity z-[1]"
                  alt=""
                  src="/virgin-atlantic-logo@2x.png"
                />
                <img
                  className="w-[121px] h-7 relative object-contain mix-blend-luminosity z-[1]"
                  alt=""
                  src="/logoswiss2x@2x.png"
                />
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-[42.1px] min-w-[90px]">
              <div className="flex flex-row items-start justify-start py-0 pr-0 pl-[9px]">
                <img
                  className="h-[36.9px] w-[130px] relative object-cover mix-blend-luminosity z-[1]"
                  loading="lazy"
                  alt=""
                  src="/chinaairlineslogo@2x.png"
                />
              </div>
              <img
                className="w-[130px] h-[40.1px] relative object-contain mix-blend-luminosity z-[1]"
                loading="lazy"
                alt=""
                src="/cathay-pacificlogo@2x.png"
              />
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-row items-end justify-start gap-[52px] min-w-[210px] max-w-full mq450:flex-wrap mq450:gap-[26px]">
          <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[4.4px] box-border min-w-[91px]">
            <div className="self-stretch flex flex-col items-end justify-start gap-[52px]">
              <div className="flex flex-row items-start justify-end py-0 pr-px pl-[9px]">
                <img
                  className="h-[53px] w-[130px] relative object-cover mix-blend-luminosity z-[1]"
                  loading="lazy"
                  alt=""
                  src="/image016@2x.png"
                />
              </div>
              <div className="self-stretch flex flex-col items-end justify-start gap-[62.9px]">
                <img
                  className="w-[130px] h-[34.5px] relative object-contain mix-blend-luminosity z-[1]"
                  alt=""
                  src="/cainiao@2x.png"
                />
                <div className="self-stretch flex flex-row items-start justify-end py-0 pr-px pl-0">
                  <div className="flex-1 flex flex-col items-start justify-start gap-[52.2px]">
                    <div className="flex flex-row items-start justify-start py-0 pr-0 pl-[9px]">
                      <img
                        className="h-[30.8px] w-[130px] relative object-cover mix-blend-luminosity shrink-0 z-[1]"
                        alt=""
                        src="/avianca-logo@2x.png"
                      />
                    </div>
                    <img
                      className="w-[119px] h-[26px] relative object-contain mix-blend-luminosity shrink-0 z-[1]"
                      alt=""
                      src="/iberia@2x.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[44.1px] min-w-[85px]">
            <img
              className="self-stretch h-[36.9px] relative max-w-full overflow-hidden shrink-0 object-contain mix-blend-luminosity z-[1]"
              alt=""
              src="/chinaairlineslogo-1@2x.png"
            />
            <div className="self-stretch flex flex-col items-start justify-start gap-[37px]">
              <div className="flex flex-row items-start justify-start py-0 pr-0 pl-px">
                <img
                  className="h-[67.5px] w-[130px] relative object-cover mix-blend-luminosity z-[1]"
                  alt=""
                  src="/image016-1@2x.png"
                />
              </div>
              <img
                className="self-stretch h-[50px] relative max-w-full overflow-hidden shrink-0 object-contain mix-blend-luminosity z-[1]"
                loading="lazy"
                alt=""
                src="/deltaairlineslogo@2x.png"
              />
              <img
                className="self-stretch h-[35.4px] relative max-w-full overflow-hidden shrink-0 object-cover mix-blend-luminosity z-[1]"
                alt=""
                src="/emirates-horizontal-1@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GroupComponent;
