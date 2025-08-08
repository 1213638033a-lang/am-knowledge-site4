import React from "react";
export function Card({children, className=""}: any){ return <div className={"border rounded-2xl "+className}>{children}</div>; }
export function CardHeader({children, className=""}: any){ return <div className={"p-4 "+className}>{children}</div>; }
export function CardTitle({children, className=""}: any){ return <div className={"font-semibold "+className}>{children}</div>; }
export function CardContent({children, className=""}: any){ return <div className={"p-4 pt-0 "+className}>{children}</div>; }