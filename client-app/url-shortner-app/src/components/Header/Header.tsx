import * as React from "react";

interface IHeaderProps {}

const Header: React.FunctionComponent<IHeaderProps> = () => {
  return (
    <div className="bg-slate-900">
      <div className="contaoner p-2 mx-auto">
        <nav className="py-5">
          <div className=" text-white text-5xl text-center pb-4 font-serif">
            URL Shortner
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
