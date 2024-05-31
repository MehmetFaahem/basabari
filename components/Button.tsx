import React from "react";

function Button({ children }: any) {
  return (
    <button className="font-bold space-x-[10px] flex flex-row mt-[30px] text-[30px] font-hind w-auto px-[30px] place-items-center place-content-center py-[10px] h-auto text-white bg-orange-600 rounded-xl">
      {children}
    </button>
  );
}

export default Button;
