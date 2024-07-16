import { FunctionComponent } from "react";

export type SocialLinksType = {
  className?: string;
  radixIconsinstagramLogo?: string;
  rilinkedinFill?: string;
  rifacebookBoxFill?: string;
};

const SocialLinks: FunctionComponent<SocialLinksType> = ({
  className = "",
  radixIconsinstagramLogo,
  rilinkedinFill,
  rifacebookBoxFill,
}) => {
  return (
    <div
      className={`flex flex-col items-start justify-start pt-0 px-0 pb-[0.1px] gap-[9.8px] z-[1] text-left text-mini-8 text-dimgray font-x-hp-title ${className}`}
    >
      <div className="relative">Follow us and stay up to date</div>
      <div className="flex flex-row items-start justify-start gap-[13.2px]">
        <div className="h-[32.8px] w-[32.8px] rounded-lg bg-bluish-grey-sw flex flex-row items-center justify-start py-[6.6px] px-1.5 box-border">
          <img
            className="h-[19.7px] w-[19.7px] relative overflow-hidden shrink-0"
            alt=""
            src={radixIconsinstagramLogo}
          />
        </div>
        <div className="h-[32.8px] w-[32.8px] rounded-lg bg-bluish-grey-sw flex flex-row items-center justify-start py-[6.6px] px-1.5 box-border">
          <img
            className="h-[19.7px] w-[19.7px] relative overflow-hidden shrink-0"
            alt=""
            src={rilinkedinFill}
          />
        </div>
        <div className="h-[32.8px] w-[32.8px] rounded-lg bg-bluish-grey-sw flex flex-row items-center justify-start py-[6.6px] px-1.5 box-border">
          <img
            className="h-[19.7px] w-[19.7px] relative overflow-hidden shrink-0"
            alt=""
            src={rifacebookBoxFill}
          />
        </div>
      </div>
    </div>
  );
};

export default SocialLinks;
