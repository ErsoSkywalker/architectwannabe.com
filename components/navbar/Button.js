import React from "react";
import Link from "next/link";
const Button = ({ text = "", action, icon = <></>, route = "/" }) => {
  return (
    <>
      <Link href={route}>
        <button
          className="bg-teal my-5 hover:animate-pulse w-full p-5 rounded shadow-lg select-none hover:italic"
          onClick={action}
        >
          <p className="text-xl text-black font-semibold flex justify-between">
            {icon}
            {" " + text}
          </p>
        </button>
      </Link>
    </>
  );
};

export default Button;
