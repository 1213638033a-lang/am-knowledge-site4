import React from "react";
export function Button({children, className="", variant="default", ...props}: any){
  const base = "inline-flex items-center justify-center rounded-2xl px-4 py-2 text-sm transition border";
  const styles = variant==="outline" ? "bg-white border-gray-300 hover:bg-gray-50"
    : variant==="ghost" ? "bg-transparent border-transparent hover:bg-gray-100"
    : "bg-black text-white border-black hover:opacity-90";
  return <button className={base + " " + styles + " " + className} {...props}>{children}</button>;
}