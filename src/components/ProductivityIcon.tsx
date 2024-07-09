import { FunctionComponent } from "react";

export type ProductivityIconType = {
  className?: string;
  allWebsiteIcons15?: string;
  improveConversion?: string;
  elevateYourSuccessInWeeks?: string;
};

const ProductivityIcon: FunctionComponent<ProductivityIconType> = ({
  className = "",
  allWebsiteIcons15,
  improveConversion,
  elevateYourSuccessInWeeks,
}) => {
  return (
    <div
      className={`flex flex-col items-start justify-start gap-[18px] text-left text-xl text-dark-blue-sw font-x-hp-title ${className}`}
    >
      <img
        className="w-[196.3px] h-[197px] relative object-contain"
        loading="lazy"
        alt=""
        src={allWebsiteIcons15}
      />
      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[30px]">
        <div className="h-[141px] flex-1 relative tracking-[-0.02em] leading-[143.5%] inline-block">
          <p className="[margin-block-start:0] [margin-block-end:13.93px]">
            <b>{improveConversion}</b>
          </p>
          <p className="m-0 text-base">{elevateYourSuccessInWeeks}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductivityIcon;
