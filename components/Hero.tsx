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

type HeroProps = ComponentProps<{
  title: string;
  subTitle: string;
  image: Image[];
  lightVersion: boolean;
  background?: string;
  component: {
    variant?: string;
  };
}>;

const Hero: React.FC<HeroProps> = ({
  title,
  subTitle,
  image,
  lightVersion,
  background,
  component: { variant },
}: HeroProps) => (
  <div
    style={{ background: background ? background : "#19222F" }}
    className={`${lightVersion ? "text-[#001C6C]" : "text-white"} hero-${
      variant ? variant : "default"
    } ${lightVersion ? "hero-light" : ""}`}
  >
    <div
      className={`flex ${
        variant
          ? "flex-col-reverse md:flex-row-reverse"
          : "flex-col md:flex-row"
      } max-w-7xl m-auto`}
    >
      <div className="md:w-2/4 flex md:items-center justify-center">
        <article className="max-w-xl p-8 md:p-0">
          <h1 className="font-bold text-3xl md:text-5xl leading-[58px] mb-2 md:mb-6">
            {title}
          </h1>
          <h2 className="font-bold md:text-[21px] leading-[24px] mb-8">
            {subTitle}
          </h2>

          <div className="flex space-y-3 md:space-x-3 md:space-y-0 flex-col md:flex-row text-center">
            <Slot name="primaryCta" />
            <Slot name="secondaryCta" />
          </div>
        </article>
      </div>
      <div className="md:w-2/4">
        {image ? (
          <img
            srcSet={(image && image[0]?.srcset) || ""}
            alt={(image && image[0]?.alt) || ""}
            width={(image && image[0]?.width) || ""}
            height={(image && image[0]?.height) || ""}
            className="block"
            loading="lazy"
          />
        ) : null}
      </div>
    </div>
  </div>
);

registerUniformComponent({
  type: "hero",
  component: Hero,
});

export default Hero;
