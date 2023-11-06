import React from "react";

const Button = ({ className, name }) => {
  return (
    <button
      className={`text-sm ${className} font-brand border border-brand px-5 py-3 text-white hover:bg-brand duration-500 relative after:border-0 after:hover:border after:border-brand after:inset-0 after:hover:-inset-2 after:absolute after:transition-all after:duration-500`}
    >
      {name}
    </button>
  );
};

export default Button;
