import { FunctionComponent } from "react";

export type LoginType = {
  className?: string;
  existingStarDoxUsersLogin?: string;
  portalSignIn?: string;
};

const Login: FunctionComponent<LoginType> = ({
  className = "",
  existingStarDoxUsersLogin,
  portalSignIn,
}) => {
  return (
    <div
      className={`flex flex-col items-start justify-start gap-[9.6px] text-left text-mini-8 text-dark-blue-sw font-x-hp-title ${className}`}
    >
      <div className="relative z-[1]">{existingStarDoxUsersLogin}</div>
      <button className="cursor-pointer [border:none] pt-[9.8px] px-[26px] pb-[9.9px] bg-bluish-grey-sw rounded-xl flex flex-row items-start justify-start whitespace-nowrap z-[1] hover:bg-slategray">
        <div className="relative text-sm-1 font-x-hp-title text-white text-left inline-block min-w-[85px]">
          {portalSignIn}
        </div>
      </button>
    </div>
  );
};

export default Login;
