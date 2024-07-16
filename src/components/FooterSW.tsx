import { FunctionComponent, useMemo, type CSSProperties } from "react";
import SocialLinks from "./SocialLinks";
import Login from "./Login";

export type FooterSWType = {
  className?: string;
  stargoLogo?: string;
  radixIconsinstagramLogo?: string;
  rilinkedinFill?: string;
  rifacebookBoxFill?: string;

  /** Style props */
  propMarginTop?: CSSProperties["marginTop"];
};

const FooterSW: FunctionComponent<FooterSWType> = ({
  className = "",
  stargoLogo,
  radixIconsinstagramLogo,
  rilinkedinFill,
  rifacebookBoxFill,
  propMarginTop,
}) => {
  const footerSWStyle: CSSProperties = useMemo(() => {
    return {
      marginTop: propMarginTop,
    };
  }, [propMarginTop]);

  return (
    <footer
      className={`self-stretch flex flex-col items-start justify-start pt-[31px] px-[251px] pb-[50px] box-border relative gap-[26px] max-w-full text-left text-mini text-dark-blue-sw font-x-hp-title mq925:pt-5 mq925:px-[62px] mq925:pb-8 mq925:box-border mq1350:pl-[125px] mq1350:pr-[125px] mq1350:box-border ${className}`}
      style={footerSWStyle}
    >
      <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] bg-light-background-sw" />
      <div className="w-[153px] h-[54px] absolute !m-[0] top-[32px] left-[251px] z-[1]" />
      <img
        className="w-[153px] h-[51px] relative z-[2]"
        alt=""
        src={stargoLogo}
      />
      <div className="w-[1387px] h-[9px] flex flex-row items-start justify-start pt-0 px-0 pb-2 box-border max-w-full">
        <div className="self-stretch flex-1 relative bg-line-sw box-border max-w-full z-[1] border-t-[1px] border-solid border-line-sw" />
      </div>
      <div className="w-[1387px] flex flex-row items-start justify-between pt-0 px-0 pb-[19.9px] box-border max-w-full gap-[20px] mq1825:flex-wrap">
        <div className="w-[900px] flex flex-row items-start justify-start min-w-[900px] [row-gap:20px] max-w-full mq1350:flex-wrap mq1825:flex-1 mq1825:min-w-full">
          <div className="w-[180px] flex flex-col items-start justify-start gap-[9px]">
            <div className="w-20 relative flex items-center z-[1]">
              Solutions
            </div>
            <div className="self-stretch h-[200px] relative text-smi leading-[31px] text-light-text-sw inline-block shrink-0 z-[1]">
              <p className="m-0">Stardox</p>
              <p className="m-0">Starpay</p>
              <p className="m-0">Marine Insurance</p>
              <p className="m-0">Starboard</p>
            </div>
          </div>
          <div className="w-[180px] flex flex-col items-start justify-start gap-[9px]">
            <div className="w-[90px] relative flex items-center z-[1]">
              Use Cases
            </div>
            <div className="self-stretch h-[200px] relative text-smi leading-[31px] text-light-text-sw inline-block shrink-0 z-[2]">
              <p className="m-0">Freight Forwarders</p>
              <p className="m-0">Shippers</p>
              <p className="m-0">Freight Brokers</p>
              <p className="m-0">Domestic Road</p>
              <p className="m-0">Carriers</p>
              <p className="m-0">Customs Brokers</p>
            </div>
          </div>
          <div className="w-[180px] flex flex-col items-start justify-start gap-[9px]">
            <div className="w-[90px] relative flex items-center z-[1]">
              Resources
            </div>
            <div className="self-stretch h-[200px] relative text-smi leading-[31px] text-light-text-sw inline-block shrink-0 z-[3]">
              <p className="m-0">Blog</p>
              <p className="m-0">Case Studies</p>
              <p className="m-0">Press</p>
              <p className="m-0">Investors</p>
              <p className="m-0">Integrations</p>
              <p className="m-0">Contact Us</p>
            </div>
          </div>
          <div className="flex-1 flex flex-row items-start justify-start min-w-[234px] max-w-full [row-gap:20px] mq450:flex-wrap">
            <div className="flex-1 flex flex-col items-start justify-start gap-[9px] min-w-[117px]">
              <div className="w-14 relative flex items-center z-[1]">About</div>
              <div className="self-stretch h-[200px] relative text-smi leading-[31px] text-light-text-sw inline-block shrink-0 z-[1]">
                <p className="m-0">Company Overview</p>
                <p className="m-0">Meet the Team</p>
                <p className="m-0">Board</p>
                <p className="m-0">Careers</p>
                <p className="m-0">Partners</p>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-[9px] min-w-[117px]">
              <div className="w-[150px] relative flex items-center z-[1]">{`Legal `}</div>
              <div className="self-stretch h-[200px] relative text-smi leading-[31px] text-light-text-sw inline-block shrink-0 z-[2]">
                <p className="m-0">{`Terms & Conditions`}</p>
                <p className="m-0">Privacy Policy</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-[19.8px] min-w-[320px] text-mini-8 text-dimgray mq1825:flex-1">
          <SocialLinks
            radixIconsinstagramLogo="/radixiconsinstagramlogo.svg"
            rilinkedinFill="/rilinkedinfill.svg"
            rifacebookBoxFill="/rifacebookboxfill.svg"
          />
          <Login
            existingStarDoxUsersLogin="Existing StarDox users login page"
            portalSignIn="Portal Sign In"
          />
          <Login
            existingStarDoxUsersLogin="Check how much you can save with Stargo"
            portalSignIn="ROI Calculator"
          />
        </div>
      </div>
      <div className="w-[1387px] flex flex-col items-start justify-start gap-[25px] max-w-full text-smi text-light-text-sw">
        <div className="self-stretch h-px relative bg-line-sw box-border z-[1] border-t-[1px] border-solid border-line-sw" />
        <div className="self-stretch relative leading-[184.7%] z-[1]">
          <p className="m-0 whitespace-pre-wrap">
            All Rights Reserved Stargo 2024 © Stargo is trading name of G-ILS
            Transportation Ltd whose registered office is Hasadna 8 Ra’anana,
            4365104, Israel
          </p>
          <p className="m-0">
            Disclaimer: G_ILS is Transportation Ltd not affiliated‭, ‬associated
            with‭, ‬sponsored by or endorsed by any of the shipping lines,
            airlines, trucking companies, domestic carriers, courier providers
            mentioned in this site‭.‬
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSW;