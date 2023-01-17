import {
  ComponentProps,
  registerUniformComponent,
  Slot,
} from "@uniformdev/canvas-react";

type Image = {
  id: string;
  rawurl: string;
  baseurl: string;
  width: string;
  transdormedurl: string;
  height: string;
  alt: string;
  caption: string;
  srcset: string;
};

type HighlightProps = ComponentProps<{
  title: string;
  description: string;
  image: Image;
  component: {
    variant?: string;
  };
}>;

const Highlight: React.FC<HighlightProps> = ({
  title,
  description,
  image,
  component: { variant },
}: HighlightProps) => (
  <div
    className={`highlight ${
      variant ? "bg-[#001C6C]" : "bg-[#DF0000]"
    } text-white`}
  >
    <div className="max-w-7xl m-auto flex justify-between flex-col md:flex-row">
      <article className="p-12 md:px-0 md:py-12">
        <h3 className="font-bold text-3xl md:text-5xl mb-2">{title}</h3>
        <h4 className="mb-8">{description}</h4>
        <div className="flex space-y-3 md:space-x-3 md:space-y-0 flex-col md:flex-row text-center">
          <Slot name="primaryCta" />
          <Slot name="secondaryCta" />
        </div>
      </article>
      {image ? (
        <img
          srcSet={(image && image[0]?.srcset) || ""}
          alt={(image && image[0]?.alt) || ""}
          width={(image && image[0]?.width) || ""}
          height={(image && image[0]?.height) || ""}
          className="block max-w-[489px]"
          loading="lazy"
        />
      ) : null}
    </div>
  </div>
);

registerUniformComponent({
  type: "highlight",
  component: Highlight,
});

export default Highlight;
