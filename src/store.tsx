import React from "react";
import { RecoilRoot } from "recoil";

type Props = {
  children: React.ReactNode;
};

const StoreWrapper = ({ children }: Props) => {
  return <RecoilRoot>{children}</RecoilRoot>;
};

export default StoreWrapper;
