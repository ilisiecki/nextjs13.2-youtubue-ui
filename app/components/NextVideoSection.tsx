import React from "react";

export type Props = { numberOfVideosToDisplay: number };

const NextVideoSection = (props: Props) => {
  return <div>{props.numberOfVideosToDisplay}</div>;
};

export default NextVideoSection;
