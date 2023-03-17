import React from "react";
import { generateClassNames } from "../utils/storage";
import "./component.scss";
export type RateProps = {
  rate: string;
};
export const Rate = (props: RateProps) => {
  const { rate } = props;

  const renderClassnames = () =>
    generateClassNames("rate__in", [`rate__in--${rate}`]);
  return (
    <div className="rate">
      <div className={renderClassnames()}></div>
    </div>
  );
};
