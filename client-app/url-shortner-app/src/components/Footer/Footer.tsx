import * as React from "react";

interface IFooterProps {}

const Footer: React.FunctionComponent<IFooterProps> = () => {
  return (
    <>
      <div className="bg-slate-950 text-white test-base text-center py-5 ">
        Copyright &#169; URLShortner | Hitesh
      </div>
    </>
  );
};

export default Footer;
