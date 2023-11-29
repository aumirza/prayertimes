import React, { PropsWithChildren, ReactElement, forwardRef } from "react";

// eslint-disable-next-line react/display-name
const Container = forwardRef<
  HTMLDivElement,
  PropsWithChildren<{ footer: ReactElement }>
>(({ footer, children }, ref) => {
  return (
    <div ref={ref} className="w-[23rem] bg-green-50 rounded-md shadow-md p-2">
      <div className="p-10">{children}</div>
      <div className="flex items-center justify-center">{footer}</div>
    </div>
  );
});

export default Container;
