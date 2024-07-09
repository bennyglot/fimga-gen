import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type AccuracyCategoryType = {
  className?: string;
  allWebsiteIcons5?: string;
  purchaseOrderAccuracy?: string;
  prop?: string;

  /** Style props */
  propGap?: CSSProperties["gap"];
  propPadding?: CSSProperties["padding"];
};

const AccuracyCategory: FunctionComponent<AccuracyCategoryType> = ({
  className = "",
  allWebsiteIcons5,
  purchaseOrderAccuracy,
  prop,
  propGap,
  propPadding,
}) => {
  const accuracyCategoryStyle: CSSProperties = useMemo(() => {
    return {
      gap: propGap,
      padding: propPadding,
    };
  }, [propGap, propPadding]);

  return (
    <div
      className={`flex-1 shadow-[0px_6px_35px_rgba(180,_182,_187,_0.5)] rounded-mini bg-white flex flex-col items-end justify-start pt-[45px] px-[38px] pb-[35px] box-border gap-[20px] min-w-[433px] max-w-full text-center text-7xl text-dark-blue-sw font-x-hp-title mq925:min-w-full ${className}`}
      style={accuracyCategoryStyle}
    >
      <div className="w-[666px] h-[300px] relative shadow-[0px_6px_35px_rgba(180,_182,_187,_0.5)] rounded-mini bg-white hidden max-w-full" />
      <div className="self-stretch flex flex-row items-start justify-center py-0 pr-0 pl-0.5">
        <img
          className="h-[105px] w-[106px] relative object-cover z-[1]"
          loading="lazy"
          alt=""
          src={allWebsiteIcons5}
        />
      </div>
      <div className="self-stretch relative tracking-[-0.02em] font-semibold z-[1] mq450:text-2xl">
        <p className="[margin-block-start:0] [margin-block-end:1px]">
          {purchaseOrderAccuracy}
        </p>
        <p className="m-0 text-17xl text-blue-sw">{prop}</p>
      </div>
    </div>
  );
};

export default AccuracyCategory;
