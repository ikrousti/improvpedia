import React from "react";

interface PageHeaderProps {
  heading: string,
  text?: string,
}

export default function PageHeader({ heading, text } : PageHeaderProps) {
  return (
    <div className="my-16 mx-80 text-center">
    { text && <span className="text-violet-400 font-bold max-w-xs">{text}</span> }
    <h2 className="text-4xl my-4 lg:text-5xl font-bold font-heading">{heading}</h2>
  </div>
  );
}
