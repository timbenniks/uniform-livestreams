import {
  ComponentProps,
  registerUniformComponent,
} from "@uniformdev/canvas-react";
import React from "react";

type TitleProps = ComponentProps<{
  copy: string;
  tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  component: {
    variant?: string;
  };
}>;

const Title: React.FC<TitleProps> = ({
  copy,
  tag,
  component: { variant },
}: TitleProps) => {
  const TitleTag = ({ tagName, children, ...props }) =>
    React.createElement(tagName, props, children);

  let size = "";

  switch (variant) {
    case "large":
      size = "text-3xl md:text-5xl";
      break;
    case "medium":
      size = "text-3xl md:text-4xl";
      break;
    case "small":
      size = "text-3xl";
      break;

    default:
      size = "text-3xl md:text-5xl";
      break;
  }

  return (
    <TitleTag tagName={tag || "h1"} className={`font-bold mb-2 ${size}`}>
      {copy}
    </TitleTag>
  );
};
registerUniformComponent({
  type: "title",
  component: Title,
});

export default Title;
